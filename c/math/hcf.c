int hcf(int num1, int num2){
	if(num2==0) return num1;

	return hcf(num2,num1%num2);
}
