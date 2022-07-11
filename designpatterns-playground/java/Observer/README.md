# Observer

Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

- The HAS-A relationship is an interesting one: each duck has a FlyBehavior and a QuackBehavior (As class attributes) to which it *delegates* flying and quacking. When you put two classes together like this you’re using *composition*. Instead of inheriting their behavior, the ducks get their behavior by being composed with the right behavior object.

- Strive for loosely coupled designs between objects that interact: Loosely coupled designs allow us to build flexible OO systems that can handle change because they minimize the interdependency between objects.

- We say a object is tightly coupled to another object when it is too dependent on that object. A loosely coupled object doesn’t know or care too much about the details of another object.
