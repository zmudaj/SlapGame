var health = 100;
var enemy = "Hydra";
var hits = 0;

function slap() {
    health--;
    hits++;
    //alert(health);
    update();
}

function punch() {
    health -= 5;
    hits++;
    //alert(health);
    update();
}

function kick() {
    health -= 10;
    hits++;
    //alert(health);
    update();
}

function update(){
    document.getElementById('healthId').innerText = health;
    document.getElementById('enemyId').innerText = enemy;
    document.getElementById('hitsId').innerText = hits;
}

//slap();
update();