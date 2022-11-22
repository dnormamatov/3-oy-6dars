function s(a,b) {
    if (b==0) {
        return 1
    }
    return a  * s(a,b - 1)
}
console.log(s(10, 2));