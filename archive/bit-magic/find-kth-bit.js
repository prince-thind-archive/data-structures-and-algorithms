function kthBit(num,n){
    let res=num>>(n-1);
    res=res&1;
    return res;
}