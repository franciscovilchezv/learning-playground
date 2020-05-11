import food.Vegetable;
import physic.Gravital;

abstract class Lettuce extends Vegetable{

	static int id = 4;

	static void ninjaFruit(int... x){
		for(int y: x){
			System.out.println(y);
		}
	}

	final void beGreen(){

		Gravital gravital = new Apple();
		gravital.fall();

		System.out.println("I am gree");
	}
}