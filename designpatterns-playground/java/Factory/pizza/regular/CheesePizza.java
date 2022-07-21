package pizza.regular;

import ingredient.PizzaIngredientFactory;
import pizza.Pizza;

public class CheesePizza extends Pizza {
  PizzaIngredientFactory pizzaIngredientFactory;

  public CheesePizza(PizzaIngredientFactory pizzaIngredientFactory) {
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }

  @Override
  public void prepare() {
    System.out.println("Preparing " + this.name);
    this.dough = pizzaIngredientFactory.createDough();
    this.sauce = pizzaIngredientFactory.createSauce();
    this.cheese = pizzaIngredientFactory.createCheese();
  }
}