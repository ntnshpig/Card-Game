var cards = [
    {
        "name":"Spider-Man", 
        "attack":3, 
        "hp":2, 
        "cost":2,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/01/29/81/96/01298196.png"
    },
    {
        "name":"Iron Man", 
        "attack":4, 
        "hp":4, 
        "cost":4,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/67/f1/88/f9/67f188f9.png"
    }, 
    {
        "name":"Wolverine", 
        "attack":3, 
        "hp":4, 
        "cost":3,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/2a/07/fc/12/2a07fc12.png"
    },
    {
        "name":"Thor", 
        "attack":4, 
        "hp":5, 
        "cost":3,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/0e/b0/4f/68/0eb04f68.png"
    },
    {
        "name":"Hulk", 
        "attack":6, 
        "hp":6, 
        "cost":5,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/b7/64/9b/fe/b7649bfe.png"
    },
    {
        "name":"Luke Cage", 
        "attack":2, 
        "hp":1, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/20/98/0e/bb/20980ebb.png"
    },
    {
        "name":"Nick Fury", 
        "attack":2, 
        "hp":1, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/af/24/09/32/af240932.png"
    },
    {
        "name":"Gambit", 
        "attack":2, 
        "hp":2, 
        "cost":2,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/40/ce/25/d1/40ce25d1.png"
    },
    {
        "name":"Hawkeye", 
        "attack":2, 
        "hp":2, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/f8/1d/48/81/f81d4881.png"
    },
    {
        "name":"Silver Surfer", 
        "attack":7, 
        "hp":5, 
        "cost":5,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/cc/92/b5/fc/cc92b5fc.png"
    },
    {
        "name":"Blade", 
        "attack":3, 
        "hp":2, 
        "cost":2,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/b8/92/ad/5b/b892ad5b.png"
    },
    {
        "name":"Nightcrawler", 
        "attack":3, 
        "hp":2, 
        "cost":2,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/f7/b6/89/30/f7b68930.png"
    },
    {
        "name":"Doctor Strange", 
        "attack":3, 
        "hp":4, 
        "cost":4,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/31/40/8d/2d/31408d2d.png"
    },
    {
        "name":"Miles Morales" ,
        "attack":3, 
        "hp":1, 
        "cost":3,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/1a/ab/71/34/1aab7134.png"
    },
    {
        "name":"Black Panther", 
        "attack":4, 
        "hp":3, 
        "cost":3,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/39/4d/b0/52/394db052.png"
    },
    {
        "name":"Captain America", 
        "attack":1, 
        "hp":2, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/63/48/f9/12/6348f912.png"
    },
    {
        "name":"Black Widow", 
        "attack":1, 
        "hp":1, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/36/3b/e0/67/363be067.png"
    },
    {
        "name":"Vision", 
        "attack":4, 
        "hp":2, 
        "cost":3,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/cd/25/3c/c5/cd253cc5.png"
    },
    {
        "name":"Quicksilver", 
        "attack":2, 
        "hp":2, 
        "cost":2,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/37/7a/8e/4f/377a8e4f.png"
    },
    {
        "name":"Black Cat", 
        "attack":2, 
        "hp":1, 
        "cost":1,
        "url":"https://hearthcards.ams3.digitaloceanspaces.com/e0/c9/9a/7a/e0c99a7a.png"
    }
  ];

var bots_name = [
    "Kekich",
    "Piggy",
    "Pipi",
    "Daydream",
    "Charisma",
    "Jotaro",
    "Dawg",
    "Sasuke",
    "Dio",
    "Van",
    "Nimble",
    "PainKiller228",
    "Goose",
    "Buzz",
    "Ziggy",
    "Knight",
    "Tanos",
    "Spike",
    "Chipper",
    "Tony Chopper",
    "Eagle",
    "Mania",
    "Lucky"
];
var bots_url = [
    "https://i.pinimg.com/originals/dc/2c/9f/dc2c9fd87e255ab4f553c1bbf59579b7.png",
    "https://cdn.readawrite.com/articles/2763/2762103/thumbnail/large.gif?1",
    "https://i.pinimg.com/originals/2b/83/03/2b8303825281780827b6ddd1266f64dd.jpg",
    "https://static.wikia.nocookie.net/shingekinokyojin/images/8/8f/Pieck_Finger_%28Anime%29.png/revision/latest?cb=20210113170718&path-prefix=de",
    "https://i.pinimg.com/originals/42/da/13/42da13963fd8fa7f10dcfecc66246592.jpg",
    "https://i.pinimg.com/originals/1d/33/ff/1d33ffbf275d438f5bdc7576a66d3cfb.png",
    "https://static.wikia.nocookie.net/shingekinokyojin/images/3/36/Mikasa_Ackermann_%28Anime%29_character_image_%28850%29.png/revision/latest?cb=20210117223024",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/loki-1556801363.jpeg?crop=0.528xw:0.997xh;0.377xw,0.00330xh&resize=480:*",
    "https://pyxis.nymag.com/v1/imgs/7ba/cbc/5e124a163bf8cfde5dd82a59c45bc633f8-11-brolin-thanos-1.rsquare.w1200.jpg",
    "https://i.pinimg.com/originals/08/ed/d5/08edd502da31c8167299a07885039da8.jpg"
];

//indexes of cards in cards
let hero_cards_arr = [];
let enemy_cards_arr = [];

let time = 0;

//Count of mana
let diamond = 0;
let enemy_diamond = 0;

//indexes of selected cards in array
let selected_cards = [];

//player cards on board;
let hero_cards_on_board = [];
let enemy_cards_on_board = [];

//enemy health
let enemy_health = 40;
//hero health
let hero_health = 40;

const select = (el) => {
    if(el.classList.contains("active")){
        el.classList.remove("active");
        selected_cards = selected_cards.filter((item) => item !== +el.getAttribute('name'));
        diamond += cards[hero_cards_arr[+el.getAttribute('name')]]['cost'];
        document.querySelector(".mana_value").innerHTML = diamond;
    } else {
        if(cards[hero_cards_arr[+el.getAttribute('name')]]['cost'] <=  diamond){
            el.classList += " active";
            selected_cards.push(+el.getAttribute('name'));
            diamond -= cards[hero_cards_arr[+el.getAttribute('name')]]['cost'];
            document.querySelector(".mana_value").innerHTML = diamond;
        }
    }
}
let timer;
function timer_strat() {
    timer = setInterval(function() {
        var distance = 30 - time;
        time += 1;
        document.querySelector(".timer_time").innerHTML = distance;
        if (distance == 0) {
            time = 0;
            end_turn();
        }
    }, 1000);
}

function render_enemy_cards(num) {
    document.querySelector(".enemy_cards").innerHTML = '';
    for(let i = 1; i <= num; i++) {
        let enemy_cards = document.querySelector(".enemy_cards");

        var card = document.createElement("div");
        card.classList += "enemy_card";
        var circle = document.createElement("div");
        circle.classList += "circle";
        var span = document.createElement("span");
        span.classList += "num";
        span.innerHTML = i;

        circle.appendChild(span);
        card.appendChild(circle);
        enemy_cards.appendChild(card);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function render_hero_cards(arr) {
    let index = 0;
    document.querySelector(".hero_cards").innerHTML = '';
    arr.forEach(element => {
        let hero_cards = document.querySelector(".hero_cards");
        
        var div = document.createElement("div");
        div.classList += "card_div";
        div.setAttribute('name', index);
        div.setAttribute('onclick', "select(this)");

        var img = document.createElement("img");
        img.classList += "hero_card_image";
        img.src = cards[element]["url"];

        var hp = document.createElement("span");
        hp.classList += "hp";
        hp.innerHTML = cards[element]["hp"];

        div.appendChild(img);
        div.appendChild(hp);
        hero_cards.appendChild(div);
        index++;
    });
}
function  game_start() {
    enemy_diamond = 2;
    diamond = 2;
    document.querySelector(".mana_value").innerHTML = diamond;

    for(let i = 1; i <= 3; i++) {
        hero_cards_arr.push(getRandomInt(20));
        enemy_cards_arr.push(Object.assign({}, cards[getRandomInt(20)]));
    }
    render_enemy_cards(enemy_cards_arr.length);
    render_hero_cards(hero_cards_arr);

    document.querySelector(".enemy_avatar").src = bots_url[getRandomInt(bots_url.length)];
    document.querySelector(".enemy_name").innerHTML = bots_name[getRandomInt(bots_name.length)];

    setTimeout( function() {
        document.querySelector(".start_fight").style.display = "none";
        time = 0;
        timer_strat();
    }, 1200);
}

game_start();

function render_hero_cards_on_board() {
    document.querySelector(".hero_card_board").innerHTML = "";
    if(hero_cards_on_board[0]){
        hero_cards_on_board.forEach(elem => {
            let hero_board = document.querySelector(".hero_card_board");

            var div = document.createElement("div");
            div.classList += "hero_board_card_div";

            var img = document.createElement("img");
            img.classList += "hero_card_image";
            img.src = elem["url"];

            var hp = document.createElement("span");
            hp.classList += "hp";
            hp.innerHTML = elem["hp"];

            div.appendChild(img);
            div.appendChild(hp);
            hero_board.appendChild(div);
        });
    }
}

function render_enemy_cards_on_board() {
    document.querySelector(".enemy_card_board").innerHTML = "";
    if(enemy_cards_on_board[0]){
        enemy_cards_on_board.forEach(elem => {
            let enemy_board = document.querySelector(".enemy_card_board");

            var div = document.createElement("div");
            div.classList += "enemy_board_card_div";

            var img = document.createElement("img");
            img.classList += "hero_card_image";
            img.src = elem["url"];

            var hp = document.createElement("span");
            hp.classList += "hp";
            hp.innerHTML = elem["hp"];

            div.appendChild(img);
            div.appendChild(hp);
            enemy_board.appendChild(div);
        });
    }
}
function bot_move() {
    console.log(enemy_cards_arr[0]['cost']);
    if(enemy_diamond > 0){
       for(let i = enemy_cards_arr.length-1; i >= 0; i--) {
           if(getRandomInt(20) == 5)
                break;
            if(enemy_cards_arr[i]['cost'] <= enemy_diamond){
                enemy_diamond -= enemy_cards_arr[i]['cost'];
                enemy_cards_on_board.push(Object.assign({}, enemy_cards_arr[i]));
                enemy_cards_arr.splice(i, 1);
            }
        }
    }
}

function lose() {
    clearInterval(timer);
    document.querySelector(".lose").style.display = "flex";
    setTimeout ( function() {
        window.location.replace("index.php");
    }, 3000);
}
function win() {
    clearInterval(timer);
    document.querySelector(".win").style.display = "flex";
    setTimeout ( function() {
        window.location.replace("index.php");
    }, 3000);
}


function fight() {
    for(let i = 0; i < hero_cards_on_board.length; i++){
        if(enemy_cards_on_board.length > 0 && enemy_cards_on_board[0]["hp"] > 0) {
            enemy_cards_on_board[0]["hp"] -= hero_cards_on_board[i]["attack"];
            hero_cards_on_board[i]["hp"] -= enemy_cards_on_board[0]["attack"]
            if(enemy_cards_on_board[0]["hp"] <= 0){
                enemy_cards_on_board.shift();
            }
        } else {
            enemy_health -= hero_cards_on_board[i]["attack"];
        }
    }
    /*if(enemy_cards_on_board[0] && hero_cards_on_board[0]){
        for(let i = 0; i < enemy_cards_on_board.length; i++){
            if(hero_cards_on_board.length > 0 && hero_cards_on_board[0]["hp"] > 0) {
                hero_cards_on_board[0]["hp"] -= enemy_cards_on_board[i]["attack"];
                enemy_cards_on_board[i]["hp"] -= hero_cards_on_board[0]["attack"]
                if(hero_cards_on_board[0]["hp"] <= 0){
                    hero_cards_on_board.shift();
                }
            } else {
                hero_health -= enemy_cards_on_board[i]["attack"];
            }
        }
    }*/
    for(let i = hero_cards_on_board.length-1; i>=0; i--){
        if(hero_cards_on_board[i]["hp"] <= 0){
            hero_cards_on_board.splice(i, 1);
        }
    }
    for(let i = enemy_cards_on_board.length-1; i>=0; i--){
        if(enemy_cards_on_board[i]["hp"] <= 0){
            enemy_cards_on_board.splice(i, 1);
        }
    }
    if(enemy_cards_on_board[0]){
        enemy_cards_on_board.forEach(elem => {
            hero_health -= elem["attack"];
        });
    }
    document.querySelector(".hero_health").innerHTML = "Health: " + hero_health;
    document.querySelector(".enemy_health").innerHTML = "Health: " + enemy_health;
    render_enemy_cards_on_board();
    render_hero_cards_on_board();
    if(hero_health <= 0) {
        lose();
    } else if (enemy_health <= 0) {
        win()
    }
}

function end_turn() {
    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    time = 0;

    if(diamond < 6 && hero_cards_arr.length < 8){
        diamond += 2;
        document.querySelector(".mana_value").innerHTML = diamond;
        
        hero_cards_arr.push(getRandomInt(20));
    }

    let tmp_arr = selected_cards.sort().reverse();

    selected_cards.forEach(index => {
        hero_cards_on_board.push(Object.assign({}, cards[hero_cards_arr[index]]));
    });
    render_hero_cards_on_board();
    selected_cards = [];

    tmp_arr.forEach(index => {
        hero_cards_arr.splice(index, 1);
    });
    render_hero_cards(hero_cards_arr);
    console.log(hero_cards_arr);
    console.log(enemy_cards_arr);

    bot_move();
    render_enemy_cards_on_board();
    if(enemy_diamond < 6 && enemy_cards_arr.length < 8){
        enemy_diamond += 2;
        enemy_cards_arr.push(Object.assign({}, cards[getRandomInt(20)]));
        render_enemy_cards(enemy_cards_arr.length);
    }
    clearInterval(timer);
    document.querySelector(".fight").style.display = "flex";
    setTimeout(function(){
        timer_strat();
        document.querySelector(".fight").style.display = "none";
        fight();
    }, 3000);
}
function give_up() {
    clearInterval(timer);
    lose();
}