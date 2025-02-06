//
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log('sum_to_n_a : ', sum_to_n_a(5)); 

function sum_to_n_b(n: number): number {
    let numbers: number[] = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
     }
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}
console.log('sum_to_n_b :', sum_to_n_b(5)); 
