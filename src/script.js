const calculateButton = document.getElementById('bmi-calculate');
const clearButton = document.getElementById('clear-input');
const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
const scale = document.getElementById('scale');

window.onload = oninit();

function oninit() {
    document.getElementById('imperial').checked = true;
    if (document.getElementById('imperial').value !== "") {
        document.querySelector(".height-desc").innerHTML = "Enter Height in Inches:";
        document.querySelector(".weight-desc").innerHTML = "Enter Weight in Pounds:";
    }
    scale.style.width = "0%";
}

calculateButton.addEventListener('click', () => {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    var bmi = NaN;

    const result = document.getElementById('result');
    const category = document.getElementById('category');

    let height_status = false, weight_status = false;

    if (height === "" || isNaN(height) || (height <=0)) {
        document.getElementById('height-error').innerHTML = 'Please provide a valid height';
    } else {
        document.getElementById('height-error').innerHTML = '';
        height_status = true;
    }

    if (weight === "" || isNaN(weight) || (weight <=0)) {
        document.getElementById('weight-error').innerHTML = 'Please provide a valid weight';
    } else {
        document.getElementById('weight-error').innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status) {
        if (document.getElementById('imperial').checked === true) {
            bmi = ((weight / (height*height)) * 703).toFixed(2);
        } else {
            bmi = (weight / (height*height)).toFixed(2);
        }

        if (bmi < 18.5) {
            result.innerHTML = bmi;
            category.innerHTML = ' (Underweight)';
            scale.style.width = ((bmi / 50) - 0.16)*100 + "%"
            scale.style.backgroundColor = "Gold";
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = bmi;
            category.innerHTML = ' (Normal)';
            scale.style.width = ((bmi / 50) - 0.14)*100 + "%"
            scale.style.backgroundColor = "Green";
        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = bmi;
            category.innerHTML = ' (Overweight)';
            scale.style.width = ((bmi / 50) - 0.08)*100 + "%"
            scale.style.backgroundColor = "Gold";
        } else if (bmi >= 30 && bmi < 40) {
            result.innerHTML = bmi;
            category.innerHTML = ' (Obesity)';
            scale.style.width = ((bmi / 50) - 0.04)*100 + "%"
            scale.style.backgroundColor = "Orange";
        } else {
            result.innerHTML = bmi;
            category.innerHTML = ' (Severe Obesity)';
            scale.style.width = ((bmi / 50) - 0.04)*100 + "%"
            scale.style.backgroundColor = "Red";
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '0.00';
    }
});

clearButton.addEventListener('click', () => {
    document.getElementById('height-error').innerHTML = '';
    document.getElementById('weight-error').innerHTML = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '0.00';
    document.getElementById('category').innerHTML = '';
    oninit();
});

metricButton.addEventListener('click', () => {
    document.querySelector(".height-desc").innerHTML = "Enter Height in Meters:";
    document.querySelector(".weight-desc").innerHTML = "Enter Weight in Kilograms:";
});

imperialButton.addEventListener('click', () => {
    document.querySelector(".height-desc").innerHTML = "Enter Height in Inches:";
    document.querySelector(".weight-desc").innerHTML = "Enter Weight in Pounds:";
});