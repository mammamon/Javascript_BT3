//GLOBAL SCOPE
var result = document.getElementById('result');
var array = [];
var btnAll = document.querySelectorAll('button:not(#arrayBtn)');
//SHOWING EACH BUTTON NUMBER WHILE HOVERING
btnAll.forEach((button, index) => {
    button.setAttribute('data-number', 'BT' + (index + 1));
});
//ADD NUMBER TO ARRAY BY USER INPUT 
document.getElementById('arrayBtn').onclick = function () {
    var inputNum = parseFloat(document.getElementById("inputNum").value);
    if (isNaN(inputNum)) {
        alert('SỐ NHẬP KHÔNG HỢP LỆ')
        return;
    } else {
        array.push(inputNum);
        document.getElementById("arrayTxt").placeholder = array.join(", ");
        //clear input field after submit
        document.getElementById('inputNum').value = "";
    }
}
//BT1
document.getElementById('sumEvenBtn').onclick = function () {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    result.innerHTML = 'TỔNG CÁC SỐ DƯƠNG LÀ: ' + sum;
}
//BT2
document.getElementById('countEvenBtn').onclick = function () {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            count++;
        }
    }
    result.innerHTML = 'CÓ TẤT CẢ ' + count + " SỐ DƯƠNG";
}




