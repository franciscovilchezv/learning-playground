package food;

public enum Salads {

	FRUIT("Apple, Pear", 8), 
	VEGGETABLE("Lettuce, Tomatoe", 10), 
	CEREAL("Bar, Crunch", 12){
		public String getIngredients(){
			return "Cerealll";
		}
	}, 
	FLOWER("Rose, Mary", 14){
		public String getIngredients(){
			return "Floweeeer";
		}
	};

	String ingredients;
	int calcium;

	Salads(String ingredients, int calcium){
		this.ingredients = ingredients;
		this.calcium = calcium;
	}

	public String getIngredients(){
		return this.ingredients;
	}

	public void setIngredients(String ingredients){
		this.ingredients = ingredients;
	}

	public int getCalcium(){
		return this.calcium;
	}

	public void setCalcium(int calcium){
		this.calcium = calcium;
	}


};