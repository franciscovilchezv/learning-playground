public class Horse extends Animal{

	public static void eat(){
		System.out.println("Horse eating");
	}

	public void test(){
		this.eat();
		super.eat();
	}


	public void multi(Object object){
		System.out.println("object");
	}

	public void multi(Animal animal){
		System.out.println("animal");
	}

	public static void main(String[] args){
		Horse horse1 = new Horse();
		Animal horse2 = new Horse();

		System.out.println(horse2);

	}
}