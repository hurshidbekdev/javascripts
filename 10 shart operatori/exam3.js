let x=3
let y=5
let z=2

if (x>y && y>z){
    console.log((x+y+z),(x*y*z))
}
else if (x>z && z>y){
    console.log((x+y+z),(x*y*z))
}
else if (y>x && x>z){
    console.log((x+y+z),(x*y*z))
}
else if (y>z && z>x){
    console.log((x+y+z),(x*y*z))
}
else if (z>x && x>y){
    console.log((x+y+z),(x*y*z))
}
else if (z>y && y>x){
    console.log((x+y+z),(x*y*z))
}