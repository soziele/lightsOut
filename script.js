//autorka: Sonia Zieleźny

class LightsOut{

    constructor(lights, movesNumberText){
        this.lights = lights
        this.movesNumberText = movesNumberText
        this.isLightOn = new Array(25)
        this.moveNumber = 0
        this.solutionLights = new Array(25)
        for(var i=0; i<this.lights.length; i++){
            this.isLightOn[i]= false
            this.solutionLights[i]=""
        }
        this.newGame()
    }


    pressLight(index){

        this.flip(index)
        this.lights.item(index).style.borderWidth = "0px";
        if(index!="0"&&index!="5"&&index!="10"&&index!="15"&&index!="20"){
            this.flip(parseFloat(index)-1)
        }
        if(index!="4"&&index!="9"&&index!="14"&&index!="19"&&index!="24"){
            this.flip(parseFloat(index)+1)
        }
        if(index!="0"&&index!="1"&&index!="2"&&index!="3"&&index!="4"){
            this.flip(parseFloat(index)-5)
        }
        if(index!="20"&&index!="21"&&index!="22"&&index!="23"&&index!="24"){
            this.flip(parseFloat(index)+5)
        }
        
    }

    flip(index){

        if(this.isLightOn[index]) {
            this.lights.item(index).style.backgroundColor = "lightseagreen";
            this.isLightOn[index] = false;
        }
        else{
            this.lights.item(index).style.backgroundColor = "rgb(255, 222, 191)";
            this.isLightOn[index] = true;
        }
    }

    solve(){
      
        var lightsOnTmp = new Array(25);

        for(var i=0; i<25; i++){
            this.solutionLights[i]="";
            if(this.isLightOn[i]==true) lightsOnTmp[i]=1;
            else lightsOnTmp[i]=0;
        }

        for(var i=0; i<25; i++){

            if(i>4){

                if(lightsOnTmp[i-5] == 1){

                    lightsOnTmp[i]=(lightsOnTmp[i]+1)%2;
                    if(i!=0&&i!=1&&i!=2&&i!=3&&i!=4) lightsOnTmp[i-5]=(lightsOnTmp[i-5]+1)%2;
                    if(i!=20&&i!=21&&i!=22&&i!=23&&i!=24)lightsOnTmp[i+5]=(lightsOnTmp[i+5]+1)%2;
                    if(i!=0&&i!=5&&i!=10&&i!=15&&i!=20) lightsOnTmp[i-1]=(lightsOnTmp[i-1]+1)%2;
                    if(i!=4&&i!=9&&i!=14&&i!=19&&i!=24)lightsOnTmp[i+1]=(lightsOnTmp[i+1]+1)%2;

                    if(this.solutionLights[i]=="") {
                        this.solutionLights[i]="O";
                    }
                    else{
                        this.solutionLights[i]="";
                    }
                }
            }
        }

            if(lightsOnTmp[20]==1&&lightsOnTmp[21]==1&&lightsOnTmp[22]==1&&lightsOnTmp[23]==0&&lightsOnTmp[24]==0){
                this.solutionLights[1]="O";
                lightsOnTmp[1]=(lightsOnTmp[1]+1)%2; 
                lightsOnTmp[0]=(lightsOnTmp[0]+1)%2;
                lightsOnTmp[2]=(lightsOnTmp[2]+1)%2;
                lightsOnTmp[6]=(lightsOnTmp[6]+1)%2;
            }
            else if(lightsOnTmp[20]==1&&lightsOnTmp[21]==1&&lightsOnTmp[22]==0&&lightsOnTmp[23]==1&&lightsOnTmp[24]==1){
                this.solutionLights[2]="O";
                lightsOnTmp[2]=(lightsOnTmp[2]+1)%2;
                lightsOnTmp[1]=(lightsOnTmp[1]+1)%2;
                lightsOnTmp[3]=(lightsOnTmp[3]+1)%2;
                lightsOnTmp[7]=(lightsOnTmp[7]+1)%2;
            }  
            else if(lightsOnTmp[20]==1&&lightsOnTmp[21]==0&&lightsOnTmp[22]==1&&lightsOnTmp[23]==1&&lightsOnTmp[24]==0){
                this.solutionLights[4]="O";
                lightsOnTmp[4]=(lightsOnTmp[4]+1)%2;
                lightsOnTmp[3]=(lightsOnTmp[3]+1)%2;
                lightsOnTmp[9]=(lightsOnTmp[9]+1)%2;
            }
            else if(lightsOnTmp[20]==1&&lightsOnTmp[21]==0&&lightsOnTmp[22]==0&&lightsOnTmp[23]==0&&lightsOnTmp[24]==1){
                this.solutionLights[0]="O";
                this.solutionLights[1]="O";
                lightsOnTmp[2]=(lightsOnTmp[2]+1)%2;
                lightsOnTmp[5]=(lightsOnTmp[5]+1)%2;
                lightsOnTmp[6]=(lightsOnTmp[6]+1)%2;
            }
            else if(lightsOnTmp[20]==0&&lightsOnTmp[21]==1&&lightsOnTmp[22]==1&&lightsOnTmp[23]==0&&lightsOnTmp[24]==1){
                this.solutionLights[0]="O";
                lightsOnTmp[0]=(lightsOnTmp[0]+1)%2;
                lightsOnTmp[1]=(lightsOnTmp[1]+1)%2;
                lightsOnTmp[5]=(lightsOnTmp[5]+1)%2;
            }
            else if(lightsOnTmp[20]==0&&lightsOnTmp[21]==1&&lightsOnTmp[22]==0&&lightsOnTmp[23]==1&&lightsOnTmp[24]==0){
                this.solutionLights[0]="O";
                this.solutionLights[3]="O";
                lightsOnTmp[0]=(lightsOnTmp[0]+1)%2;
                lightsOnTmp[1]=(lightsOnTmp[1]+1)%2;
                lightsOnTmp[2]=(lightsOnTmp[2]+1)%2;
                lightsOnTmp[3]=(lightsOnTmp[3]+1)%2;
                lightsOnTmp[4]=(lightsOnTmp[4]+1)%2;
                lightsOnTmp[5]=(lightsOnTmp[5]+1)%2;
                lightsOnTmp[8]=(lightsOnTmp[8]+1)%2;
            }
            else if(lightsOnTmp[20]==0&&lightsOnTmp[21]==0&&lightsOnTmp[22]==1&&lightsOnTmp[23]==1&&lightsOnTmp[24]==1){
                this.solutionLights[3]="O";
                lightsOnTmp[2]=(lightsOnTmp[2]+1)%2;
                lightsOnTmp[3]=(lightsOnTmp[3]+1)%2;
                lightsOnTmp[4]=(lightsOnTmp[4]+1)%2;
                lightsOnTmp[8]=(lightsOnTmp[8]+1)%2;
            }
            else{
                this.showSolution();
                return;
            }

            for(var i=0; i<25; i++){

                if(i>4){
    
                    if(lightsOnTmp[i-5] == 1){
    
                        lightsOnTmp[i]=(lightsOnTmp[i]+1)%2;
                        if(i!=0&&i!=1&&i!=2&&i!=3&&i!=4) lightsOnTmp[i-5]=(lightsOnTmp[i-5]+1)%2;
                        if(i!=20&&i!=21&&i!=22&&i!=23&&i!=24)lightsOnTmp[i+5]=(lightsOnTmp[i+5]+1)%2;
                        if(i!=0&&i!=5&&i!=10&&i!=15&&i!=20) lightsOnTmp[i-1]=(lightsOnTmp[i-1]+1)%2;
                        if(i!=4&&i!=9&&i!=14&&i!=19&&i!=24)lightsOnTmp[i+1]=(lightsOnTmp[i+1]+1)%2;
    
                        if(this.solutionLights[i]=="") {
                            this.solutionLights[i]="O";
                        }
                        else{
                            this.solutionLights[i]="";
                        }
                    }
                }
            }
            this.showSolution();
    }

    showSolution(){
        for(var i=0; i<25; i++){
            this.lights.item(i).style.borderWidth = "0px";
            this.lights.item(i).style.borderColor = "transparent";
        }
        for(var i=0; i<25; i++){
            if(this.solutionLights[i]=="O"){
                this.lights.item(i).style.borderColor = "green";
                this.lights.item(i).style.borderWidth = "2px";
            }
        }
    }

    newGame(){

        var randomIndex = undefined;

        for(var i=0; i<15; i++){
            randomIndex = Math.floor(Math.random() * 24);
            this.pressLight(randomIndex);
        }
        for(var i=0; i<25; i++){
            this.lights.item(i).style.borderWidth = "0px";
            this.solutionLights[i]="";
        }
        this.moveNumber = 0;
        this.updateDisplay();
    }

    isWinner(){
        var allOff=true;
        for(var i=0; i<25; i++){
            if(this.isLightOn[i]==true){
            allOff = false;
            }
        }
        if(allOff){
            alert(`Congratulations! You won in ${this.moveNumber} moves.`)
            this.newGame();
        }
    }


    updateDisplay(){
        this.movesNumberText.innerText = "Number of moves: "+this.moveNumber.toString();
    }
}

const newGameButton = document.querySelector('[data-new-game]')
const solveButton = document.getElementById("solveButton")
const movesNumberText = document.querySelector('[data-moves]')
const lights = document.querySelectorAll('[data-light]')

const lightsOut = new LightsOut(lights, movesNumberText)

lights.forEach(button=>{
    button.addEventListener('click',()=>{lightsOut.pressLight(button.id)    
        lightsOut.moveNumber+=1;
        lightsOut.updateDisplay();
        lightsOut.isWinner();
    })
})

newGameButton.addEventListener('click',button=>{
    lightsOut.newGame();
})

solveButton.addEventListener('click',button=>{
    lightsOut.solve();
})