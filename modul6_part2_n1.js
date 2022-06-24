let arr = [1, 0, 3, 4, 5, 6, 0, 0, '', 1, 1, null, false];

function chetNechet() {
  let chet = 0;
  let nechet = 0;
  let nol = 0;
  let ost = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == 'number') {
      if  (arr[i] == 0) {
        nol ++;
      } else if (arr[i] % 2 == 0){
        chet ++;
      } else {
        nechet ++;
      }
    }
    else {
      ost ++;
    }
  }
  console.log(`В массиве ${chet} четных, ${nechet} нечетных и ${nol} нулевых элемента, 
не являются числами ${ost}`);
}

chetNechet();