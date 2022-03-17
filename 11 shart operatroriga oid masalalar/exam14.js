let x=-1
let y=3
let z=1
if (x>y && y>z){
    console.log(x,z)
}
else if (x>z && z>y){
    console.log(x,y)
}
else if (y>x && x>z){
    console.log(y,z)
}
else if (y>z && z>x){
    console.log(y,x)
}

else if (z>x && x>y){
    console.log(z,y)
}
else if (z>y && y>x){
    console.log(z,x)
}