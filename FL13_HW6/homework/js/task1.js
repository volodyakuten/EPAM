var checkNumber = +prompt('Check number:');
var tip = +prompt('Tip percentage:');

if (typeof checkNumber !== 'number' || checkNumber < 0 || 
	typeof tip !== 'number' || tip < 0 || tip > 100) {
    alert('Invalid input data');
} else {
    var tipAmount = checkNumber / 100 * tip;
    var fullAmount = checkNumber + tipAmount;
    alert(`Check number: ${checkNumber}\nTip: ${tip}%\nTip amount: ${tipAmount}\nTotal sum to pay: ${fullAmount}`);
}