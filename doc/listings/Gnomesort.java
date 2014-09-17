public class Gnomesort {
	public void sort(int[] a) {
		int tmp;
		int pos = 1;
		
		while(pos < a.length) {
			if(a[pos] >= a[pos-1]) {
				pos++;
			} else {
				tmp = a[pos];
				a[pos] = a[pos-1];
				a[pos-1] = tmp;
				
				if(pos > 1) {
					pos--;
				}
			}
		}
	}
}