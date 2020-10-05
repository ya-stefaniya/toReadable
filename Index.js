function toReadable (int) {
  const ones  = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const tens  = ['','','twent','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let intString = int.toString();
  // let firstNumber = (intString.length === 1) ? ones.find((i) => i === ones[int]) : ones.find((i) => i === ones[int]);
  let firstNumber = ones.find((i) => i === ones[int]);
      if (int === 0) return 'zero';
      //одна цифра или две 11-19
      if (intString.length === 1 || 2 && intString[0] === '1') {
        return firstNumber;
        //две цифры и первая не 1 => 20-99
      } else if (intString.length === 2 && intString[0] !== '1') {
        let fullNum = tens.find((i) => i === tens[intString[0]]);
        return intString[1]=== 0 ? `${fullNum}` : `${fullNum}`+ ' ' + ones.find((j) => j === ones[intString[1]]) ;
       
        //три цифры
      } else {
        let numHundred = int.toString().substring(0, 1);
        let numHundredLast = int.toString().substring(1, 3); //134 -> '34' 105->'05'  117->'17'
        let firstWordHundred = ones.find((i) => i === ones[numHundred]);
        let secondWordHundred;

          if (numHundredLast[0] === 0){ //105 -> '05'
            secondWordHundred = ones.find((j) => j === ones[numHundredLast[1]]); //105 -> 05 -> 5
          } else if (numHundredLast[0] === 1){ //117 -> 17 
            secondWordHundred = ones.find((k) => k === ones[numHundredLast]); 
          } else 
            secondWordHundred = (numHundredLast[1]=== 0) ? tens.find((i) => i === tens[numHundredLast[0]]) : tens.find((i) => i === tens[numHundredLast[0]]) + ' ' + ones.find((j) => j === ones[numHundredLast[1]]);
         
          return `${firstWordHundred} hundred ${secondWordHundred}`; 
     
        }    
  }
