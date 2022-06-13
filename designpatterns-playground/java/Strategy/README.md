The Strategy Pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

- Creating systems using composition gives you a lot more flexibility. Not only does it let you encapsulate a family of algorithms into their own set of classes, but it also lets you change behavior at runtime

- You should “program to a supertype” as “the declared type of the variables should be a supertype, usually an abstract class or interface, so that the objects assigned to those variables can be of any concrete implementation of the supertype, which means the class declaring them doesn’t have to know about the actual object types!”

- f you’ve got some aspect of your code that is changing, say with every new requirement, then you know you’ve got a behavior that needs to be pulled out and separated from all the stuff that doesn’t change. All patterns provide a way to let some part of a system vary independently of all other parts. Take the parts that vary and encapsulate them, so that later you can alter or extend the parts that vary without affecting those that don’t.