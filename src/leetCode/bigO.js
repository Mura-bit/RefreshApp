export function sum(n) {
    if (n <= 0) {
        return 0
    }
    return n + sum(n-1)
}

function pairSumSequence(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += pairSum(i, i + 1);
  }
  return sum;
}

function pairSum(a, b) {
  return a + b;
}