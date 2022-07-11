package starbuzz.condiment;

import starbuzz.Beverage;
import starbuzz.CondimentDecorator;

public class Soy extends CondimentDecorator {

  public Soy(Beverage beverage) {
    this.beverage = beverage;
  }
  
  @Override
  public String getDescription() {
    return this.beverage.getDescription() + ", Soy";
  }

  @Override
  public double cost() {
    double cost = beverage.cost();
    if (beverage.getSize() == Size.TALL) {
			cost += .10;
		} else if (beverage.getSize() == Size.GRANDE) {
			cost += .15;
		} else if (beverage.getSize() == Size.VENTI) {
			cost += .20;
		}
    return cost;
  }
}
