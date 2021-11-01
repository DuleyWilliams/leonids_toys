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
    }
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


const careBear = {
        id: 5,
        toyLine:"Care Bears",
        name: "Tenderheart",
        manufacturer: "Kenner",
        generation: "G1",
        faction: "Care-a-Lot",
        releaseYear: 1982,
        originalPrice: 12.99
}

retroToys.push(careBear)

for (const retroToy of retroToys) {
    retroToy.originalPrice = retroToy.originalPrice * (1 + .05);
}

for (const retroToy of retroToys) {
    console.log(`${retroToy.toyLine}, ${retroToy.name} was released in ${retroToy.releaseYear} which cost $${retroToy.originalPrice}.`)
}