let calculateButton = document.getElementById('bmi-calculate')
let clearButton = document.getElementById('clear-input')
let metricButton = document.getElementById('metric')
let imperialButton = document.getElementById('imperial')

window.onload = oninit();

function oninit() {
    document.getElementById('imperial').checked = true;
    if (document.getElementById('imperial').value !== "") {
        document.getElementById('height-unit').innerHTML = 'Inches:';
        document.getElementById('weight-unit').innerHTML = 'Pounds:';
    }
}

calculateButton.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    const result = document.getElementById('result');
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

    if (height_status && weight_status) {
        const bmi = ((weight / (height*height)) * 703).toFixed(2);

        if (bmi < 18.5) {
            result.innerHTML = 'BMI : ' + bmi + ' (Underweight)';
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = 'BMI : ' + bmi + ' (Normal)';
        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = 'BMI : ' + bmi + ' (Overweight)';
        } else if (bmi >= 30 && bmi < 40) {
            result.innerHTML = 'BMI : ' + bmi + ' (Obesity)';
        } else {
            result.innerHTML = 'BMI : ' + bmi + ' (Severe Obesity)';
        }
    } else {
        alert('The form has errors');
        result.innerHTML = '';
    }
});

clearButton.addEventListener('click', () => {
    document.getElementById('height-error').innerHTML = '';
    document.getElementById('weight-error').innerHTML = '';
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('height-unit').innerHTML = '';
    document.getElementById('weight-unit').innerHTML = '';
    oninit();
});

metricButton.addEventListener('click', () => {
    document.getElementById('height-unit').innerHTML = 'Meters:';
    document.getElementById('weight-unit').innerHTML = 'Kilograms:';
});

imperialButton.addEventListener('click', () => {
    document.getElementById('height-unit').innerHTML = 'Inches:';
    document.getElementById('weight-unit').innerHTML = 'Pounds:';
});