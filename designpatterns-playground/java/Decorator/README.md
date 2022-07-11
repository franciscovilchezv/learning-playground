# Decorator

- Our goal is to allow classes to be easily extended to incorporate new behavior without modifying existing code.

-  When I inherit behavior by subclassing, that behavior is set statically at compile time. In addition, all subclasses must inherit the same behavior. If, however, I can extend an object’s behavior through composition, then I can do this dynamically at runtime. Code should be closed (to change) like the lotus flower in the evening, yet open (to extension) like the lotus flower in the morning.

- Design Principle: Classes should be open for extension, but closed for modification.

-  The Decorator Pattern attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

- We’re going to see a much better way of creating decorated objects when we cover the Factory and Builder Design Patterns.