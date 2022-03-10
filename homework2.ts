/*Задание №1*/
let gMap: Map<number, null> = new Map();
let mapCounter: number = 100;
for (let i = 0; i < mapCounter; i++) {
    gMap.set(i, null);
}
console.log(gMap);

/*Задание №2*/

gMap.forEach((_, key) => {
    (key % 3 === 0 || key % 5 === 0)
        ? (key % 5 === 0 && key % 3 === 0)
            ? console.log(`${key} Wow! Is it real? Key divided by 3 and 5`)
            : (key % 5 === 0)
                ? console.log(`${key} Love then it is divided by 5`)
                : console.log(`${key} Divided by three. Nice one`) : '';
});

/*Задание №3*/

const flatData: Array<Array<string>> = [["36", "не приватизирован", "4 собственника", "Парковая"],
["45", "приватизирован", "3 собственника", "Луговая"],
["56", "не приватизирован", "1 собственник", "Луговая"],
["56", "приватизирован", "5 собственников", "Ленина"],
["25", "не приватизирован", "2 собственника", "Ленина"]];

function isSuitable(square: string, street: string) : boolean {
    if (+square <= 40 && street === 'Ленина' || +square === 56) {
        return true;
    }
    return false;
};

function checkWholeCatalog(flats: Array<Array<string>>) : void {
    flats.forEach(flat => {
        const [square, privatization, owners, street] = flat;
        console.log(`Подходит ли мне квартира №${flats.indexOf(flat)}: ${isSuitable(square, street)}`);
    });
};

checkWholeCatalog(flatData);

