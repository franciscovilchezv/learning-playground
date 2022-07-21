package store;

import ingredient.ChicagoPizzaIngredientFactory;
import ingredient.PizzaIngredientFactory;
import pizza.Pizza;
// import pizza.chicago.ChicagoStyleCheesePizza;
import pizza.regular.CheesePizza;

public class ChicagoPizzaStore extends PizzaStore {
  PizzaIngredientFactory ingredientFactory = new ChicagoPizzaIngredientFactory();

  @Override
  public Pizza createPizza(String type) {
    Pizza pizza = null;
    if (type == "cheese") {
      // return new ChicagoStyleCheesePizza();
      pizza = new CheesePizza(ingredientFactory);
      pizza.setName("Chicago Style Cheese Pizza");
    }
    
    return pizza;
  }
}
