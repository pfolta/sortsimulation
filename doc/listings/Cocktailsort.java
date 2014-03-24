public class CocktailSort {
	public void sort(int[] a) {
		int start = -1;
		int end = a.length - 2;
		int tmp;
		
		boolean swapped;
			
		do {
			swapped = false;
			start++;
			
			for(int i = start; i <= end; i++) {
				if(a[i] > a[i+1]) {
					tmp = a[i];
					a[i] = a[i+1];
					a[i+1] = tmp;
					swapped = true;
				}
			}
			
			if(!swapped) {
				break;
			}
			
			swapped = false;
			end--;
			
			for(int i = end; i >= start; i--) {
				if(a[i] > a[i+1]) {
					tmp = a[i];
					a[i] = a[i+1];
					a[i+1] = tmp;
					swapped = true;
				}
			}
		} while(swapped);
	}
}