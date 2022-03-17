let a=5
let b=-4
let c=13
if (a>b&&b>c||b>a&&b>c){
    console.log(true)
}
else if (a>c&&c>b||c>a&&b>c){
    console.log(true)
}
else if (b>a&&a>c||a>b&&c>a){
    console.log(true)
}
else if (b>c&&c>a||c>b&&a>c){
    console.log(true)
}
else if (c>a&&a>b||a>c&&b>a){
    console.log(true)
}
else if (c>b&&b>a||b>c&&a>b){
    console.log(true)
}