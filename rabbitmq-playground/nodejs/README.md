# RabbitMQ terminology

- Producer: Sends message to the queue
- Consumer: Consumes message from the queue

- Queue: Buffer that stores messages
  - Exclusive queue: Can only be consumed by its declared connection

- Channel: Session openned to communicate with the RabbitMQ

- Exchange: Receives messages from producer and publishes them in a queue.
- Exchange type: Defines the rules about that to do with the message (publish to a spefic queue, all, none, etc...)
  - direct: the message go to the queue that matches whose *binding key* matches the *routing key* of the message.
  - topic: binding key is no longer arbitrary. It can have characters such as `*` and `#`.
  - headers
  - fanout: delivers the message to every queue bound to it

### .ack

Message is acknowledged by the consumer (i.e. it was processed)

```
channel.ack(msg);
```

### Durability

- We can make the queue persistent even if the RabbitMQ server dies, we do that by declaring our queue `{ durable: true }` in the consumer and producer.

```
channel.assertQueue(queue, { durable: true });
```

*Note: If the queue was already created as not persistent, you need to either delete or create a new one.*

- Messages can also be marks as persistent with `{ persistent: true }`.

```
channel.sendToQueue(queue, Buffer.from(msg), { persistent: true });
```

### Avoid processing multiple messages at same time by a consumer

We can tell RabbitMQ to only *dispatch* one message at a time to a consumer

```
await channel.prefetch(1);
```

*Note: Make sure to keep an eye on how your queue grows*

### Exchanges

Responsible for routing the message into specifical queues. 

Exchange itself does not write the messages to disk, but the queues can. Because of that, it is recommendable to create te queues before the producer in terminal/Web UI or run the consumers before.

#### Producer

Exchanges are in charge of publishing the message in a queue(s) if they are available according to the rules defined by the [*Exchange type*](https://www.rabbitmq.com/tutorials/amqp-concepts.html#exchanges).

```
channel.assertExchange(exchange_name, exchange_type, { durable: false });
```

The producer is the one that defines the exchange where the messages will go

#### Consumer

Consumer still interacts directly with the queue. However, they can *bind* a specific queue with a exchange.

```
channel.bindQueue(queue_name, exchange_name, pattern);

channgel.consume(queue_name)
```

The pattern allows us to mark every message 

### Useful terminal commands

- List queues

```
rabbitmqctl list_queues
```

- List exchanges: `amp.*` are exchanges created by default. Hardly used.

```
rabbitmqctl list_exchanges
```

### Additional notes

Guide based on RabbitMQ [tutorials](https://www.rabbitmq.com/getstarted.html).

The most alike system in Azure would be [Azure Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-nodejs-how-to-use-queues).

Other useful links:

- [Comparison between Storage Queues and Service Bus](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-azure-and-service-bus-queues-compared-contrasted)
- [Service Bus documentation](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-queues-topics-subscriptions)
- [Azure Service Bus overview](https://docs.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)