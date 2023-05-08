let tempgamemodes = [];
let temptask = [];
let tempquestion = [];
let game = [[``,[]],
			[``,[]],
			[``,[]],
            [``,[]],
            [``,[]]]
let settingtask = [];
const fs = require("fs");

function readFiles(){
    fs.readFile("jss/settings.txt", "utf8",function (error, data){
        if (error) throw error;
        tempgamemodes = data.split(`]`)
        for(i=0;i<tempgamemodes.length;i++){
            temptask = tempgamemodes[i].split(`|`)
            game[i][0] = temptask[0]
            temptask.shift()
            for (j=0;j<temptask.length;j++){
                game[i][j+1] = temptask[j].split(`~`)

            }
        }
      })
}
readFiles()

function writeFiles(){

}

function SettingsSwitch(a,b,c){
    switch(a){
        case `Mode`:
        c = document.getElementById(`setoptn`).value
        if (c==undefined) {
            break
        }
        switch(b){
            case `add`:
                addGamemode()
                GoTo(`Mode`)
            break

            case `edit`:
                editGamemode()
                GoTo(`Mode`)
            break

            case `delete`:
                deleteGamemode()
            break
        }
        break
        case `Question`:
        c = document.getElementById(`queoptn`).value
        if (c==undefined) {
            break
        }
        switch(b){
            case `add`:
                addQuestion()
                GoTo(`Question`)
            break

            case `edit`:
                editQuestion()
                GoTo(`Question`)
            break

            case `delete`:
                deleteQuestion()
            break
        }
        break
    }
}

function writeModes(b){
    for(i=1;i<=5;i++){
        b = game[i-1][0]
        if (b != ``){
            document.getElementById(`setoptn${i}`).value = b
            document.getElementById(`setoptn${i}`).innerHTML = b
        }else{
            document.getElementById(`setoptn${i}`).value = ``
            document.getElementById(`setoptn${i}`).innerHTML = ``
        }
    }
    for(i=1;i<=5;i++){
        if (document.getElementById(`setoptn${i}`).value){
            document.getElementById(`setoptn${i}`).style.display = `block`
        }else{
            document.getElementById(`setoptn${i}`).style.display = `none`
        }
    }
}

function writeQuestions(a){
    for(i=0;i<5;i++){
                if (document.getElementById(`setoptn`).value == game[i][0]){
                    a = i
                    break
                }
                else{
                    a = 0
                }
    }
    for(i=1;i<=13;i++){
        if (game[a][i] != undefined && game[a][i][0]!= `` && game[a][i][0]!= undefined){
            document.getElementById(`queoptn${i}`).value = game[a][i][0]
            document.getElementById(`queoptn${i}`).innerHTML = game[a][i][0]
        }else{
            document.getElementById(`queoptn${i}`).value = ``
            document.getElementById(`queoptn${i}`).innerHTML = ``
        }
    }
    for(i=1;i<=13;i++){
        if (document.getElementById(`queoptn${i}`).value){
            document.getElementById(`queoptn${i}`).style.display = `block`;
        }else{
            document.getElementById(`queoptn${i}`).style.display = `none`;
        }
    }
}   

function clearQuestions(){
    for(i=1;i<=13;i++){
        document.getElementById(`queoptn${i}`).style.display = `none`
        document.getElementById(`queoptn${i}`).value = ``
        document.getElementById(`queoptn${i}`).innerHTML = ``
    }
}

function addGamemode(a){
    for(i=0;i<5;i++){
        if (document.getElementById(`setoptn${i+1}`).value == ``){
            GoTo(`Mode`)
            settingtask = [`add`, i+1]
            break
        }
    }
}

function editGamemode(){
    settingtask = [`Change`]
    GoTo(`Mode`)
}

function deleteGamemode(){
    for(i=0;i<5;i++){
        if (document.getElementById(`setoptn`).value == game[i][0]){
            game.splice(i, 1);
            game[4] = [``,[]];
            writeModes()
            clearQuestions()
            console.log(game)
        }
    }
}

function SaveMode(){
    switch(settingtask[0]){
        case `add`:
             document.getElementById(`setoptn${settingtask[1]+1}`).value = document.getElementById(`ModeInp`).value 
             game[settingtask[1]+1][0] = document.getElementById(`ModeInp`).value
             GoTo(`Settings`)
        break

        case `Change`:
             for(i=0;i<5;i++){
                if (document.getElementById(`setoptn`).value == game[i][0]) {
                    game[i][0] = document.getElementById(`ModeInp`).value
                    document.getElementById(`setoptn${i}`).value = document.getElementById(`ModeInp`).value 
                }
             }

             GoTo(`Settings`)
        break
    }
}

function addQuestion(a){ 
    for(i=0;i<5;i++){
        if (document.getElementById(`setoptn`).value == game[i][0]){
            a = i
            break
        }
        else{
            a = 0
        }
    }
    if (game[a].length< 14) {
    GoTo(`Question`)
    settingtask = [`add`,a]           
    }
}

function editQuestion(){
    GoTo(`Question`)
    settingtask = [`change`]
    
}

function SaveQuest(a){
    switch(settingtask[0]){
        case `add`:
            for(j=1;j<5;j++){
                if (document.getElementById(`settingradio${j}`).checked) {
                for(i=1;i<=13;i++){
                    if (document.getElementById(`queoptn${i+1}`).value == ``){
                        game[a][i+1]=[`${document.getElementById(`questiontext`).value}`,
                                    `${document.getElementById(`settingsAns1`).value}`,
                                    `${document.getElementById(`settingsAns2`).value}`,
                                    `${document.getElementById(`settingsAns3`).value}`,
                                    `${document.getElementById(`settingsAns4`).value}`,`${j}`]
                    }
                }  
                }
            }
            GoTo(`Settings`)
            writeQuestions()
        break

        case `change`:
            for(i=0;i<5;i++){
                if (document.getElementById(`setoptn`).value == game[i][0]){
                    a = i
                    break
                }
                else{
                    a = 0
                }
            }
            for(j=1;j<5;j++){
                if (document.getElementById(`settingradio${j}`).checked) {
                for(i=1;i<=13;i++){
                    if (document.getElementById(`queoptn`).value == game[a][i][0]){
                        game[a][i]=[`${document.getElementById(`questiontext`).value}`,
                                    `${document.getElementById(`settingsAns1`).value}`,
                                    `${document.getElementById(`settingsAns2`).value}`,
                                    `${document.getElementById(`settingsAns3`).value}`,
                                    `${document.getElementById(`settingsAns4`).value}`,`${j}`]
                    }
                }  
                }
            }
            GoTo(`Settings`)
            writeQuestions()
            
        break
    }
}

function deleteQuestion(a){
    for (i=0;i<5;i++) {
        if (document.getElementById(`setoptn`).value == game[i][0]) {
            a=i
            for(i=1;i<=13;i++){
                if (game[a][i][0]==document.getElementById(`queoptn`).value) {
                     game[a].splice(i, 1);
                     writeQuestions()
                     break
                }
            }
        }
    }
}
console.log(game)