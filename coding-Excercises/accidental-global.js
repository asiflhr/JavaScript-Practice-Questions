function foo(){
    let x = y = 0;
    x++;
    y++;
    return x + y;
}

console.log(foo(), typeof x, typeof y);