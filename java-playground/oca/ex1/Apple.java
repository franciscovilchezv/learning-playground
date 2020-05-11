import food.Fruit;
import physic.Gravital;

class Apple extends Fruit implements Gravital {
	int age = 8;

	@Override
	public void born(){
		System.out.println("Hello horrible world");
	}

	@Override
	public void grow(){
		System.out.println("ok, not growing");
	}

	@Override
	public void fall(){
		System.out.println("ahhhhhhhhhhh me cai");
		this.showWorm();
		showWorm();
	}

	@Override
	public void taste(){
		
	}

	public static void main(String[] args){
		expire();

		Apple apple = new Apple();
		apple.born();

		apple.grow();

		apple.fall();

		apple.setFarm("Steve");

		System.out.println("My apple farm is: " + apple.getFarm());

		
	}

}