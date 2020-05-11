package chapter6;

import java.io.*;
import physic.Eatable;

//FileNotFoundException
//EOFException

//IOException

public class Test{
	Test test;

	public void makeError() throws FileNotFoundException, EOFException{
		throw new FileNotFoundException();
	}

	public void callMethodError() throws FileNotFoundException, EOFException{

		try{
			makeError();
			
		}
		catch(Exception e){
			System.out.println("callMethodError make an IOException");
			throw e;
		}
	}

	public static void main(String[] args) throws Exception{
		Test test = new Test();
		int[] a1 = {0,1,2,3,4,5,0};
		int[] a2 = {9,8,7,6,9,9,9,9};

		System.arraycopy(a2, 0, a1, 3, 3);
		for(int i : a1){
			System.out.println(i);
		}

		test.callMethodError();	
	}
}