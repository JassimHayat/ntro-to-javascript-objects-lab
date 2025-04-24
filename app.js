const pokemon = require('./data.js');

const game = {
    party: [   
        
        { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    ]
        ,
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1, difficulty : "Easy" },
      { location: "Cerulean City", completed: false, difficulty: 2, difficulty : "Easy" },
      { location: "Vermilion City", completed: false, difficulty: 3 , difficulty : "Easy" },
      { location: "Celadon City", completed: false, difficulty: 4, difficulty : "Med" },
      { location: "Fuchsia City", completed: false, difficulty: 5 , difficulty : "Med" },
      { location: "Saffron City", completed: false, difficulty: 6 , difficulty : "Med"},
      { location: "Cinnabar Island", completed: false, difficulty: 7 , difficulty : "Hard"},
      { location: "Viridian City", completed: false, difficulty: 8 ,difficulty : "Hard"}, 
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  

  console.dir(pokemon, { maxArrayLength: null })
  console.log(game)


  /*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?

Solve Exercise 3 here:
*/

//add game.difficulty inside the game
game.difficulty = "Easy";
game.difficulty = "Med";
game.difficulty = "Hard";

console.log(game.difficulty)



/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?

Solve Exercise 4 here:
*/

var starterPokemon = pokemon.find(pokemon => pokemon.starter === true);
game.party.push(starterPokemon);
console.dir(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/

const pokemon1 = pokemon.find(p => p.name === "Metapod")
const pokemon2 = pokemon.find(p => p.name === "Pikachu")
const pokemon3 = pokemon.find(p => p.name === "Raticate")

game.party.push(pokemon1,pokemon2,pokemon3);

/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.

Solve Exercise 6 here:
*/

for (i = 0; i <game.gyms.length;i++) {
    if ( game.gyms[i].difficulty < 3){
    game.gyms[i].completed = true;
    }
  }
    


    /*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

const evolvedPikachu = pokemon.find(p => p.name === "Raichu");
const evolvedRaticate = pokemon.find(p => p.name === "Ninetales");
const evolvedMetapod = pokemon.find(p => p.name === "Butterfree");


function evolvedPokemonInParty(pokemonName, evolvedPokemon){
  const pokemonIndex = game.party.findIndex(p => p.name === pokemonName);
  if (pokemonIndex !== -1) {
    game.party.splice(pokemonIndex, 1 , evolvedPokemon);
  }
}

evolvedPokemonInParty("Pikachu", evolvedPikachu);



/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

for (let i = 0; i < pokemon.length; i++){
  if (pokemon[i].starter ===true){
    console.log(pokemon[i]);
  }
  }
  

  /*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/