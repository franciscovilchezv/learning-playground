import behavior.fly.FlyRocketPowered;
import duck.Duck;
import duck.MallardDuck;
import duck.ModelDuck;

public class MiniDuckSimulator {
  public static void main(String[] args) {
    Duck mallardDuck = new MallardDuck();

    mallardDuck.performQuack();
    mallardDuck.performFly();

    Duck modelDuck = new ModelDuck();
    modelDuck.performQuack();
    modelDuck.performFly();
    modelDuck.setFlyBehavior(new FlyRocketPowered());
    modelDuck.performFly();
  }
}