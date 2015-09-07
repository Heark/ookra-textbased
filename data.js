
// Connecting to a session
var Session = new Candy.session()
Session.call()
var OS = Session.ENV()
// Ok lets get started with the actual code




// can we even run it on here? Link?
// no we're running it in jsbin
// http://jsbin.com/vojedujuyi/edit?html,css,js,output
// READY

//You alive there?
var get_name = prompt("What is your name?");

var Players = function(hp, name, level) {
    this.hp = hp;
    this.name = name;
    this.level = level;
    // anything else you can think of
};
var Item = function(item, desc, effect){
    this.item = item;
    this.desc = desc; 
    this.effect = effect;
};
var Enemies = function(name, hp, drop){
    this.name = name;
    this.hp = hp;
    this.drop = drop; 
};

// Enemies
var Slime = new Enemies("Slime", 20, drop_1)


// Player
var Player = new Players(100, get_name, 1);

// Items
var Potion = new Item("Potion", "Recovers hp by 20 pts", 20);

// ENEMY Drop arrays
var drop_1 = [Potion] 

// Inventory
var Inventory = [];


var companion = function(species, name){
    this.type = animal;
    this.name = name;
};

var Griffon = new companion("Griffon", "Grif"); 
var Talking_Potato = new companion("Talking Potato", "Hotness");
var Slime = new companion("Slime","Jiggles");
var Dog = new companion("Dog","Doug"); // Doug LOL


var monsters_tier_1 = [Slime]
var selectedmonster;
