import physic.Eatable;
import physic.Gravital;
import java.util.*;
import java.io.*;

public class Animal implements Eatable {
	int a = 22;
	String aaa = "Animal";
	static int x = 10;
	static String name = "animal";

	static int count;

	String ok;

	{
		System.out.println("init block");
		System.out.println(this.a);
		this.a = 11;
	}

	Animal(){
		super();
		System.out.println(this.a);
		System.out.println("Animal()");
		this.a = 33;
	}

	@Override
	public void eatme(String s){
		System.out.println("eatemee");	
	}

	// public Animal ham(){
	// 	System.out.println(a);


	// 	return new Animal();
	// }

	static void increaseCount(){
		count++;
	}

	public void fall(){
		System.out.println("animal falling");
	}

	public String giveHi(){
		return "hi";
	}

	public static void eat(){
		System.out.println("Animal eating");
	}

	public static void main(String[] args){

		Object aaaa = new Animal();

		int y = 10_000_000;
		System.out.println(x);
		Animal a = new Animal();
		String s = new String("asdf");
		
		a.eatme(s);

		test:{
			int i = 1;
			
			System.out.println("ok");
			if(true){

				othertest: {
					System.out.println("othertest");
					if(true){
						break test;	
					}
					
				}
				System.out.println("ok3");
				break test;	
			}
			System.out.println("ok2");
			
			
		}
			
		
			

		System.out.println("outs");
		
	}

	static {
		x++;
	}
}