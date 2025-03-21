const cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats];
}

function removeLastCat() {
    return cats.slice(0, -1);
}

function removeFirstCat() {
    return cats.slice(1);
}

module.exports = { 
    cats, 
    appendCat, 
    prependCat, 
    removeLastCat, 
    removeFirstCat
};
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
module.exports = { 
    cats, 
    destructivelyAppendCat, 
    destructivelyPrependCat, 
    destructivelyRemoveLastCat, 
    destructivelyRemoveFirstCat
};

