var hanoitowers = function(disc,src,dst){
    if(disc>0){
        let aux = 6 - src - dst;
        hanoitowers(disc-1,src,aux);
        console.log('移动圆盘' + disc + '从' + src + '到' + dst);
        hanoitowers(disc-1,aux,dst);
    }
}
console.log("=======================")
hanoitowers(1,1,3);
console.log("=======================")
hanoitowers(2,1,3);
console.log("=======================")
hanoitowers(3,1,3);
console.log("=======================")
hanoitowers(4,1,3);
console.log("=======================")