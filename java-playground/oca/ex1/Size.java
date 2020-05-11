public enum Size {
	SMALL, MEDIUM(10), LARGE;
	private int ounces;

	Size(int ounces){
		this.ounces = ounces;
	}

	Size(){

	}
}