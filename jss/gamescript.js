let gamemode;
let numberofquestions;
let sum =  [0,`100 $`,`500 $`,`1 000 $`,`2 500 $`,`5 000 $`,`10 000 $`,
			`25 000 $`,`50 000 $`,`100 000 $`,`250 000 $`,`500 000 $`,`750 000 $`, `1 000 000 $`]
function questionmaker(){	
	for(i=1;i<5;i++){
		document.getElementById(`gameanswrbtn${i}`).innerHTML = game[gamemode][numberofquestions][i]
	}
	document.getElementById(`gamequestion`).innerHTML = game[gamemode][numberofquestions][0]
	sumdiv = document.getElementById(`goldsumm`)
	sumdiv.parentNode.removeChild(sumdiv);
	document.getElementById(`moneyonmymind`).innerHTML = `<div class="gold" id="goldsumm">
															<p>${sum[numberofquestions]}</p>
														  </div>`
		document.getElementById(`zal`).style.display = `none`
		document.getElementById(`friend`).style.display = `none`
		document.getElementById(`zal`).classList.add('opacityset');
		document.getElementById(`friend`).classList.add('opacityset');
	unblockbutton()
}

function Answer(a,b){
	b = game[gamemode][numberofquestions][5]
	if (b==a) {
		document.getElementById(`gameanswrbtn${a}`).classList.add('answeargreen');
		document.getElementById(`gameanswrbtn${a}`).classList.remove('answear');
		blockbutton()
		document.getElementById(`figcaption${game[gamemode][numberofquestions][5]}`).classList.remove('green');
		numberofquestions++
		if (numberofquestions == 14) {
			document.getElementById(`defeatsum`).innerHTML = sum[numberofquestions-1]
			let win = setTimeout(winansw,2000)
		}else{
			let blckbtn = setTimeout(questionmaker,2000)
		}
	}else{
		document.getElementById(`gameanswrbtn${a}`).classList.add('answearred');
		document.getElementById(`gameanswrbtn${b}`).classList.add('answeargreen');
		document.getElementById(`gameanswrbtn${a}`).classList.remove('answear');
		document.getElementById(`gameanswrbtn${b}`).classList.remove('answear');
		blockbutton()
		document.getElementById(`defeatsum`).innerHTML = sum[numberofquestions]
		let defeat = setTimeout(defeatansw,2000)
	}
}

function defeatansw(){
	GoTo(`Defeat`)
}

function winansw(){
	GoTo(`Win`)
}
function blockbutton(){
	for(i=1;i<5;i++){
		document.getElementById(`gameanswrbtn${i}`).disabled = true
	}
}

function unblockbutton(a){
	for(i=1;i<5;i++){
		document.getElementById(`gameanswrbtn${i}`).disabled = false
		document.getElementById(`gameanswrbtn${i}`).classList.add('answear');
		document.getElementById(`gameanswrbtn${i}`).classList.remove('answeargreen');
		document.getElementById(`gameanswrbtn${i}`).classList.remove('answearred');
		document.getElementById(`gameanswrbtn${i}`).classList.remove('opacityset');
	}
}

function AnswerHelp(a,b){
	switch(a){
		case `5050`:
			fiftyfifty()
			b = document.getElementById(`fifty50`)
			b.classList.add('opacityhalf');
			b.disabled = true
		break;

		case `poll`:
			poll()
			b = document.getElementById(`poll`)
			b.classList.add('opacityhalf');
			b.disabled = true
		break;

		case `call`:
			call()
			b = document.getElementById(`call`)
			b.classList.add('opacityhalf');
			b.disabled = true
		break;
	}
}

function RestartHelp(a,b,c){
	a=document.getElementById(`fifty50`)
	a.classList.remove('opacityhalf');
	a.disabled = false

	b = document.getElementById(`poll`)
	b.classList.remove('opacityhalf');
	b.disabled = false

	c = document.getElementById(`call`)
	c.classList.remove('opacityhalf');
	c.disabled = false
}

function fiftyfifty(a,b,c){
	a = game[gamemode][numberofquestions][5]
	for(i=0;i<2;i++){
		b = Math.floor((Math.random()*4)+1)
		if ((a!=b)&&(c!=b)) {
			document.getElementById(`gameanswrbtn${b}`).classList.add('opacityset');
			document.getElementById(`gameanswrbtn${b}`).disabled = true
			c=b
		}else{
			i--
		}
	}
}

function poll(a,b,c,d){
	a=0
	b=0
	c=0
	d=0
	document.getElementById(`zal`).style.display = `block`
	document.getElementById(`friend`).style.display = `none`
	document.getElementById(`zal`).classList.remove('opacityset');
	for(i=1;i<=4;i++){
		if (i==game[gamemode][numberofquestions][5]) {
			a=game[gamemode][numberofquestions][5]
			document.getElementById(`helppoll${a}`).innerHTML = `<div class="result real">50%</div>`
			document.getElementById(`figcaption${a}`).classList.add('green')
			if(!b){
				b = Math.floor(Math.random()*4)+1
				while(b==a){
					b = Math.floor(Math.random()*4)+1
				}
				document.getElementById(`helppoll${b}`).innerHTML = `<div class="result a">30%</div>`
			}
			if(!c){
				c = Math.floor(Math.random()*4)+1
				while(c==a||c==b){
					c = Math.floor(Math.random()*4)+1
				}
				document.getElementById(`helppoll${c}`).innerHTML = `<div class="result b">10%</div>`
			}
			if(!d){
				d = Math.floor(Math.random()*4)+1
				while(d==a||d==b||d==c){
					d = Math.floor(Math.random()*4)+1
				}
				document.getElementById(`helppoll${d}`).innerHTML = `<div class="result c">10%</div>`
			}
		}
		}

}

function call(a,b,c,d,e){
	document.getElementById(`friend`).style.display = `block`
	document.getElementById(`zal`).style.display = `none`
	document.getElementById(`friend`).classList.remove('opacityset');
	a = game[gamemode][numberofquestions][5]
	for(i=1;i<=4;i++){
		if (i== +a) {
			switch(a){
				case `1`:
				c = game[gamemode][numberofquestions][1]
				break
				case `2`:
				c = game[gamemode][numberofquestions][2]
				break
				case `3`:
				c = game[gamemode][numberofquestions][3]
				break
				case `4`:
				c = game[gamemode][numberofquestions][4]
				break
			}
		}
	}
		b = Math.floor(Math.random()*2)
		if (b==0) {
				d=1
			}else{ 
				d=0
			}
			e=game[gamemode][numberofquestions][Math.floor(Math.random()*4)+1]
			while(e==c){
				e=game[gamemode][numberofquestions][Math.floor(Math.random()*4)+1]
			}
			document.getElementById(`answer${b}`).innerHTML = c
			document.getElementById(`answer${d}`).innerHTML = e
}