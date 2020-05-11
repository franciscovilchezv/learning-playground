import food.Fruit;
import food.Vegetable;
import food.Soda;

class Pear extends Maker{
	
	int count = 10;

	public void taste(){
		System.out.println(Lettuce.id);
	}

	public void eat(){
	}

	public static void main(String[] args){
		Pear pear = new Pear();
		Maker maker = new Maker();

		System.out.println(pear instanceof Maker);
		System.out.println(pear instanceof Pear);
		System.out.println(maker instanceof Maker);
		System.out.println(maker instanceof Pear);
	}
}