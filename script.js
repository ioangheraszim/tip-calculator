// Button group container
const formGroup = document.querySelector(".form-group__options");
// custom tip input
const customTipEl = document.createElement("input");
customTipEl.type = "text";
customTipEl.id = "customTip";
customTipEl.name = "customTip";
customTipEl.classList.add("form-group__input");
customTipEl.placeholder = "Custom";

// Reset button
const resetBtn = document.getElementById("reset");
// Value person text
const valPerson = document.getElementById("person");
// Value total text
const valTotal = document.getElementById("total");
// Button values text
const values = [5, 10, 15, 25, 50];
// Error label
const errorLabel = document.querySelector(".form-group__label--error");

// Input for people and bill
const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");

// Calculating tip function
function calculateTip(tipPercent) {
  const bill = billInput.value;
  const people = peopleInput.value;

  if (people <= 0) {
    errorLabel.style.display = "inline";
    peopleInput.classList.add("form-group__input--error");
    valPerson.textContent = "$0";
    valTotal.textContent = "$0";
    return;
  } else {
    errorLabel.style.display = "none";
    peopleInput.classList.remove("form-group__input--error");
  }

  const tipAmount = (bill * tipPercent) / 100 / people;
  const total = bill / people + tipAmount;

  valPerson.textContent = `$${tipAmount.toFixed(2)}`;
  valTotal.textContent = `$${total.toFixed(2)}`;
}

// Creating buttons dynamically
values.forEach((val) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.classList.add("form-group__option");
  btn.textContent = `${val}%`;

  btn.addEventListener("click", () => calculateTip(val));
  formGroup.appendChild(btn);
});

// Custom tip
customTipEl.addEventListener("input", () => {
  const custom = parseFloat(customTipEl.value);
  if (!isNaN(custom) && custom >= 0) {
    calculateTip(custom);
  } else {
    valPerson.textContent = "$0";
    valTotal.textContent = "$0";
  }
});

// Reset everything
resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipEl.value = "";
  valPerson.textContent = "$0";
  valTotal.textContent = "$0";
  errorLabel.style.display = "none";
});

formGroup.appendChild(customTipEl);
