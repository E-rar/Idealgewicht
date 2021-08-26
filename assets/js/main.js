function rechnen(){
let größe=document.getElementById("größe").value;
let alter=document.getElementById("alter").value;
let idealgewicht=0;
if(größe==null||alter==null||document.getElementById("schmal").checked==false&&document.getElementById("breit").checked==false){//wenn eine angabe fehlt kommt es zur fehlermeldung
    alert("es fehlen Angaben !");
}
else{ //ansonsten führe die funktion aus 


if(document.getElementById("schmal").checked){ //für schmal
    idealgewicht=((größe-100)+(alter/10)*0.9*0.9).toFixed(1);
}
else{ //für breit
    idealgewicht=((größe-100)+(alter/10)*0.9*1.1).toFixed(1);
}

function printGewicht(){
    document.getElementById("result").innerHTML="Dein Idealgewicht ist "+idealgewicht+ " kg .";
}
printGewicht();
console.log(idealgewicht);
}
}

