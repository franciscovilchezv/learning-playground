package store;

import ingredient.NYPizzaIngredientFactory;
import ingredient.PizzaIngredientFactory;
import pizza.Pizza;
// import pizza.ny.NYStyleCheesePizza;
import pizza.regular.CheesePizza;

public class NYPizzaStore extends PizzaStore {

  PizzaIngredientFactory ingredientFactory = new NYPizzaIngredientFactory();

  @Override
  public Pizza createPizza(String type) {
    Pizza pizza = null;
    if (type == "cheese") { 
      // return new NYStyleCheesePizza();
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("New York Style Cheese Pizza");
    }


    return pizza;
  }
  
}
