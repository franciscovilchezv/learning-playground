package food;

public abstract class Fruit extends Vegetable{

	String farm;

	public String getFarm(){
		return this.farm;
	}

	public void setFarm(String farm){
		this.farm = farm;
	}

	public static void expire() {
		System.out.println("I smell terrible");
	}

	protected void clean(){
		Vegetable vegetable = new Vegetable();
		vegetable.taste();
	}

	public void grow(){
		System.out.println("I am growing up!");
	}

	public void showWorm(){
		System.out.println("worm worm");
	}

	public abstract void born();
}