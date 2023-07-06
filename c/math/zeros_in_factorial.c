int zeros_in_factorial(int num){
	int sum=0;
	while(num>=5){
		num=num/5;
		sum=sum+num;

	}
	return sum;
}
