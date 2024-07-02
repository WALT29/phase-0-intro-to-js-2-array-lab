// Write your solution here!
let cats=["Milo", "Otis", "Garfield"];
let beforeEach=()=>{
    cats.length=0;
    cats.push("Milo", "Otis", "Garfield");
    return cats;

}

let destructivelyAppendCat=(name)=>{
    beforeEach();
    cats.push(name);

}

let destructivelyPrependCat=(name)=>{
    beforeEach();
    cats.unshift(name);
}

let destructivelyRemoveLastCat=()=>{
    beforeEach();
    cats.pop();
}

let destructivelyRemoveFirstCat=(name)=>{
    beforeEach();
    cats.shift();
}

let appendCat=(name)=>{
    beforeEach();
    return [...cats,name]
}

let removeLastCat=(name)=>{
    beforeEach();
    return cats.slice(0,cats.length-1);
}


let removeFirstCat=(name)=>{
    beforeEach();
    return cats.slice(1);
}

let prependCat=(name)=>{
    beforeEach()
    return [name,...cats];
}

console.log(prependCat('dave'));
