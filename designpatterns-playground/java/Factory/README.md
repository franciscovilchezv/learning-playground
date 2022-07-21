# Factory

Design Principle (Dependency Inversion Principle): Depend upon abstractions. Do not depend upon concrete classes. It suggests that our high-level components should not depend on our low-level components; rather, they should both depend on abstractions

## Factory Method

Defines an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to the subclasses. 

Factory Method relies on inheritance: object creation is delegated to subclasses, which implement the factory method to create objects.

create objects through inheritance

to create objects using Factory Method, you need to extend a class and provide an implementation for a factory method.

the whole point of the Factory Method Pattern is that you’re using a subclass to do your creation for you

Factory Method; use me to decouple your client code from the concrete classes you need to instantiate, or if you don’t know ahead of time all the concrete classes you are going to need. To use me, just subclass me and implement my factory method!

## Abstract Factory

Provides an interface for creating families of related or dependent objects without specifying their concrete class.

Abstract Factory relies on object composition: object creation is implemented in methods exposed in the factory interface.

create objects through object composition.

interface has to change if new products are added

 Abstract Factory, and use me whenever you have families of products you need to create and you want to make sure your clients create products that belong together.