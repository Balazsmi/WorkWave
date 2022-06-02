import java.util.Arrays;
public class random {

  public static String[] list = new String[] {"Camren Bonilla","Walker Armstrong","Louis Fields","Alia Tapia","Preston Coffey","Nia Goodwin","Leroy Castaneda","Zaiden Frank","Trenton Duarte","Leticia Hardy","Blaze Lindsey","Miranda Chambers"};
  public static String[] list2 = new String[] {};


  public static void main(String[] args) {
    printList();
    shouffle(list.length);
  }

  public static void printList() {
    System.out.println("List: " + Arrays.toString(list));
  }

  public static void shouffle(int max) {
    int random = (int)Math.floor(Math.random()*(max-0));
    System.out.println(random);


    for (int i = 0; i < list.length; i++) {

    }
  }

}
