let animals = ['dog', 'cat', 'bird', 'frog', 'zebra', 'lizard', 'octopus', 'rabbit', 'panda', 'dolphin'];
let locations = ['bush', 'tree', 'hedge', 'pond', 'cage'];

let ranNum = arr => {
    return Math.floor(Math.random()*arr.length);
}

let animal = animals[ranNum(animals)];
let location = locations[ranNum(locations)];

console.log(`A ${animal} in the hand is worth two in the ${location}`)
