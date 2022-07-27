# Singleton

The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it.

## How to improve multithreading?

- Move to an eagerly created instance rather than a lazily created one.
- Use “double-checked locking” to reduce the use of synchronization in getInstance(). (volatile + synchronized)
