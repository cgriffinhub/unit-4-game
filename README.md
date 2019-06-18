# unit-4-game
<h3>Star Wars RPG Game created with jQuery and image assets</h3>
<a href="https://cgriffinhub.github.io/unit-4-game/" target="_blank">Play Game</a>
<h4>Rules/Functions:</h4>
<li>When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.</li>
<li>The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.</li>
<li>The player chooses an opponent by clicking on an enemy's picture.</li>
<li>The player will now be able to click the 'attack' button.</li>
<li>The player chooses an opponent by clicking on an enemy's picture.</li>
<li>Whenever the player clicks 'attack', their character damages the defender. The opponent will lose 'HP' (health points). These points are displayed at the bottom of the defender's picture.</li>
<li>The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their 'HP'. These points are shown at the bottom of the player character's picture.</li>
<li>When the defender's 'HP' is reduced to zero or below, remove the enemy from the 'defender area'. The player character can now choose a new opponent.</li>
<li>The player wins the game by defeating all enemy characters. The player loses the game the game if their character's 'HP' falls to zero or below.</li>
<li>Each character in the game has 3 attributes: 'Health Points', 'Attack Power' and 'Counter Attack Power'.</li>
<li>Each time the player attacks, their character's Attack Power increases by its base Attack Power.</li>
<li>For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).</li>
<li>The enemy character only has 'Counter Attack Power'.</li>
<li>Unlike the player's 'Attack Points', `Counter Attack Power` never changes.</li>
<li>The `Health Points`, 'Attack Power' and 'Counter Attack Power' of each character must differ.</li>
<li>No characters in the game can heal or recover Health Points.</li>
<li>A winning player must pick their characters wisely by first fighting an enemy with low 'Counter Attack Power'. This will allow them to grind 'Attack Power' and to take on enemies before they lose all of their 'Health Points'. Healing options would mess with this dynamic.</li>
<li>Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.</li>
