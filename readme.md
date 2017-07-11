<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

### User Stories & Game Mechanics
1. There will have 2 players.
2. Players will water the plant by one push of a button. Each time a button is pushed, the plant grows.
3. Players can wilt opponent's plant.
4. The plant that reaches the full grown height first wins!

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

### Data Structures for "Race-Game"
Object types: Water, Game, and Tree.

**Water**
<details><summary>click for examples properties</summary>
  - `up-arrow` (Function - constructor; once pushed, the image of the plant grows by a certain height)
  - `P-key` (Function - constructor; can wilt opponent's plant by one step)
  - `G-key` (Function - "Function - constructor; once pushed, the image of the plant grows by a certain height")
  - `W-key` (Function - constructor; can wilt opponent's plant by one step);
</details>

**Game**
<details><summary>click for examples for Pair</summary>
  - `hasWon()` (Function - check if the game has been won!)
  - `celebrate()` (Function - display a win message)
  - `isTie()` (Function - both players got to finish line at the same time)

</details>

**Car**
<details><summary>click for examples for Game</summary>
  - `player1` (string)
  - `player2` (string)
  - `reset()` (Function - resets the game! Plant turns back to seed)
</details>

### User Stories

We build "user stories" as a way to structure the main capabilities of the sites we build. These stories are often phrased as "a user will be able to..." and make sure they describe how the site will work. Each user story can be broken down into the tasks that will be required to make this functionality possible.

1. A user will be able to water the given plant
  * Create HTML structure to display plants and field on screen (Handlebars?).
  * Ensure that plants start out as seeds in the soil (in `Game` constructor?).

2. A user will be able to wilt opponent's plant
  * Create HTML structure to display
  * Decrease opponent's plant height by 1 step

3. The user wins when the plant reaches the full grown tree!
  * Once player has the full grown tree, an alert/sound/sunshine will appear.
