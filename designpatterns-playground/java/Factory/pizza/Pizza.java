package pizza;

// import java.util.ArrayList;
// import java.util.List;
import ingredient.cheese.Cheese;
import ingredient.dough.Dough;
import ingredient.pepperoni.Pepperoni;
import ingredient.sauce.Sauce;

public abstract class Pizza {
  public String name;
  public Dough dough;
  public Sauce sauce;
  public Cheese cheese;
  public Pepperoni pepperoni;
  // public List<String> toppings = new ArrayList<String>();

  // public void prepare() {
  //   System.out.println("Preparing " + this.getName());
  //   System.out.println("Tossing dough");
  //   System.out.println("Adding sauce");
  //   System.out.println("Adding toppings");
  //   for (String topping : toppings) {
  //     System.out.println("   " + topping);
  //   }
  // }

  public abstract void prepare();

  public void bake() {
    System.out.println("Bake for 25 mins at 350");
  }

  public void cut() {
    System.out.println("Cut in diagonal slices");
  }

  public void box() {
    System.out.println("Place pizza in official PizzaStore box");
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }
}
