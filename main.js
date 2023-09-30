//Объекты

let user = {
    name: "Artem",
    surname: "Saytakov",
    age: 14,
    gender: male,
    passport: {
        serries:"AC",
        born: "03-09-2009",
        number:3742390659,
    },
    ratio: {
       weight: 45,
       height: 153,
    },
     
    status: "student",
    parents: {
        mum: "1",
        dad: "1",
        grandpa: "1",
        grandma: "1",
        brother: "1",
    },
}

let car = {
    model: "camry",
    company: "Toyota Camry",
     type: 3.5,
     wheels: 3,
     color:"White",
     price: "5400$",
     tech_passport: {
        year: 2021,
        complect: "LE",
        engine: 3.4,
     },
     
}

//Задания

let newObject = (Object.assign({}, user, {car}))

console.log(
    newObject
);

let newKeys = (Object.keys({user},newKeys))

console.log(
    newKeys
);

let types = {
    string: [],
    object:[],
    number:[],
    boolean:[],
}


Object (user.forEach(item => {
    if (typeof(item) ===`str`) {
          string =+ 1
    } 
        
    
}))
Object (user.forEach(num => {
    if (typeof(num) ===`nums`) {
          number++
    }
}))
Object (user.forEach(bln => {
    if (typeof(bln) ===`booln`) {
          boolean++
    }
}))
Object (user.forEach(obj => {
    if (typeof(obj) ===`objct`) {
          object++
    }
}))
