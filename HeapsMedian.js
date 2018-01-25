/**
The median of a dataset of integers is the midpoint value of the dataset for which an equal number of integers are less than and greater than the value. To find the median, you must first sort your dataset of integers in non-decreasing order, then:

If your dataset contains an odd number of elements, the median is the middle element of the sorted sample. In the sorted dataset ,  is the median.
If your dataset contains an even number of elements, the median is the average of the two middle elements of the sorted sample. In the sorted dataset ,  is the median.
Given an input stream of  integers, you must perform the following task for each  integer:

Add the  integer to a running list of integers.
Find the median of the updated list (i.e., for the first element through the  element).
Print the list's updated median on a new line. The printed value must be a double-precision number scaled to decimal place (i.e.,  format).
*/

function binaryInsert(x, a) {
    let l = 0,
    r = a.length - 1,
    m;
    while (l <= r) {
        m = (l + r) / 2 | 0;
        if (a[m] > x) {
            r = m - 1;
            continue;
        }
        l = m + 1;
        if (a[m] === x) {
            break;
        }
    }
    a.splice(l, 0, x);
}

function getMedian(a) {
    if (a.length % 2 === 1) {
        return a[(a.length - 1) / 2].toFixed(1);
    } else {
        var numA = a[Math.floor((a.length - 1) / 2)];
        var numB = a[Math.floor((a.length / 2))];
        return ((numA + numB) / 2).toFixed(1);
    }
}

let a = [];
for (let i = 0; i < 10; i++) {
    binaryInsert(Math.floor(Math.random() * 10) + 1, a);
    console.log(getMedian(a));
}
