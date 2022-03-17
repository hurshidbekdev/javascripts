let x=3
let y=2
let z=1
if (x>y && y>z){
    console.log(x)
}
else if (x>z && z>y){
    console.log(x)
}
else if (y>x && x>z){
    console.log(y)
}
else if (y>z && z>x){
    console.log(y)
}
else if (z>x && x>y){
    console.log(z)
}
else if (z>y && y>x){
    console.log(z)
}