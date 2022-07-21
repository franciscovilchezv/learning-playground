package pizza.regular;

import ingredient.PizzaIngredientFactory;
import pizza.Pizza;

public class PepperoniPizza extends Pizza {
  PizzaIngredientFactory pizzaIngredientFactory;

  public PepperoniPizza(PizzaIngredientFactory pizzaIngredientFactory) {
    this.pizzaIngredientFactory = pizzaIngredientFactory;
  }

  @Override
  public void prepare() {
    System.out.println("Preparing " + this.name);
    this.dough = pizzaIngredientFactory.createDough();
    this.sauce = pizzaIngredientFactory.createSauce();
    this.cheese = pizzaIngredientFactory.createCheese();
    this.pepperoni = pizzaIngredientFactory.createPepperoni();
  }
}