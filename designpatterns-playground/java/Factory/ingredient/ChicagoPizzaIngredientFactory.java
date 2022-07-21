package ingredient;

import ingredient.cheese.Cheese;
import ingredient.cheese.MozarellaCheese;
import ingredient.dough.Dough;
import ingredient.dough.ThickCrustDough;
import ingredient.pepperoni.Pepperoni;
import ingredient.sauce.PlumpTomatoSauce;
import ingredient.sauce.Sauce;

public class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
  @Override
  public Cheese createCheese() {
    return new MozarellaCheese();
  }

  @Override
  public Sauce createSauce() {
    return new PlumpTomatoSauce();
  }

  @Override
  public Dough createDough() {
    return new ThickCrustDough();
  }

  @Override
  public Pepperoni createPepperoni() {
    return new Pepperoni();
  }
}
