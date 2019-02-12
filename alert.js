function squarer(value) {
  return value = value**2;
}

function callSquarer() {
  let x = prompt('Please enter a number');
  alert(squarer(x));
}

function callSquarerTwice() {
  let x = prompt('Please enter your first number');
  let y = prompt('Please neter your second number');
  alert(squarer(x) + ', ' + squarer(y));

}
