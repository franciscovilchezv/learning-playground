import physic.Gravital;
import static food.Garbage.MYTYPE;



public class Dog extends Animal implements Gravital{
	int c = 4;
	static String name = "dog";
	char ss;
	
	Size size;

	public void fall(){
		System.out.println("Dog falling");
	}

	public Dog ham(){
		return new Dog();	
	}

	public static void change(){
		String name = "mom";
		System.out.println(name);
		System.out.println(Dog.name);
	}

	public void test(int i){
		{
			System.out.println("aa");
		}
		System.out.println("bb");
		{
			System.out.println("cc");
		}
	}

	public static void main(String[] args){
		
		
		boolean t = true;
		
		System.out.println(!t);
		System.out.println("t" + 2 * 3);
		
	}

	public Dog(){
		
	}

}