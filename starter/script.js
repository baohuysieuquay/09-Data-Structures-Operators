'use strict';

/*// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};*/

///////////////////////////////////////
// Coding Challenge #1

/*
1. Create one player array for each team 
(variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper
 and the others are field players. For Bayern Munich 
 (team 1) create one variable ('gk')
  with the goalkeeper's name,
   and one array ('fieldPlayers') with 
   all the remaining 10 field players
3. Create an array 'allPlayers' containing all players
 of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 
substitute players. So create a new array 
('players1Final') containing all the 
original team1 players plus 'Thiago', 'Coutinho' 
and 'Perisic'
5. Based on the game.odds object, create one variable 
for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives 
an arbitrary number of player names (NOT an array) and 
prints each of them to the console, along with the 
number of goals that were scored in total
 (number of player names passed in)
7. The team with the lower odd is more likely to win.
 Print to the console which team is more likely to win, 
 WITHOUT using an if/else statement or the ternary 
 operator.

TEST DATA FOR 6: Use players 
'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players
 from game.scored

GOOD LUCK 😀
*/



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};


const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//const { team1, draw = game.odds.x, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  }
  console.log(players.length);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

team1 < team2 && console.log('Bayern Munchen is likely going to win');
team1 > team2 && console.log('Borussia Dortmund is likely going to win');




/*

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player
 name to the console, along with the goal number
  (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd 
and log it to the console
 (We already studied how to calculate averages, 
  you can go check if you don't remember)
3. Print the 3 odds to the console, 
but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, 
don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects
 have the same property names 😉

BONUS: Create an object called 'scorers' 
which contains the names of the players 
who scored as properties, 
and the number of goals as the value. 
In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let sum = 0;
for (const value of Object.values(game.odds)) {
  sum += value;
}
let average1 = sum / Object.values(game.odds).length;
console.log(sum, average1);

// better 2.
const odds = Object.values(game.odds);
let average2 = 0;
for (const odd of odds) average2 += odd;
average2 /= odds.length;
console.log(average2);

// 3.
for (const [x, y] of Object.entries(game.odds)) {
  x == 'team1' && console.log(`Odd of victory ${game.team1}: ${y}`);
  x == 'x' && console.log(`Odd of draw: ${y}`);
  x == 'team2' && console.log(`Odd of victory ${game.team2}: ${y}`);
}

// better 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// 4.
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}


console.log(scorers);



///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app!
This time, 
we have a map with a log of the events that
happened during the game.
The values are the events themselves,
and the keys are the minutes 
in which each event happened 
(a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events 
that happened (no duplicates)
2. After the game has finished, 
is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Print the following string to the console: 
"An event happened, on average, every 9 minutes" 
(keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, 
marking whether it's in the first half or second half 
(after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = new Set(gameEvents.values());
console.log(events);

// 2.
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [min, event] of gameEvents) {
  const time = min <= 45 ? '[FIRST HALF]' : '[SECOND HALF]';
  console.log(`${time} ${min}: ${event}`);
}

