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
["45", "приватизирована", "3 собственника", "Луговая"],
["56", "не приватизирована", "1 собственник", "Луговая"],
["56", "приватизирована", "5 собственников", "Ленина"],
["25", "не приватизирована", "2 собственника", "Ленина"]];

const maxSquare : number = 60;
const maxOwners : number = 20;
const streets : string[] = ['Луговая', 'Луговая', 'Парковая'];
const catalogSize : number = 10;

function generateFlat() : string[] {
    let flat : string[] = new Array(4);
    let [square, privatization, owners, street] = flat;
    square = String(Math.round(Math.random() * maxSquare));
    privatization = Math.round(Math.random()) === 0? 'не приватизирована' : 'приватизирована';
    owners = String(Math.round(Math.random() * maxOwners)) + ' собственников'; //по окончанию можно упороться еще
    street = streets[Math.round(Math.random() * (streets.length-1))];
    return [square, privatization, owners, street];
};

function generateCatalog() : string[][] { 
    let flats : string[][] = new Array(catalogSize);
    for (let i = 0; i < catalogSize; i++) {
        flats[i] = generateFlat();
    }
    console.log(flats);
    return flats;
};

function isSuitable(square: string, street: string) : boolean {
    if (+square <= 40 && street === 'Ленина' || +square === 56) {
        return true;
    }
    return false;
};

function checkWholeCatalog(flats: Array<Array<string>>) : void {
    flats.forEach(flat => {
        const [square, , , street] = flat;
        console.log(`Подходит ли мне квартира №${flats.indexOf(flat)}: ${isSuitable(square, street)}`);
    });
};

checkWholeCatalog(generateCatalog());

