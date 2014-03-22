public class Shellsort {
	public void sort(int[] a) {
		int[] cols = {
			1391376, 463792, 198768, 86961, 33936, 13776,
			4592, 1968, 861, 336, 112, 48, 21, 7, 3, 1
		};
		
		for(int i = 0; i < cols.length; i++) {
			int h = cols[i];
			
			for(int j = h; j < a.length; j++) {
				int k = j;
				int tmp = a[k];
				
				while(k >= h && a[k-h] > tmp) {
					a[k] = a[k-h];
					k = k - h;
				}
				
				a[k] = tmp;
			}
		}
	}
}