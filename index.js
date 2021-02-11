function jumpingOnClouds(c) {
    console.log('c', c, c.length)
    let idx = 0;
    let counter = 0;
    // 0 0 0 0 1 0
    while(idx < c.length && idx !== c.length-1){
        if(c[idx + 2] === 0){
            idx +=2;
        } else {
            idx += 1;
        }
        counter++;
    }
    console.log('counter', counter)
    return counter;
}
jumpingOnClouds([0, 0, 0, 0, 1, 0])