function printDouble(number, callback) {
  setTimeout(() => {
    const double = number * 2;
    callback(double);
  }, Math.floor(Math.random() * 100) + 1);
}

function lotOfFunction(x, y, callback) {
  setTimeout(() => {
    const result = x * 2 + y;
    callback(result);
  }, Math.floor(Math.random() * 100) + 1);
}

function printAll() {
  printDouble(5, (result) => {
    console.log(result);
    printDouble(10, (result) => {
      console.log(result);
      printDouble(22, (result) => {
        console.log(result);
        printDouble(1, (result) => {
          console.log(result);
          printDouble(89, (result) => {
            console.log(result);
          });
        });
      });
    });
  });

  lotOfFunction(5, 0, (result) => {
    console.log(result);
    lotOfFunction(12, result, (result) => {
      console.log(result);
      lotOfFunction(2, result, (result) => {
        console.log(result);
      });
    });
  });
}

printAll();
