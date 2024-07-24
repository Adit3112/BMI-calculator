// selecting elements as nodes
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let result = document.getElementById('bmiResult');
let category = document.getElementById('bmiCategory');
let reset =document.getElementById('reset-btn');

// hiding the result and category section initially
    result.style.display = 'none';
    category.style.display = 'none';
    reset.style.display = 'none';


//function to calculate the BMI
let calculateBMI = () => {
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);
    let h_in_m=h/100;
    // let bmi = w / (h * h);
    let bmi = w / (h_in_m*h_in_m);
    console.log(bmi);
    let bmiCategory;
    
    if (isNaN(w) || isNaN(h)) {
        alert('Please enter valid weight and height values.');
        return;
    }
    // bmi category
    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        bmiCategory = 'Normal';
    } else if (bmi >= 25 && bmi < 30) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obese';
    }
    
    result.textContent = `${bmi.toFixed(2)}`;
    category.textContent = bmiCategory;
    result.style.display = 'block';
    // category.style.display = 'block';
    document.getElementById('bmiForm').style.display = 'none';
    reset.style.display = 'block';

    //reseting the form
    reset.addEventListener('click', function(){
        document.getElementById('bmiForm').style.display = 'block';
        result.style.display = 'none';
        category.style.display = 'none';
        reset.style.display = 'none';
        result.textContent = '';
        category.textContent = '';
        document.getElementById('bmiResult').style.backgroundColor = 'white';
    });
    weight.value = '';
    height.value = '';


    if (bmi < 18.5) {
        result.style.backgroundColor = '#f8d7da';//pinkish
    } else if (bmi >= 18.5 && bmi < 25) {
        result.style.backgroundColor = '#d3e6f0';//bluish color
    } else if (bmi >= 25 && bmi < 30) {
        result.style.backgroundColor = '#ffe0b2';//orangish
    } else {
        result.style.backgroundColor = '#f5c6cb';//redish color
    }
};
