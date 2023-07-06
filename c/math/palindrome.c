#include <stdio.h>
#include "mymath.h"

int is_palindrome(int num){
	int num_reverse;
	int original_num=num;
	int last_digit;

	while(num>0){
		last_digit=num%10;
		num_reverse=num_reverse*10+last_digit;
		num=num/10;
	}

	return original_num==num_reverse;
	
}

