package Java.Random;
import java.util.*;
public class Test {
    public static void main(String[] args) {
        reverse(5);
    }


    public static int[] reverse(int n){
              
        int[] array = new int[n];
        int x = n;


        for(int i = 0; i < n; i++) {
          array[i] = x;
          x--;
          
        }
        System.out.println(Arrays.toString(array));
        return array;
    }
}
