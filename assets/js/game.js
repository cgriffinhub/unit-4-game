// Initialize variables for character and game attributes 
var obi = {hp:6300, attack:460, counter:950,name:"Obi-Wan Kenobi"};
var rey = {hp:6600, attack:450, counter:900,name:"Rey"};
var jabba = {hp:7800, attack:300, counter:800,name:"Jabba The Hutt"};
var palpatine = {hp:7600, attack:350, counter:830,name:"Emperor Palpatine"};
var character;
var attackCounter = 0;
var enemy;

// Functionality for setting player's character when clicked
$(document).on('click', ".character-choice", function() {

if($('#defender-selection').find('.defender-choice').length == 0 && $('#enemies-selection').find('.enemy-choice').length == 0 ) {
    if(!$("#attack").attr("disabled","disabled").text("SELECT YOUR FIRST ENEMY")){
        $("#attack").attr("disabled","disabled").text("SELECT YOUR FIRST ENEMY");
    }
}
    character = $.trim($(this).text());
    
    
    if (character === "Obi-Wan Kenobi") {
            character = obi;
    }
    else if (character === "Jabba The Hutt") {
        character = jabba;
        
    }
    else if (character === "Rey") {
        character = rey;
    }
    else if (character === "Emperor Palpatine") {
        character = palpatine;
    }
    
    // display Health points of chosen character
    $(this).find(".hp").text("HP " + character.hp);

// set enemies based on all other characters
    $('.character-choice').not(this).each(function(i, obj) {
        $(this).removeClass('character-choice').addClass('enemy-choice');
        $("#enemies-selection" ).append($( this ).clone());
        $(this).remove(); 
    });

    $(".character-text").text("");
    $(".you-text").text("You");
    $(document).off('click', '.character-choice');
});


// Functionality for setting enemies when clicked
$(document).on('click', ".enemy-choice", function() {

    
    if($('#defender-selection').find('.defender-choice').length == 0) {
    console.log(character);
     enemy = $.trim($(this).text());
    
    if (enemy === "Obi-Wan Kenobi") {
        enemy = obi;
    }
    else if (enemy === "Jabba The Hutt") {
        enemy = jabba;
    }
    else if (enemy === "Rey") {
        enemy = rey;
    }
    else if (enemy === "Emperor Palpatine") {
        enemy = palpatine;
    }
    $(this).find(".hp").text("HP " + enemy.hp);
    
    if($('#defender-selection').find('.defender-choice').length == 0) {
        $(this).removeClass('enemy-choice').addClass('defender-choice');
        $("#defender-selection" ).append($( this ).clone());

    if(!$("#attack").attr("disabled",false).text("ATTACK")){
        $("#attack").attr("disabled",false).text("ATTACK");
    }

        $(this).remove();
    }

    $(".enemies-text").text("");
    $(".enemy-text").text("Enemy");
    
    return enemy;
    }

});

// any time enemy is clicked, add the "attack" effect
function pulsateAttack() {
    var attackText = $("#attack");
  for(var i=0; i<3; i++) {
    attackText.animate({opacity: 0.8}, 150, 'linear')
     .animate({opacity: 1}, 150, 'linear');
  }
    $("#attack").html("ATTACK<br><span style='font-size:14px;'>You attacked " + enemy.name + 
    " for " + character.attack*attackCounter + " HP <br> " + enemy.name + 
    " counter-attacked for " + enemy.counter + " HP</span>");
    
}

/*  onclick event for attack. Caulculates the remaining health points as result of attack damage,
or determines win/loss if attacker or defender HP =< 0 */
$(document).on('click', "#attack", function() {

        if ($('#attack').text() === "YOU LOSE! PLAY AGAIN") {
            location.reload();
        }
        else if ($('#attack').text() === "YOU WIN! PLAY AGAIN") {
            location.reload();
        }
        else {

            if($('#defender-selection').find('.defender-choice').length !== 0) {
            attackCounter = attackCounter + 1;

            enemy.hp = enemy.hp - character.attack*attackCounter;  
            
            $("#defender-selection").find(".hp").text("HP " + enemy.hp);

            if (enemy.hp <= 0) {
                $('.defender-choice').remove();
                $(".enemies-text").text("");
                $(".enemy-text").text("Enemy");
                $("#attack").attr("disabled","disabled").text("SELECT YOUR NEXT ENEMY");
            }
            else if (character.hp > 0 && enemy.hp > 0){
                pulsateAttack();
            }
            if(($('#enemies-selection').find('.enemy-choice').length == 0) && ($('#defender-selection').find('.defender-choice').length == 0)) {
                $('#attack').text("YOU WIN! PLAY AGAIN");
                $("#attack").attr("disabled",false);
                $("#character-selection").find(".hp").text("");
                $("#character-selection").find(".hp").text("HP " + character.hp);
            }
            else {
                if ($('#defender-selection').find('.defender-choice').length !== 0) {
                    character.hp = character.hp - enemy.counter;
                }
                
                $("#character-selection").find(".hp").text("HP " + character.hp);
                if (character.hp <= 0)  {
                    console.log(enemy.hp);
                    $('#attack').text("YOU LOSE! PLAY AGAIN");
                    $("#attack").attr("disabled",false);
                    $("#character-selection").find(".hp").text("0");
                }
            }

            
            }
            else {
                if(!$("#attack").attr("disabled","disabled").text("SELECT YOUR NEXT ENEMY")){
                $("#attack").attr("disabled","disabled").text("SELECT YOUR NEXT ENEMY");
                }
            }
        }

        

    
});

$( document ).ready(function() {
// If no defender is in place, disable attack button and display "NOT READY" text.
if($('#defender-selection').find('.defender-choice').length == 0 && $('#enemies-selection').find('.enemy-choice').length == 0 ) {
        $("#attack").attr("disabled","disabled").text("SELECT YOUR CHARACTER");
    }
});
