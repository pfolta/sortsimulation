#include <unistd.h>

int main(void) {
	execlp("java", "java", "-jar", "SortSimulation.jar", NULL);
	return 0;
}