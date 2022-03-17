let n=30
let s=0

for (let i=2; i<n; i++){
    let temp=true
    for(let j=2; j<i; j++ ){
        if(i%j==0){
            temp=false
        } 
    }
    if (temp==true){
        console.log(i)
    }
}
