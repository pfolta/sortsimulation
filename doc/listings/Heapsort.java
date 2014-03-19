public class Heapsort {
	private void sift(int[] a, int l, int r) {
		int i;
		int j;
		int x;
		
		i = l;
		x = a[l];
		j = 2 * i + 1;
		
		if((j < r) && (a[j+1] > a[j])) j++;
		
		while((j <= r) && (a[j] > x)) {
			a[i] = a[j];
			i = j;
			j = 2 * j + 1;
			
			if((j < r) && (a[j+1] > a[j])) j++;
		}
		
		a[i] = x;
	}

	public void sort(int[] a) {
		int l;
		int r;
		int tmp;
		
		for(l = (a.length - 2) / 2; l >= 0; l--) {
			sift(a, l, a.length-1);
		}
		
		for(r = a.length - 1; r > 0; r--) {
			tmp = a[0];
			a[0] = a[r];
			a[r] = tmp;
			sift(a, 0, r-1);
		}
	}
}
