var a = prompt();
alert(getMiddle(a));

function getMiddle(str) {
 if (str.trim() === '') {
   return alert('Invalid value')
  }
  
 var middle = Math.floor(str.length / 2);
 return str.length % 2 === 0 ? str[middle - 1] + str[middle] : str[middle];
}