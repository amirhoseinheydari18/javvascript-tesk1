
 let heightInput = document.getElementById("meters");
let weightInput = document.getElementById("weight");

let button = document.getElementById("botem");
 let result = document.getElementById("result");

 button.addEventListener("click", function () {

    let height = Number(heightInput.value);
     let weight = Number(weightInput.value);

     let heightmeter = height / 100;

    const bmi = weight / (heightmeter * heightmeter);

    if (height <= 0 || weight <= 0 || !Number.isFinite(bmi)) {
         result.innerText = "لطفاً قد و وزن معتبر وارد کنید";
        return;
   }

     if (bmi < 18.5) {
         result.innerText = "وزن شما کم است: " + bmi.toFixed(2);
    }
    else if (bmi < 25) {
        result.innerText = "وزن شما نرمال است: " + bmi.toFixed(2);
   }
     else if (bmi < 30) {
        result.innerText = "شما اضافه وزن دارید: " + bmi.toFixed(2);
    }
    else {
        result.innerText = "شما چاق هستید: " + bmi.toFixed(2);
    }

 });

