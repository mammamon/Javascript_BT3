//GLOBAL SCOPE
var result = document.getElementById('result');
var array = [];
var btnAll = document.querySelectorAll('button:not(.no-overlay)');
//SHOW BUTTON OVERLAY WHILE HOVERING
btnAll.forEach((button, index) => {
    button.setAttribute('data-number', 'BT' + (index + 1));
}
);
//ADD NUMBER BUTTON
document.getElementById('arrayBtn').onclick = function () {
    var inputNum = parseFloat(document.getElementById("inputNum").value);
    if (isNaN(inputNum)) {
        alert('SỐ NHẬP KHÔNG HỢP LỆ');
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
// CHECK EMPTY ARRAY
function emptyArray() {
    if (array.length === 0) {
        result.innerHTML = 'CHƯA NHẬP SỐ';
        return true;
    }
    return false;
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
    if (emptyArray()) return;
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    result.innerHTML = 'SỐ NHỎ NHẤT LÀ ' + min;
}
//BT4
document.getElementById('minPositiveBtn').onclick = function () {
    if (emptyArray()) return;
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
    if (emptyArray()) return;
    var lastEven = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            lastEven = array[i];
            result.innerHTML = 'SỐ CHẴN CUỐI CÙNG LÀ ' + lastEven;
        }
        if (lastEven === null) result.innerHTML = '(-1) MẢNG KHÔNG CÓ SỐ CHẴN';
    }
}
//BT6 TRIGGER MODAL
document.getElementById('btn-modal').onclick = function () {
    if (array.length < 2) {
        var btnModal = document.getElementById('btn-modal');
        btnModal.setAttribute('data-bs-target', " ");
        result.innerHTML = 'VUI LÒNG NHẬP ÍT NHẤT 2 SỐ'
        return;
    }
    btnModal = document.getElementById('btn-modal');
    btnModal.setAttribute('data-bs-target', "#BT6");
    btnModal.click();
}
//BT6
document.getElementById('swapBtn').onclick = function () {
    var index1 = +document.getElementById('index1').value;
    var index2 = +document.getElementById('index2').value;
    if (index1 > array.length || index2 > array.length) {
        result.innerHTML = "VỊ TRÍ NHẬP KHÔNG HỢP LỆ"
        return;
    }
    var originalIndex1 = array[index1 - 1];
    array[index1 - 1] = array[index2 - 1];
    array[index2 - 1] = originalIndex1;
    document.getElementById("arrayTxt").placeholder = array.join(", ");
    result.innerHTML = 'HOÁN ĐỔI VỊ TRÍ THỨ ' + index1 + ' VỚI VỊ TRÍ THỨ ' + index2;
}