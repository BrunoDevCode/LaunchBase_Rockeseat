function printDouble(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number * 2);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function lofOfFunction(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2 + y);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function printAll() {
  let result;

  result = await printDouble(5);
  console.log(result);
  result = await printDouble(10);
  console.log(result);
  result = await printDouble(22);
  console.log(result);
  result = await printDouble(1);
  console.log(result);
  result = await printDouble(89);
  console.log(result);

  console.log('=======');

  result = await lofOfFunction(5, 0);
  console.log(result);
  result = await lofOfFunction(12, result);
  console.log(result);
  result = await lofOfFunction(2, result);
  console.log(result);
}

printAll();
