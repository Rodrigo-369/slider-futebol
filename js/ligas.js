//let bandeiras = ["brasil.jpg", "espanha.jpg", "inglaterra.jpg", "italia.jpg"];

function cl(v){
    console.log(v);
}

let paisClubes = { Brasil: ['Corinthians', 'Atletico-Mineiro', 'Flamengo', 'Palmeiras'],
Espanha: ['Atletico-Madrid','Barcelona', 'Real-Madrid', 'Valencia'],
Inglaterra: ['Chelsea', 'Liverpool', 'Manchester-City', 'Manchester-United'],
Italia: ['Inter-Milao', 'Juventus', 'Milan', 'Napoli']};






let flag = document.getElementById('pais');

let flagAvancar = document.getElementById("btn-flag-avancar");
let flagRecuar = document.getElementById("btn-flag-recuar");

let clube = document.getElementById("clube");

let keyFlags = Object.keys(paisClubes);




function Brasil(){
    clubeAvancar.onclick = function() {
        clube.style.backgroundImage = `url(../img/${paisClubes.Brasil[contClube].concat(".png")})`;
        
        contClube++;
        
        if(contClube === keyFlags.length){
            return contClube = 0;
        }
    }

    clubeRecuar.onclick = function() {        
        contClube--;
        
        if(contClube < 0){
            return contClube = 4;
        }

        clube.style.backgroundImage = `url(../img/${paisClubes.Brasil[contClube].concat(".png")})`;
    }
    
    return clube.style.backgroundImage = `url(../img/${paisClubes.Brasil[0].concat('.png')}`;
}




function Espanha(){
    clubeAvancar.onclick = function() {
        clube.style.backgroundImage = `url(../img/${paisClubes.Espanha[contClube].concat(".png")})`;
        
        contClube++;
        
        if(contClube === keyFlags.length){
            return contClube = 0;
        }
    }

    clubeRecuar.onclick = function() {        
        contClube--;
        
        if(contClube < 0){
            return contClube = 4;
        }

        clube.style.backgroundImage = `url(../img/${paisClubes.Espanha[contClube].concat(".png")})`;
    }
    
    return clube.style.backgroundImage = `url(../img/${paisClubes.Espanha[0].concat('.png')}`;
}




function Inglaterra(){
    clubeAvancar.onclick = function() {
        clube.style.backgroundImage = `url(../img/${paisClubes.Inglaterra[contClube].concat(".png")})`;
        
        contClube++;
        
        if(contClube === keyFlags.length){
            return contClube = 0;
        }
    }

    clubeRecuar.onclick = function() {        
        contClube--;
        
        if(contClube < 0){
            return contClube = 4;
        }

        clube.style.backgroundImage = `url(../img/${paisClubes.Inglaterra[contClube].concat(".png")})`;
    }
    
    
    return clube.style.backgroundImage = `url(../img/${paisClubes.Inglaterra[0].concat('.png')}`;
}




function Italia(){
    clubeAvancar.onclick = function() {
        clube.style.backgroundImage = `url(../img/${paisClubes.Italia[contClube].concat(".png")})`;
        
        contClube++;
        
        if(contClube === keyFlags.length){
            return contClube = 0;
        }
    }

    clubeRecuar.onclick = function() {        
        contClube--;
        
        if(contClube < 0){
            return contClube = 4;
        }

        clube.style.backgroundImage = `url(../img/${paisClubes.Italia[contClube].concat(".png")})`;
    }
    
    return clube.style.backgroundImage = `url(../img/${paisClubes.Italia[0].concat('.png')}`;
}




let conts = 0;
let contClube = 0;

flagAvancar.onclick = function(){
    flag.style.backgroundImage = `url(../img/${keyFlags[conts].concat('.jpg')})`;
    
    if(keyFlags[conts] === "Brasil"){
        Brasil();
    }
    
    if(keyFlags[conts] === "Espanha"){
        Espanha();
    }

    if(keyFlags[conts] === "Inglaterra"){
        Inglaterra();
    }
    if(keyFlags[conts] === "Italia"){
        Italia();
    }
    
    conts++;
    
    if(conts === keyFlags.length){
        return conts = 0;
    }     
    
}


flagRecuar.onclick = function(){
    conts--;

    if(conts < 0){
        //flag.style.backgroundImage = `url(../img/${keyFlags[conts].concat('.jpg')})`;
        return conts = 4;
    } 

    cl(conts);
    
    flag.style.backgroundImage = `url(../img/${keyFlags[conts].concat('.jpg')})`;
    
    if(keyFlags[conts] === "Brasil"){
        Brasil();
    }
    
    if(keyFlags[conts] === "Espanha"){
        Espanha();
    }

    if(keyFlags[conts] === "Inglaterra"){
        Inglaterra();
    }
    if(keyFlags[conts] === "Italia"){
        Italia();
    }
    
    
    
}


let clubeAvancar = document.getElementById('btn-clube-avancar');
let clubeRecuar = document.getElementById('btn-clube-recuar');









