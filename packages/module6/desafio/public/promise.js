function printDouble(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const double = number * 2;
      resolve(double);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function lotOfFunction(x, y) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = x * 2 + y;
      resolve(result);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function printAll() {
  printDouble(5).then((result) => {
    console.log(result);
    printDouble(10).then((result) => {
      console.log(result);
      printDouble(22).then((result) => {
        console.log(result);
        printDouble(1).then((result) => {
          console.log(result);
          printDouble(89).then((result) => {
            console.log(result);
          });
        });
      });
    });
  });

  lotOfFunction(5, 0).then((result) => {
    console.log(result);
    lotOfFunction(12, result).then((result) => {
      console.log(result);
      lotOfFunction(2, result).then((result) => {
        console.log(result);
      });
    });
  });
}

printAll();
