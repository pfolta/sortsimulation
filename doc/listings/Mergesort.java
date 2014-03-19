public class Mergesort {
	private int[] a;
	private int[] b;
	private int n;
	
	public void sort(int[] a) {
		this.a = a;
		n = a.length;
		b = new int[n];
		mergesort(0, n-1);
	}
	
	private void mergesort(int lo, int hi) {
		if(lo < hi) {
			int m = (lo + hi) / 2;
			mergesort(lo, m);
			mergesort(m+1, hi);
			merge(lo, m, hi);
		}
	}
	
	private void merge(int lo, int m, int hi) {
		int i = lo;
		int j = hi;
		int k = lo;
		
		while(i <= m) b[k++] = a[i++];		
		while(j > m) b[k++] = a[j--];
		
		i = lo;
		j = hi;
		k = lo;
		
		while(i <= j) {
			if(b[i] <= b[j]) a[k++] = b[i++];
			else a[k++] = b[j--];
		}
	}
}
