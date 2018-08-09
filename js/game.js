class Game{
    constructor( ){
        //构造函数
        this.screen = "";
        this.letterBox = [];
        this.bgmusic = ""
        this.life = ""
        this.jf = ""
        this.flag = ""
        this.death = ""
        this.sudu = 0.1;
    }
    createLetter(num = 1){
        //创建字母，默认为一个
        for(let i = 0;i < num;i++){
            let letter = "";
            do{
                letter = String.fromCharCode(Math.floor(Math.random()*26 + 65));//通过ASCII码创建随机字母
            }while (this.isTrue1(letter))
            let div = document.createElement("div");
            div.className = "letter";
            this.screen.appendChild(div);
            div.style.backgroundImage = `url(img/A_Z/${letter}.png)`;//在html中
            let left;
            do{
                left = (Math.random()*(4.95 - 0.6) + 1.4);
            }while(this.isTrue2(left))
            div.style.left = left + "rem";
            div.style.top = 1.2 + "rem"
            let obj = {
                top: 1.2,
                left: left,
                node: div,
                name: letter
            }
            this.letterBox.push(obj);
        }
            console.dir(this.letterBox);
    }

    init(){
        this.bgmusic.className = "Aplay";
        this.life.innerText = "10"
        this.jf.innerText = "0"
        this.flag.className = "end"
        this.screen.innerText = "";
        this.letterBox = [];
        this.sudu = 0.1;
    }

    isTrue1(element){
        for(let item of this.letterBox){
            if (element == item.name){
                return true;
            }
        }
        return false;
    }
    isTrue2(left){
        for(let item of this.letterBox){
            if (left > (item.left-0.53) && left < (item.left+0.53)){
                return true;
            }
        }
        return false;
    }
    down(){
        let that = this;
        this.time = setInterval(()=>{
            this.letterBox.forEach(function(item,index){
                item.top += that.sudu;
                if (item.top >= 6){
                    that.addlife();
                    that.screen.removeChild(item.node);
                    that.letterBox.splice(index,1);
                    that.createLetter();
                }
                item.node.style.top = item.top + "rem";
            })
        },200)
    }
    delcon(name){
        this.letterBox.forEach((item,index)=>{
            if (name == item.name){
                this.addjf();
                this.screen.removeChild(item.node);
                this.letterBox.splice(index,1);
                this.createLetter(1);
            }
        })
    }
    addlife(){
        this.life.innerText--;
        if (this.life.innerText<=0){
            this.death.style.display = "block"
            clearInterval(this.time);
            this.death.childNodes[1].childNodes[1].innerText = this.jf.innerText;
        }
    }
    addjf(){
        this.jf.innerText++;
        this.sudu = this.jf.innerText/100 + 0.1;
    }
    replay(){
        this.death.style.display = "none"
        this.init()
        this.createLetter(5)
    }
}