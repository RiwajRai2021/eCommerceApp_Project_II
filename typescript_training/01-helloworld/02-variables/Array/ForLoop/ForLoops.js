var reviewz = [5, 5, 4.5, 1, 3];
var total = 0;
for (var i = 0; i < reviewz.length; i++) {
    console.log(reviewz[i]);
    total += reviewz[i];
}
var average = total / reviewz.length;
console.log("Review average = " + average);
