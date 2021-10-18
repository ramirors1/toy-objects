const toys = [
    {
    id: 1,
    name: "Monopoly",
    maker: "Hasbro",
    type: "Board Game",
    price: 20,
    weight: 1
    },
    {
    id: 2,
    name: "Hanjo Bike",
    maker: "DiamondBack",
    type: "Road Bike",
    price: 600,
    weight: 18
    }, 

    {
    id: 3,
    name: "Football",
    maker: "Wilson",
    type: "Composite Leather",
    price: 25,
    weight: .7
    }
    ]

    const addToyToInventory = (toyObject) => {
        /*
            Step 1: Get maximum id current in array
        */
        // Get index of last item in array
        const lastIndex = toys.length - 1
    
        // Get the last object in the array
        const currentLastToy = toys[lastIndex]
    
        // Get id property value of last phone
        const maxId = currentLastToy.id
    
    
        /*
            Step 2: Increase the current max id by 1
        */
        const idForNewToy = maxId + 1
    
    
        /*
            Step 3: Add the id property to the toy object
        */
        toyObject.id = idForNewToy
    
    
        /*
            Step 4: Add the toy object to the array
        */
        toys.push(toyObject)
    }

const hulaHoop = {
    name: "Hula Hoop",
    maker: "Mattel",
    type: "plastic",
    price: 15,
    weight: 1
    }
// const frisbee = {
//     name: "Frisbee",
//     maker: "Hasbro",
//     type: "plastic",
//     price: 10,
//     weight: 1
// }
   
addToyToInventory(hulaHoop)

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} lbs.`)
}

console.log(toys)

// const toyToFind = 2
//
// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.weight = toy.weight + 0.4
//         console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars. It weighs ${toy.weight} lbs.`)
//     }
// }