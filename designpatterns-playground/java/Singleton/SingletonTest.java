public class SingletonTest {
  public static void main(String[] args) {
    Singleton singleton = Singleton.getInstance();

    singleton.sayHello();

    SingletonEnum singletonEnum = SingletonEnum.INSTANCE;

    singletonEnum.sayHello();
  }
}
