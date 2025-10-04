function convertC2CtoW2() {
  var c2c = parseFloat(document.getElementById('c2cRate').value) || 0;
  if (c2c < 0) c2c = 0;
  document.getElementById('w2Rate').value = (c2c * 1.15).toFixed(2);
  document.getElementById('1099Rate').value = c2c.toFixed(2);
  document.getElementById('annualSalary').value = (c2c * 2080).toFixed(2);
  updateLabels();
  checkAllZeros();
}

function convertW2toC2C() {
  var w2 = parseFloat(document.getElementById('w2Rate').value) || 0;
  if (w2 < 0) w2 = 0;
  var c2c = w2 / 1.15;
  document.getElementById('c2cRate').value = c2c.toFixed(2);
  document.getElementById('1099Rate').value = c2c.toFixed(2);
  document.getElementById('annualSalary').value = (c2c * 2080).toFixed(2);
  updateLabels();
  checkAllZeros();
}

function convert1099() {
  var val = parseFloat(document.getElementById('1099Rate').value) || 0;
  if (val < 0) val = 0;
  document.getElementById('w2Rate').value = (val * 1.15).toFixed(2);
  document.getElementById('c2cRate').value = val.toFixed(2);
  document.getElementById('annualSalary').value = (val * 2080).toFixed(2);
  updateLabels();
  checkAllZeros();
}

function convertAnnualSalary() {
  var salary = parseFloat(document.getElementById('annualSalary').value) || 0;
  if (salary < 0) salary = 0;
  var c2c = salary / 2080;
  document.getElementById('c2cRate').value = c2c.toFixed(2);
  document.getElementById('w2Rate').value = (c2c * 1.15).toFixed(2);
  document.getElementById('1099Rate').value = c2c.toFixed(2);
  updateLabels();
  checkAllZeros();
}

function updateLabels() {
  var c2c = parseFloat(document.getElementById('c2cRate').value) || 0;
  var w2 = parseFloat(document.getElementById('w2Rate').value) || 0;
  var _1099 = parseFloat(document.getElementById('1099Rate').value) || 0;
  var salary = parseFloat(document.getElementById('annualSalary').value) || 0;

  document.getElementById('c2cLabel').innerText = c2c ? `C2C Rate: $${c2c.toFixed(2)}/hr` : "C2C Rate";
  document.getElementById('w2Label').innerText = w2 ? `W2 Rate: $${w2.toFixed(2)}/hr` : "W2 Rate";
  document.getElementById('1099Label').innerText = _1099 ? `1099 Rate: $${_1099.toFixed(2)}/hr` : "1099 Rate";
  document.getElementById('salaryLabel').innerText = salary ? `Salary: $${salary.toFixed(2)}/Yearly` : "Annual Salary";
}

function clearAllFields() {
  document.getElementById('c2cRate').value = '';
  document.getElementById('w2Rate').value = '';
  document.getElementById('1099Rate').value = '';
  document.getElementById('annualSalary').value = '';
  updateLabels();
}

function checkAllZeros() {
  var c2c = parseFloat(document.getElementById('c2cRate').value) || 0;
  var w2 = parseFloat(document.getElementById('w2Rate').value) || 0;
  var _1099 = parseFloat(document.getElementById('1099Rate').value) || 0;
  var salary = parseFloat(document.getElementById('annualSalary').value) || 0;

  if (c2c === 0 && w2 === 0 && _1099 === 0 && salary === 0) {
    clearAllFields();
  }
}