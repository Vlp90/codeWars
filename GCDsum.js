// Given the sum and gcd of two numbers, return those two numbers in ascending order. If the numbers do not exist, return -1, (or return NULL in C).

function solve(s,g){
    if (s % g) {
        return -1
    } else {
        return [g, s-g]
    }
}

solve(10,2)