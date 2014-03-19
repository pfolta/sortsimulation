public class Insertionsort {
	public void sort(int[] a) {
		int tmp;
		int j;
		
		for(int i = 1; i < a.length; i++) {
			tmp = a[i];
			j = i;
			
			while(j > 0 && a[j-1] > tmp) {
				a[j] = a[j-1];
				j--;
			}
			
			a[j] = tmp;
		}
	}
}
