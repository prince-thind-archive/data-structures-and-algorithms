function count(num){
    let res=0;
    while(num>0){
        res++;
        num=(num&(num-1));
    }

return res;
}
