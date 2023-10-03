
let url = 'https://valorant-api.com/v1/agents';

const button = document.getElementById("botonInfo");

button.addEventListener("click", async function(){

try{

const responseAPI = await fetch(url, {method: 'GET'});

if(!responseAPI.ok){
  throw new Error("Error - No se pudo abrir API.");
}

const dataJSON = await responseAPI.json();

let indice = Math.floor(Math.random() * 22) + 1;

let imagenFondo = dataJSON.data[indice].background;
let fondo = document.getElementById("fondo");
fondo.style.backgroundImage = 'url(' + imagenFondo + ')';

document.getElementById("imagen").setAttribute("src", dataJSON.data[indice].fullPortraitV2);

document.getElementById("displayName").innerHTML = dataJSON.data[indice].displayName;

document.getElementById("imgRol").setAttribute("src", dataJSON.data[indice].role.displayIcon)
document.getElementById("RoleName").innerHTML = dataJSON.data[indice].role.displayName;

document.getElementById("description").innerHTML = dataJSON.data[indice].description;

document.getElementById("abilite1").innerHTML = dataJSON.data[indice].abilities[0].displayName;
document.getElementById("abilite2").innerHTML = dataJSON.data[indice].abilities[1].displayName;
document.getElementById("abilite3").innerHTML = dataJSON.data[indice].abilities[2].displayName;
document.getElementById("abilite4").innerHTML = dataJSON.data[indice].abilities[3].displayName;
document.getElementById("imgAbiliti1").setAttribute("src", dataJSON.data[indice].abilities[0].displayIcon);
document.getElementById("imgAbiliti2").setAttribute("src", dataJSON.data[indice].abilities[1].displayIcon);
document.getElementById("imgAbiliti3").setAttribute("src", dataJSON.data[indice].abilities[2].displayIcon);
document.getElementById("imgAbiliti4").setAttribute("src", dataJSON.data[indice].abilities[3].displayIcon);
document.getElementById("descriptionAbilitie1").innerHTML = dataJSON.data[indice].abilities[0].description;
document.getElementById("descriptionAbilitie2").innerHTML = dataJSON.data[indice].abilities[1].description;
document.getElementById("descriptionAbilitie3").innerHTML = dataJSON.data[indice].abilities[2].description;
document.getElementById("descriptionAbilitie4").innerHTML = dataJSON.data[indice].abilities[3].description;

}catch(error){
  console.log(error);
}

});
