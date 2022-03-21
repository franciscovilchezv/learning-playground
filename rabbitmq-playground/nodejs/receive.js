const amqp = require('amqplib');
const args = process.argv.slice(2);

let channel;

const { wait } = require('./utils');

async function main () {
  const conn = await amqp.connect('amqp://localhost')

  channel = await conn.createChannel();
  await channel.prefetch(1);

  const exchange = 'topic_logs';
  // const queue = 'hello'

  // await channel.assertQueue(queue, { durable: false });
  await channel.assertExchange(exchange, 'topic', { durable: false });

  const q = await channel.assertQueue('', { exclusive: true });

  for (let i = 0; i < args.length; i++) {
    const bindingKey = args[i];
    await channel.bindQueue(q.queue, exchange, bindingKey);
  }

  await channel.consume(q.queue, onMessage, { noAck: false })
}

async function onMessage (msg) {
  console.log(`[X] Received ${msg.content.toString()}`);

  const secs = (msg.content.toString().split('.').length - 1) * 1000;

  await wait(secs);

  channel.ack(msg);

  console.log(`[X] Done ${msg.content.toString()}`);
}

main();
