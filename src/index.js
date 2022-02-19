module.exports = function reverse (n) {
 const num = (Math.abs(n)).toString().split("").reverse().join("");
 return(+ num) ;
}
