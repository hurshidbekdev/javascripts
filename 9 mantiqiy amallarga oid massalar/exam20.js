let a=5
let b=4
let c=13
if (a>b&&b>c){
    console.log(true)
}
else if (a>c&&c>b){
    console.log(true)
}
else if (b>a&&a>c){
    console.log(true)
}
else if (b>c&&c>a){
    console.log(true)
}
else if (c>a&&a>b){
    console.log(true)
}
else if (c>b&&b>a){
    console.log(true)
}