const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    return cats.push("Ralph");
}
function destructivelyPrependCat(Bob) {
    return cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){
    return cats.shift();
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}

function removeLastCat() {
    return cats.splice[2];
};

function removeFirstCat() {
    return cats.splice[0];
};
function prependCat(Arnold) {
    return ["Arnold", ...cats];
  };
function appendCat(Broom) {
    return [...cats, "Broom"];
};
function removeLastCat () {
    return cats.slice(0, cats.length -1);
};
function removeFirstCat () {
    return cats.slice(1);
};