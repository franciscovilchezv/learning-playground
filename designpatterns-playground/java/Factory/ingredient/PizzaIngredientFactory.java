package ingredient;

import ingredient.cheese.Cheese;
import ingredient.dough.Dough;
import ingredient.pepperoni.Pepperoni;
import ingredient.sauce.Sauce;

public interface PizzaIngredientFactory {
  public Dough createDough();
  public Cheese createCheese();
  public Sauce createSauce();
  public Pepperoni createPepperoni();
}
