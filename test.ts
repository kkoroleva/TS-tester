
interface ITemp {
    temperature: string;
    city: string;
    optional?: boolean;
}

interface IDataItem {
    dt: string;
    quantity: number;
    age: number | null;
    temp: ITemp;
}

const data : IDataItem[] = [{
    "dt": "01-01-2021",
    "quantity": 100,
    "age": null,
    "temp": {
        "temperature": "100 degrees",
        "city": "Norway",
    }
}, {
    "dt": "02-01-2021",
    "quantity": 150,
    "age": 23,
    "temp": {
        "temperature": "103 degrees",
        "city": "Egypt",
    }
}, {
    "dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
        "temperature": "98 degrees",
        "city": "Kypris",
    }
}, {
    "dt": "03-01-2021",
    "quantity": 150,
    "age": 22,
    "temp": {
        "temperature": "98 degrees",
        "city": "Holland",
    }
}, {
    "dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true,
    }
}, {
    "dt": "03-01-2021",
    "quantity": 700,
    "age": 27,
    "temp": {
        "temperature": "50 degrees",
        "city": "Kursk",
        "optional": true,
    }
}];

let dates : string[] = [];
let dataMap = new Map();
for (let item of data) {
    dates.push(item.dt);
    const temp = Object.assign({}, item);
    delete temp.dt; 
    dataMap.has(item.dt)? dataMap.get(item.dt).push(temp) : dataMap.set(item.dt, [temp]);
}
let dateSet = new Set(dates);

console.log(dataMap);
console.log(dateSet);
