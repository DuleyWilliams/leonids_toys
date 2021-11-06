const retroToys = [
    {
        id: 1,
        toyLine:"Transformers",
        name: "Optimus Prime",
        manufacturer: "Hasbro",
        generation: "G1",
        faction: "Autobot",
        releaseYear: 1984,
        originalPrice: 20.99,
    },
    {
        id: 2,
        toyLine:"Masters of The Universe",
        name: "He-Man",
        manufacturer: "Mattel",
        generation: "G1",
        faction: "Eternia /Grayskull",
        releaseYear: 1983,
        originalPrice: 10.99,
    },
    {
        id: 3,
        toyLine:"My Little Pony",
        name: "Pinkie Pie",
        manufacturer: "Hasbro",
        generation: "G1",
        faction: "Ponies",
        releaseYear: 1982,
        originalPrice: 5.99
    },
    {
        id: 4,
        toyLine:"Strawberry Shortcake",
        name: "Strawberry Shortcake",
        manufacturer: "Kenner",
        generation: "G1",
        faction: "Strawberry Land",
        releaseYear: 1982,
        originalPrice: 7.99
    },
    {
        id: 5,
        toyLine:"G.I. Joe: A Real American Hero",
        name: "Duke",
        manufacturer: "Hasbro",
        generation: "G1",
        faction: "G.I. Joe",
        releaseYear: 1982,
        originalPrice: 3.99
    },
    {
        id: 6,
        toyLine:"Rainbow Brite",
        name: "Rainbow Brite",
        manufacturer: "Mattel",
        generation: "G1",
        faction: "Rainbow Land",
        releaseYear: 1982,
        originalPrice: 10.99
    },
]

// console.log(retroToys)

// for (const retroToy of retroToys) {
//     console.log(`Price is ${retroToy.originalPrice}`)
// }

// for (const retroToy of retroToys) {
//     console.log(`The Toy name is ${retroToy.name}`)
// }

// for (const retroToy of retroToys) {
//     console.log(`The manufacturer is ${retroToy.manufacturer}`)
// }


    const careBears = {   
        id: 7,
        toyLine:"Care Bears",
        name: "Tenderheart",
        manufacturer: "Kenner",
        generation: "G1",
        faction: "Care-a-Lot",
        releaseYear: 1982,
        originalPrice: 12.99
    }

    retroToys.push(careBears)

    const liteBrite = {
        id: 8,
        toyLine:"Lite Brite",
        name: "Lite Brite",
        manufacturer: "Kenner",
        generation: "NA",
        faction: "Light It Up",
        releaseYear: 1982,
        originalPrice: 15.99
    }
    retroToys.push(liteBrite)

// console.log(retroToys)







// for (const retroToy of retroToys) {
//     retroToy.originalPrice = retroToy.originalPrice * (1 + .05)
//     console.log(`The ${retroToy.originalPrice}`)
// }



// for (const retroToy of retroToys) {
//     retroToys.originalPrice = retroToys.originalPrice * (1 + .05)
//     console.log(`${retroToy.toyLine}, ${retroToy.name} was released in ${retroToy.releaseYear} which cost $${retroToy.originalPrice}.`)
// }

const retroToyToFind = 1

// const retroToyToFind = retroToys[1].id
// console.log(retroToyToFind)

for (const retroToy of retroToys) {

    if (retroToy.id === retroToyToFind) {
        retroToy.originalPrice = retroToy.originalPrice * (1 + .05)
        console.log(`The ${retroToy.manufacturer} ${retroToy.name} cost ${retroToy.originalPrice} dollars. It was released in ${retroToy.releaseYear}`)
    }
}
// return retroToyToFind

const teddyRuxpin = {
    toyLine:"Teddy Bears",
    name: "Teddy Ruxpin",
    manufacturer: "Hasbro",
    generation: "G1",
    faction: "First Animated Talkin Toy",
    releaseYear: 1985,
    originalPrice: 45.99
    }


const addToyToInventory = (toyObject) => {
    const lastIndex = retroToys.length - 1
    const currentLastToy = retroToys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    toyObject.id = idForNewToy
    retroToys.push(toyObject)
}

/*
    Now that the function is defined, you can invoke it
    and put a value in the parenthesis (a.k.a. the argument).
    The object will be stored in the `toyObject`
    parameter for use in the function.
*/
addToyToInventory(teddyRuxpin)

// Display all the toys
for (const retroToy of retroToys) {
    console.log(`The ${retroToy.manufacturer} ${retroToy.name} costs ${retroToy.originalPrice} dollars. It was released It was released in ${retroToy.releaseYear}`)
}

console.log(retroToys)