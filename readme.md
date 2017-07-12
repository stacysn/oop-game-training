<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

### Grow a tree and compete with a buddy! 
1. There will have 2 tree growers.
2. Players will water the plant by pushing their designated button. Each time a button is pushed a few times, the plant grows to the next stage.
3. Players can decrease opponent's points making them slower to grow.
4. The plant that reaches the full grown height first wins!

<br>
<br>

### Data Structures for "Race-Game"
**Watering Plant**
<details><summary>click for examples properties</summary>
  - `P-key` (Function - constructor; once pushed, the image of the plant grows by a certain height)
  - `M-key` (Function - constructor; can decrease opponent's plant by one point)
  - `W-key` (Function - Function - constructor; once pushed, the image of the plant grows by a certain height)
  - `C-key` (Function - constructor; can decrease opponent's plant by one point);
</details>

**Game**
  - `hasWon()` (Boolean - checks to see if there is a winner)

**Growers**
  - `player1` (string)
  - `player2` (string)
  - `reset()` (Function - resets the game! Plant turns back to seed)

### User Stories

We build "user stories" as a way to structure the main capabilities of the sites we build. These stories are often phrased as "a user will be able to..." and make sure they describe how the site will work. Each user story can be broken down into the tasks that will be required to make this functionality possible.

1. A user will be able to water the given plant
  * Create HTML structure to display plants and field on screen (Handlebars?).
  * Ensure that plants start out as seeds in the soil (in `Game` constructor?).

2. A user will be able to wilt opponent's plant
  * Create HTML structure to display
  * Decrease opponent's plant height by 1 step

3. The user wins when the plant reaches the full grown tree!
  * An alert will announce the winner at the top of the page
