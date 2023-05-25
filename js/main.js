//GLOBAL SCOPE
var result = document.getElementById('result');
var array = [];
var btnAll = document.querySelectorAll('button:not(.no-overlay)');
//SHOW BUTTON OVERLAY WHILE HOVERING + ALERT WHEN ARRAY EMPTY
btnAll.forEach((button, index) => {
    button.setAttribute('data-number', 'BT' + (index + 1));
    button.addEventListener('click', () => {
        if (array.length === 0) {
            alert('CHƯA NHẬP SỐ')
        }
    })
}
);
//ADD NUMBER BUTTON
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
//RESET BUTTON
document.getElementById('resetBtn').onclick = function () {
    array = [];
    document.getElementById("arrayTxt").placeholder = array;
}
//BT1
document.getElementById('sumEvenBtn').onclick = function () {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) sum += array[i];
    }
    result.innerHTML = 'TỔNG CÁC SỐ DƯƠNG LÀ: ' + sum;
}
//BT2
document.getElementById('countEvenBtn').onclick = function () {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) count++;
    }
    result.innerHTML = 'CÓ TẤT CẢ ' + count + " SỐ DƯƠNG";
}
//BT3
document.getElementById('minBtn').onclick = function () {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    result.innerHTML = 'SỐ NHỎ NHẤT LÀ ' + min;
}
//BT4
document.getElementById('minPositiveBtn').onclick = function () {
    var minPositive = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0 && (minPositive === null || array[i] < minPositive)) {
            minPositive = array[i];
            result.innerHTML = "SỐ DƯƠNG NHỎ NHẤT LÀ " + minPositive;
        }
        if (minPositive === null) {
            result.innerHTML = "MẢNG KHÔNG CÓ SỐ DƯƠNG";
        }
    }
}

//BT5
document.getElementById('lastEvenBtn').onclick = function () {
    var lastEven = -1;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            lastEven = array[i];
            result.innerHTML = 'SỐ CHẴN CUỐI CÙNG LÀ ' + lastEven;
        } else { result.innerHTML = lastEven }
    }
}
