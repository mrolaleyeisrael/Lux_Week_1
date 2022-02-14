const issSquare  = (x) => {
  let s = parseInt(Math.sqrt(x));
  return (s*s == x)
}

const fib = (num) => {
  if (issSquare(5*(num*num)-4) || issSquare(5*(num*num)+4)) {
     return   `${ num } is Part of Fibonacci series`;
  } else { return `${num} is Not Part of Fibonacci series`; }
}

fib(78);
