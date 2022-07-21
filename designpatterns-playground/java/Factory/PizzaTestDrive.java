// import simplefactory.SimplePizzaFactory;
import store.ChicagoPizzaStore;
import store.NYPizzaStore;
import store.PizzaStore;

public class PizzaTestDrive {
  public static void main(String[] args) {
    PizzaStore nyPizzaStore = new NYPizzaStore();
    PizzaStore chicagoPizzaStore = new ChicagoPizzaStore();

    nyPizzaStore.orderPizza("cheese");
    chicagoPizzaStore.orderPizza("cheese");
  }
}
