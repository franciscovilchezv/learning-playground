import food.Salads;
import food.Soda;
import java.util.*;
import static java.lang.System.*;

public class Maker extends Animal{

	String aaa = "Maker";
	int b;
	static int a = 42;

	public void fall(){
		out.println("asdfadsd");
		System.out.println("Maker falling");
	}

	public Maker(){
		System.out.println("testsetset");
		System.out.println(null instanceof Object);
	}

	public void test(final int d){
		fall();
		this.aaa = "test";
		System.out.println(aaa);
		System.out.println(super.aaa);
		
	}

	public void assertme(int x){
		assert(-1 > 0): "que pasooo";
		System.out.println(true);

	}

	public static void main(String[] args){
		Maker m = new Maker();
		m.assertme(-1);
	}
}