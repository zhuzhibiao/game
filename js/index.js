window.onload = function(){
    let keycon = document.querySelector(".keycon");
    let flag = document.querySelector("#flag");
    let bgmusic = document.querySelector("#bgmusic");
    let audio = document.querySelector("#audio");
    let key = document.querySelector(".key");
    let death = document.querySelector(".death");
    let replay = death.querySelector(".replay");
    let flg = false;

    keycon.ontouchstart = function(e){
        if (flg == false){
            return;
        }
        if(e.target.className == "btn" || e.target.className == "btn btn1"){
            e.target.style.transform = "scale(0.8)";
            game.delcon(e.target.innerText);
        }
    }
    keycon.ontouchend = function(e){
        if(e.target.className == "btn" || e.target.className == "btn btn1"){
            e.target.style.transform = "scale(1)";
        }
    }

    flag.ontouchstart = function () {
        if (flag.className == "end"){
            flag.className = "start"
            game.down();
            key.style.opacity = 0.2
            flg = true;
        }
        else {
            flag.className = "end"
            clearInterval(game.time)
            key.style.opacity = 1
            flg = false;
        }
    }

    bgmusic.ontouchstart = function () {
        if (bgmusic.className == "Aplay"){
            bgmusic.className = "Apause"
            audio.pause()
        }
        else {
            bgmusic.className = "Aplay"
            audio.play()
        }
    }
    replay.ontouchstart = function(){
        game.replay()
        flg = false;
        key.style.opacity = 1
    }

    let game = new Game();
    game.screen = document.querySelector(".screen");
    game.bgmusic = bgmusic;
    game.flag = flag;
    game.life = document.querySelector(".life");
    game.jf = document.querySelector(".jf");
    game.death = death;
    game.init();
    game.createLetter(5);
    // game.down();
}