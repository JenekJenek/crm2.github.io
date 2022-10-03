
function isPrime(x) {
    if (x < 2) return false;

    for (var i = x-1; i > 1; i--) {
        if (x%i == 0) {
            return false;
        }
    }

    return true;
}

for (let i = -10; i < 2000; i++) {
    if(isPrime(i)) {
        console.log(i);
    }
}