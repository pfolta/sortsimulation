public class Quicksort {
	private void quicksort(int[] a, int bottom, int top) {
		int tmp;
		int i = bottom;
		int j = top;
		int middle = (bottom + top) / 2;
		int x = a[middle];
		
		do {
			while(a[i] < x) i++;
			while(a[j] > x) j--;
			
			if(i <= j) {
				tmp = a[i];
				a[i] = a[j];
				a[j] = tmp;
				i++;
				j--;
			}
		} while(i <= j);
		
		if(bottom < j) quicksort(a, bottom, j);
		if(i < top) quicksort(a, i, top);
	}

	public void sort(int[] a) {
		quicksort(a, 0, a.length-1);
	}
}
