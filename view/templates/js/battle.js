var cards = [
    {
        "name":"Spider-Man", 
        "attack":3, 
        "hp":2, 
        "cost":1,
        "url":"http://www.hearthcards.net/cards/756a4ff8.png"
    },
    {
        "name":"Iron Man", 
        "attack":4, 
        "hp":4, 
        "cost":4,
        "url":"http://www.hearthcards.net/cards/81b24038.png"
    }, 
    {
        "name":"Vision", 
        "attack":5, 
        "hp":3, 
        "cost":4,
        "url":"http://www.hearthcards.net/cards/0ae5732e.png"
    },
    {
        "name":"Locky", 
        "attack":4, 
        "hp":2, 
        "cost":3,
        "url":"http://www.hearthcards.net/cards/11de9221.png"
    },
    {
        "name":"Captain America", 
        "attack":2, 
        "hp":2, 
        "cost":1,
        "url":"http://www.hearthcards.net/cards/53e3d500.png"
    }
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
    /*if (active?.classList?.length > 1 && [ ...event.target.classList ].includes('active')) {
        event.target.classList = 'enemy_card'
    } else {
        active.classList = 'enemy_card'
        event.target.classList+=" active";
        active = event.target
    }*/
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
    time = 0;
    timer_strat();

    enemy_diamond = 2;
    diamond = 2;
    document.querySelector(".mana_value").innerHTML = diamond;

    for(let i = 1; i <= 4; i++) {
        hero_cards_arr.push(getRandomInt(5));
        enemy_cards_arr.push(Object.assign({}, cards[getRandomInt(5)]));
    }
    render_enemy_cards(enemy_cards_arr.length);
    render_hero_cards(hero_cards_arr);
    console.log(hero_cards_arr);
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
           if(getRandomInt(10) == 5)
                break;
            if(enemy_cards_arr[i]['cost'] <= enemy_diamond){
                enemy_diamond -= enemy_cards_arr[i]['cost'];
                enemy_cards_on_board.push(Object.assign({}, enemy_cards_arr[i]));
                enemy_cards_arr.splice(i, 1);
            }
        }
    }
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
    if(enemy_cards_on_board[0] && hero_cards_on_board[0]){
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
    }
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
    document.querySelector(".hero_health").innerHTML = hero_health;
    document.querySelector(".enemy_health").innerHTML = enemy_health;
    render_enemy_cards_on_board();
    render_hero_cards_on_board();
}

function end_turn() {
    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    time = 0;

    if(diamond < 6 && hero_cards_arr.length < 8){
        diamond += 2;
        document.querySelector(".mana_value").innerHTML = diamond;
        
        hero_cards_arr.push(getRandomInt(5));
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
        enemy_cards_arr.push(Object.assign({}, cards[getRandomInt(5)]));
        render_enemy_cards(enemy_cards_arr.length);
    }

    setTimeout(function(){
        fight();
    }, 2000);
}
function give_up() {
    document.querySelector(".enemy_card_board").innerHTML = "";
    document.querySelector(".hero_card_board").innerHTML = "";
    document.querySelector(".hero_cards").innerHTML = '';
    document.querySelector(".enemy_cards").innerHTML = '';
    clearInterval(timer);
}