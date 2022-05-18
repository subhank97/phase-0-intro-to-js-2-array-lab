const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}
destructivelyAppendCat(Ralph)

function destructivelyPrependCat(name){
    return cats.unshift(name)
}
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}

function appendCat(name){
    const newCatsB = [...cats, name]
    return newCatsB
}
appendCat('Broom')

function prependCat(name){
    const newCatsA = [name, ...cats]
    return newCatsA
}
prependCat('Arnold')

function removeLastCat(){
    const smallCats = cats.slice(cats, cats.length-1)
    return smallCats
}
function removeFirstCat(){
    const bigCats = cats.slice(1)
    return bigCats
}