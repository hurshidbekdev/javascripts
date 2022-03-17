let x=-1
let y=-3
let z=1
if (x>0 && y>0 && z<0){
    console.log(2,'mus',1,'man')
}
else if (x>0 && y>0 && z>0){
    console.log(3,'mus')
}
else if (x>0 && y<0 && z<0){
    console.log(1,'mus',2,'man')
}
else if (y>0 && x<0 && z<0){
    console.log(1,'mus',2,'man')
}

else if (z>0 && x>0 && y<0){
    console.log(2,'mus',1,'man')
}
else if (z>0 && y<0 && x<0){
    console.log(1,'mus',2,'man')
}