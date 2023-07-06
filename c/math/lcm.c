#include "mymath.h"

int lcm(int num1, int num2){
	return num1*num2/hcf(num1,num2);
}
