let x=-1
let y=3
let z=1
if (x>y && y>z){
    console.log(z)
}
else if (x>z && z>y){
    console.log(y)
}
else if (y>x && x>z){
    console.log(z)
}
else if (y>z && z>x){
    console.log(x)
}

else if (z>x && x>y){
    console.log(y)
}
else if (z>y && y>x){
    console.log(x)
}