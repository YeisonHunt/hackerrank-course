const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibo2 = (numbers) => {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(fibonacci(numbers[i]));
    }
    return result;
}

const fibo = [0,1,2,3,4,5,6,7,8]

fibo.forEach(element => {
    console.log(fibonacci(element));
})

console.log(fibo2(fibo));

