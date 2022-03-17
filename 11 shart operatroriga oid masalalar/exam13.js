let x=-1
let y=3
let z=1
if (x>y && y>z){
    console.log(y)
}
else if (x>z && z>y){
    console.log(z)
}
else if (y>x && x>z){
    console.log(x)
}
else if (y>z && z>x){
    console.log(z)
}

else if (z>x && x>y){
    console.log(x)
}
else if (z>y && y>x){
    console.log(y)
}