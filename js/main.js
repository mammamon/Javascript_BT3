//GLOBAL SCOPE
var result = document.getElementById('result');
var array = [];
var btnAll = document.querySelectorAll('button:not(.no-overlay)');
var arrayText = document.getElementById("arrayTxt");
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
        arrayText.placeholder = array.join(", ");
        //clear input field after submit
        document.getElementById('inputNum').value = "";
    }
}
//RESET BUTTON
document.getElementById('resetBtn').onclick = function () {
    array = [];
    arrayText.placeholder = array;
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
    var position1 = +document.getElementById('position1').value;
    var position2 = +document.getElementById('position2').value;
    if (position1 > array.length || position2 > array.length || position1 === 0 || position2 === 0) {
        result.innerHTML = "VỊ TRÍ NHẬP KHÔNG HỢP LỆ"
        return;
    }
    var originalPos1 = array[position1 - 1];
    array[position1 - 1] = array[position2 - 1];
    array[position2 - 1] = originalPos1;
    arrayText.placeholder = array.join(", ");
    result.innerHTML = 'HOÁN ĐỔI VỊ TRÍ THỨ ' + position1 + ' VỚI VỊ TRÍ THỨ ' + position2;
}
//BT7
document.getElementById('sortBtn').onclick = function () {
    if (emptyArray()) return;
    for (var i = 1; i < array.length; i++) {
        var j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j], array[j - 1]] = [array[j - 1], array[j]];
            j--
        }
    }
    arrayText.placeholder = array.join(", ");
    result.innerHTML = 'SẮP XẾP TĂNG DẦN';
}
//BT8
document.getElementById("primeBtn").onclick = function () {
    var firstPrime = null;
    for (var i = 0; i < array.length; i++) {
        var prime = true;
        if (array[i] <= 1 || !Number.isInteger(array[i]) || array.length === 0) {
            prime = false;
        } else {
            for (var j = 2; j * j <= array[i]; j++) {
                if (array[i] % j === 0) {
                    prime = false;
                    break;
                }
            }
        }
        if (prime === true) {
            firstPrime = array[i];
            break;
        }
    }
    if (firstPrime === null) {
        result.innerHTML = "MẢNG KHÔNG CÓ SỐ NGUYÊN TỐ";
    } else {
        result.innerHTML = "SỐ NGUYÊN TỐ ĐẦU TIÊN LÀ " + firstPrime;
    }
};
//BT9
document.getElementById("integerBtn").onclick = function () {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            count++;
        }
    }
    result.innerHTML = 'CÓ TẤT CẢ ' + count + " SỐ NGUYÊN";
}
//BT10
document.getElementById("compareBtn").onclick = function () {
    if (emptyArray()) return;
    var countPlus = 0;
    var countMinus = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) countPlus++;
        if (array[i] < 0) countMinus++;
    }
    if (countPlus > countMinus) return result.innerHTML = 'SỐ DƯƠNG NHIỀU HƠN SỐ ÂM';
    else if (countPlus < countMinus) return result.innerHTML = 'SỐ ÂM NHIỀU HƠN SỐ DƯƠNG';
    else return result.innerHTML = 'SỐ DƯƠNG BẰNG SỐ ÂM';
}
