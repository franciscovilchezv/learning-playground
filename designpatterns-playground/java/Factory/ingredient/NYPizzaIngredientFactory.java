package ingredient;

import ingredient.cheese.Cheese;
import ingredient.cheese.ReggianoCheese;
import ingredient.dough.Dough;
import ingredient.dough.ThinCrustDough;
import ingredient.pepperoni.Pepperoni;
import ingredient.sauce.MarinaraSauce;
import ingredient.sauce.Sauce;

public class NYPizzaIngredientFactory implements PizzaIngredientFactory {
  @Override
  public Cheese createCheese() {
    return new ReggianoCheese();
  }

  @Override
  public Sauce createSauce() {
    return new MarinaraSauce();
  }

  @Override
  public Dough createDough() {
    return new ThinCrustDough();
  }

  @Override
  public Pepperoni createPepperoni() {
    return new Pepperoni();
  }
}
