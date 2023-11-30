let myPromise = new Promise((resolve, reject) => {
    let numb1 = prompt("Enter number 1:");
    let numb2 = prompt("Enter number 2:");
  
    if (isNaN(numb1) || isNaN(numb2)) {
      reject(`Both ${isNaN(numb1) ? numb1 : numb2} ${isNaN(numb1) ? "is" : "are"} not number(s).`);
    }else {
        let sum = Number(numb1) + Number(numb2);
        resolve(`${numb1} + ${numb2} = ${sum}`);
    }
});
