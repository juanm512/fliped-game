let startButton = document.getElementById('startButton');
let buttonOriginal = startButton.innerHTML;


let textoCantidadCartas = document.getElementById('textoCantidadCartas');
let aumentarCartasButton = document.getElementById('aumentarCartasButton')
let disminuirCartasButton = document.getElementById('disminuirCartasButton')

//cantidades de cartas y tipos de iconos
let cantidades = [6,8,12,16,18,20,24];
let list6 = ["database", "server", "database", "server", "upload", "upload"];
let list8 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard"];
let list12 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard","mouse","mouse","microchip","microchip"];
let list16 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard","mouse","mouse","microchip","microchip","hdd","hdd","download","download"];
let list18 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard","mouse","mouse","microchip","microchip","hdd","hdd","download","download","laptop","laptop"];
let list20 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard","mouse","mouse","microchip","microchip","hdd","hdd","download","download","laptop","laptop","mobile","mobile"];
let list24 = ["database", "server", "database", "server", "upload", "upload","keyboard","keyboard","mouse","mouse","microchip","microchip","hdd","hdd","download","download","laptop","laptop","mobile","mobile","satellite","satellite","plug","plug"];

///////////
let cantDadasVuelta = 0;
let gameStarted=false;
let aciertos = 0;
///////////




actualizarCantTarjetas(cantidades[0]);
crearLiCards(cantidades[0]);

//a�ado funcionalidad a boton de start game, a hacer click llma a la fucion que arranca todo
startButton.addEventListener("click", async ()=>{
	if(gameStarted){
		gameOver2()
	}else{
	empezarJuego()
	start();
	}
}) ;

var isMarch = false; 
var acumularTime = 0; 
function start () {
         if (isMarch == false) { 
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () { 
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime); 
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-18;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;} 
         if (mm < 10) {mm = "0"+mm;}
         startButton.innerHTML = mm+" : "+ss+" : "+cc;
         }

function stop () { 
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }
		 
         }

















//cambio el titulo del mes y animation
//a la vez genero los nuevos dias que se necesitan
aumentarCartasButton.addEventListener('click', () =>{
	let cantActual = cantidades.indexOf( parseInt(textoCantidadCartas.innerText) );
	if(cantActual == 6) { 
		cantActual= -1;
	}
	actualizarCantTarjetas(cantidades[cantActual+1])
	//creo los li y borro los anteriores
	crearLiCards(cantidades[cantActual+1]);
});
disminuirCartasButton.addEventListener('click', () =>{
	let cantActual = cantidades.indexOf( parseInt(textoCantidadCartas.innerText) );
	if(cantActual == 0) { 
		cantActual= 7;
	}
	actualizarCantTarjetas(cantidades[cantActual-1])
	//creo los li y borro los anteriores
	crearLiCards(cantidades[cantActual-1]);
});


//creo la lista de dias para cada mes
//FALTA HACER QUE TENGA CORRELACION A CADA MES, SI TIENE 31 O 30 O 28/29 DIAS
function crearLiCards(cantidad) {
	let cantPares = cantidad/2 ; //cant = 6 >> pares = 3
	let iconos;
	cantDadasVuelta = 0;
	//establezco segun la cantidad de cartas, la cantidad por fila
	if(cantidad==6){
		espacio=4;
		iconos = list6.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==8){
		espacio=3;
		iconos = list8.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==12){
		espacio=3;
		iconos = list12.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==16){
		espacio=3;
		iconos = list16.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==18){
		espacio=2;
		iconos = list18.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==20){
		espacio=3;
		iconos = list20.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}else if(cantidad==24){
		espacio=2;
		iconos = list24.sort(() => Math.random() - 0.5);
		console.log(iconos)
	}
	
	//ramdom list, para que sea aleatorio la posicion de los iconos
	//let iconos = list.sort(() => Math.random() - 0.5);
	//console.log(iconos)
	
	
	//borro las tarjetas anteriores
	while (document.getElementById(`contenedorUlCartas`).firstChild) {
		document.getElementById(`contenedorUlCartas`).removeChild(document.getElementById(`contenedorUlCartas`).firstChild);
	}
	for(let i=0;i<cantidad;i++){
		let li = document.createElement('li');
		li.classList.add(`w3-col`,`s${espacio}`,`m${espacio}`,`l${espacio}`);
		li.innerHTML = `
						<div id="scene-cards" class="scene scene--card">
							<div id="card-cartas-${i+1}" class="card w3-col s12 m12 l12 w3-hover-shadow scale-up-center" onclick="flip('card-cartas-${i+1}')">
								<div id="front-face-cartas-${i+1}" class="card__face1 card__face--front_nohave">
									<p class="w3-col s12 m12 l12 w3-xxlarge w3-center">${i+1}</p>
								</div>
								<div id="back-face-cartas" class="card__face2 card__face--back">
									<p id="card-cartas-${i+1}-icono" class="w3-col s12 m12 l12 w3-xxlarge w3-center w3-row" style="margin-top:20px;"><i class="fas fa-${iconos[i]} w3-margin-0"></i></p>
								</div>
							</div>
						</div>
						`
		li.setAttribute("id",`li-cartas-${i+1}`);
		li.setAttribute("style",`padding:2px;margin:0;`);
		document.getElementById(`contenedorUlCartas`).appendChild(li);
	}
}

///////
let figura1;
let figura2;
//funcion a la que llaman las tarjetas de los dias
function flip(a){
	if(gameStarted){
		
		document.getElementById(`${a}`).classList.toggle('is-flipped');
		cantDadasVuelta += 1;
		console.log("	etapa 1",cantDadasVuelta);
		if(cantDadasVuelta==1){
			figura1=a;
			console.log("	etapa 2.0- dadasVuelta =1");
		}else if(cantDadasVuelta == 2){
			console.log("	etapa 2.1- dadasVuelta =2");
			if(document.getElementById(`${figura1}-icono`).innerHTML==document.getElementById(`${a}-icono`).innerHTML){
				console.log("3.0 COINCIDEN, POR LO TANTO REMUEVO EL ATRIBUTO ONCLICK");
				aciertos+=1;
				document.getElementById(`${figura1}`).removeAttribute("onclick");
				document.getElementById(`${a}`).removeAttribute("onclick");
				cantDadasVuelta=0;
			}else{
				console.log("3.1 SIN COINCIDENCIA");
				setTimeout(function(){ document.getElementById(`${figura1}`).classList.toggle('is-flipped'); }, 500);
				setTimeout(function(){ document.getElementById(`${a}`).classList.toggle('is-flipped'); }, 500);
				cantDadasVuelta=0;
			}
		}
		if(aciertos==parseInt(textoCantidadCartas.innerText)/2){
			console.log("JUEGO TERMINADO");
			gameOver();
		}
	}else{
		document.getElementById(`${a}`).classList.toggle('is-flipped');
	}
}


//Actualizo mes del titulo de la pagina
function actualizarCantTarjetas(cantidad) {
	textoCantidadCartas.innerText = cantidad;
}

//Comienza el juego, crea las cartas llamando a la funcion crearLiCards
function empezarJuego() {
	let cantActual = cantidades.indexOf( parseInt(textoCantidadCartas.innerText) );
	
	startButton.classList.add('w3-pale-green');
	startButton.classList.remove('w3-hover-pale-green');
	startButton.classList.add('w3-hover-pale-red');


	//creo los li y borro los anteriores
	crearLiCards(cantidades[cantActual]);
	cantDadasVuelta = 0;
	gameStarted=true;

	console.log("\\\\\\\\\\\\\\\\\\GAME STARTED///////////////////////");
}
function gameOver(){
	gameStarted=false;
	cantDadasVuelta = 0;
	aciertos=0;
	console.log("\\\\\\\\\\\\\\\\\\GAME FINISHED///////////////////////");
	setTimeout(function(){ document.getElementById("gameCongratulations").classList.remove("w3-hide"); }, 1000);
	document.getElementById("textoCongratulations").innerHTML= 'Felicitaciones has terminado el juego<br>' + 'Tardaste ' + startButton.innerHTML;
	setTimeout(function(){ document.getElementById("gameCongratulations").classList.add("w3-hide"); }, 6000);
	stop ();
	startButton.innerHTML =buttonOriginal;
}

//cuando se finaliza de brutamente
function gameOver2(){
	gameStarted=false;
	cantDadasVuelta = 0;
	aciertos=0;
	console.log("\\\\\\\\\\\\\\\\\\GAME FINISHED///////////////////////");
	stop();
	startButton.innerHTML =buttonOriginal;
}


//funcion para haccer mayuscula la primer letra de una palabra
function capitalize(word) {
	return word[0].toUpperCase() + word.slice(1);
  }
  
//funcion para haccer minuscula la primer letra de una palabra
function descapitalize(word) {
	return word[0].toLowerCase() + word.slice(1);
  }
