const amqp = require('amqplib');
const args = process.argv.slice(2);

async function main () {
  const conn = await amqp.connect('amqp://localhost')

  const channel = await conn.createChannel();

  const exchange = 'topic_logs';
  // const queue = 'hello'
  const msg = args.slice(1).join(' ') || 'Hello World!';
  const routingKey = (args.length > 0) ? args[0] : 'anonymous.info';

  await channel.assertExchange(exchange, 'topic', { durable: false });

  // await channel.assertQueue(queue, { durable: false }); // whether queue persist even if RabbitMQ dies
  // channel.sendToQueue(queue, Buffer.from(msg), { persistent: false }); // whether msg persist even if RabbitMQ dies

  channel.publish(exchange, routingKey, Buffer.from(msg));

  console.log(`[X] Sent to queue ${msg}`);

  await channel.close()

  await conn.close()
}

main();
