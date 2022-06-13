import behavior.fly.FlyRocketPowered;
import duck.MallardDuck;
import duck.ModelDuck;

public class MiniDuckSimulator {
  public static void main(String[] args) {
    MallardDuck mallardDuck = new MallardDuck();

    mallardDuck.performQuack();
    mallardDuck.performFly();

    ModelDuck modelDuck = new ModelDuck();
    modelDuck.performQuack();
    modelDuck.performFly();
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
  }
}