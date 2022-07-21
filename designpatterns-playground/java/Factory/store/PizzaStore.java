package store;

import pizza.Pizza;
// import simplefactory.SimplePizzaFactory;


// Factory Method Pattern
public abstract class PizzaStore { 
  // SimplePizzaFactory simplePizzaFactory;
  // public PizzaStore(SimplePizzaFactory simplePizzaFactory) {
  //   this.simplePizzaFactory = simplePizzaFactory;
  // }

  public Pizza orderPizza(String type) {
    Pizza pizza;

    // pizza = simplePizzaFactory.createPizza(type);
    pizza = createPizza(type);
    
    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }

  public abstract Pizza createPizza(String type);
}