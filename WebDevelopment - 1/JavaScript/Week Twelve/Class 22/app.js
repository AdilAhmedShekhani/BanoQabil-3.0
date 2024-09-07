alert("Hello Students");

// Promise

let promise = new Promise(function (resolve, reject) {
    const x = "adil@banoqabil.com";
    const y = "adil@banoqabil.com";
    if (x === y) {
      resolve();
    } else {
      reject();
    }
  });
  
  promise
    .then(function () {
      console.log("Success, You are a Login");
    })
    .catch(function () {
      console.log("Some error has occurred");
    });
  
  // Callback
  
  // The add() function is
  // called with arguments a, b
  // and callback, callback
  // will be executed just
  // after ending of add() function
  function add(a, b, callback) {
    console.log(`The sum of ${a} 
    and ${b} is ${a + b}`);
    callback();
  }
  
  // The disp() function is called just
  // after the ending of add() function
  function disp() {
    console.log(`This must be printed
     after addition`);
  }
  
  // Calling add() function
  add(5, 6, disp);
