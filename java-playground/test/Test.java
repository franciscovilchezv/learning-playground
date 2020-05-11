package test;

public class Test {
  public static void main(String[] args){
    int a = 8;
    {
      int a = 3;
      System.out.println(a);
    }
    System.out.println(a);
  }
}
