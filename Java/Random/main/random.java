import java.util.Arrays;
public class random {

  public static String[] list = new String[] {"Camren Bonilla","Walker Armstrong","Louis Fields","Alia Tapia","Preston Coffey","Nia Goodwin","Leroy Castaneda","Zaiden Frank","Trenton Duarte","Leticia Hardy","Blaze Lindsey","Miranda Chambers"};
  public static String[] list2 = new String[] {};


  public static void main(String[] args) {
    printList();
    shouffle();
  }

  public static void printList() {
    System.out.println("List: " + Arrays.toString(list));
  }

  public static void shouffle() {

    for (int i = 0; i < list.length; i++) {
      System.out.println((int)Math.floor(Math.random() * (list.length + 1)));
    }
  }

}
