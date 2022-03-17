let x=-1
let y=3
let z=1
if (x>y && y>z){
    console.log(x+y)
}
else if (x>z && z>y){
    console.log(x+z)
}
else if (y>x && x>z){
    console.log(y+x)
}
else if (y>z && z>x){
    console.log(y+z)
}

else if (z>x && x>y){
    console.log(z+x)
}
else if (z>y && y>x){
    console.log(z+y)
}