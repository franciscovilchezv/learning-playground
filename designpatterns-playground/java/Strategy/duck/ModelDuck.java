package duck;

import behavior.fly.FlyNoWay;
import behavior.quack.Quack;

public class ModelDuck extends Duck {

  public ModelDuck() {
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyNoWay();
  }

  @Override
  public void display() {
    System.out.println("I am a duck model");
  }
}
