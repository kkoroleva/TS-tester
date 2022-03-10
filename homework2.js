/*Задание №1*/
var gMap = new Map();
var mapCounter = 100;
for (var i = 0; i < mapCounter; i++) {
    gMap.set(i, null);
}
console.log(gMap);
/*Задание №2*/
gMap.forEach(function (_, key) {
    (key % 3 === 0 || key % 5 === 0)
        ? (key % 5 === 0 && key % 3 === 0)
            ? console.log("".concat(key, " Wow! Is it real? Key divided by 3 and 5"))
            : (key % 5 === 0)
                ? console.log("".concat(key, " Love then it is divided by 5"))
                : console.log("".concat(key, " Divided by three. Nice one")) : '';
});
/*Задание №3*/
var flatData = [["36", "не приватизирован", "4 собственника", "Парковая"],
    ["45", "приватизирован", "3 собственника", "Луговая"],
    ["56", "не приватизирован", "1 собственник", "Луговая"],
    ["56", "приватизирован", "5 собственников", "Ленина"],
    ["25", "не приватизирован", "2 собственника", "Ленина"]];
function isSuitable(square, street) {
    if (+square <= 40 && street === 'Ленина' || +square === 56) {
        return true;
    }
    return false;
}
;
function checkWholeCatalog(flats) {
    flats.forEach(function (flat) {
        var square = flat[0], privatization = flat[1], owners = flat[2], street = flat[3];
        console.log("\u041F\u043E\u0434\u0445\u043E\u0434\u0438\u0442 \u043B\u0438 \u043C\u043D\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u2116".concat(flats.indexOf(flat), ": ").concat(isSuitable(square, street)));
    });
}
;
checkWholeCatalog(flatData);
