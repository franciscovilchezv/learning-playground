package starbuzz;

public abstract class CondimentDecorator extends Beverage {
  protected Beverage beverage;

  public abstract String getDescription();

  public Size getSize() {
    return this.beverage.getSize();
  }
}
