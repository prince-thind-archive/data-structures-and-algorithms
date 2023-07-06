int count_digits(int num){
	int count=0;

	while(num>0){
		num=num/10;
		count++;
	}

	return count;
}
