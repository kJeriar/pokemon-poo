function Pokemon(nombre, color, poderAtaque){
this.nombre=nombre;
this.color=color;

this.nivelAmistad=0;
this.vida=100;
this.poderAtaque=poderAtaque;


this.mostrarPokemon=function(){
  return ("hola soy "+ this.nombre+" y soy de color "+this.color);
}

this.aumentarAmistad=function (valor){
  this.nivelAmistad=this.nivelAmistad+valor
}
this.atacar=function(pokemon){
  pokemon.vida=pokemon.vida-this.poderAtaque
}


var Pikachu= new Pokemon("Pikachu", "Amarillo", 100)
var Charmander=new Pokemon("Charmander", "Rojo", 20)
var Poki=new Pokemon("Poki", "Verde", 60)
var Rulo=new Pokemon("Rulo", "rosado", 70)


function peleaPokemon(){

var pokemon1=document.getElementById("poke1").value;
var pokemon2=document.getElementById("poke2").value;

var peleador1=new Pokemon(pokemon1,"verde",30);
var peleador2=new Pokemon(pokemon2,"naranja",90);

var peleadores=document.getElementById("lucha");
if (pokemon1==pokemon2) {
	alert("selecciona otro pokemon, ese no puede jugar");
}else{
	peleador1.atacar(peleador2);
	var resultadoPelea= (pokemon1+"ataca a "+pokemon2+ " y "+pokemon2+" tiene uan vida de " + peleador2.vida);
	peleadores.innerHTML=resultadoPelea
}

}



//Pikachu.atacar(Charmander);
//console.log(Charmander.vida);