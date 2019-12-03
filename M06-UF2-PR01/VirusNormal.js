class VirusNormal extends Virus{
    constructor(nombre, medicina){
        super(nombre, medicina);
        this.organosPosibles = ["Cerebro", "Corazón", "Estómago", "Riñón"];
        this.organosInfectados = [];
    }

    infectar() {
        console.log("infectar:");
            let x = Math.floor(Math.random() * organos.length);
            console.log(x);
            organos[x].estadoActual = "infectado";
            console.log(organos);
    }

    atacar() {
        let contador = 0;
        for (let i = 0; i < organos.length; i++) {
            if (organos[i].estadoActual == "infectado") {
                contador++;
                console.log("contador " + contador);
            }
        }
        let x = Math.floor(Math.random() * contador);
        if (organos[x].estadoActual == "infectado") {
            organos[x].estadoActual = "grave";
        } else if (organos[x].estadoActual == "grave") {
            organos[x].estadoActual == "extirpado";
        } else {

        }
        console.log("ATACAR:");
        console.log(organos);
    }

    curar() {
        //TODO
    }
    
    toString() {
        //TODO
    }
}
const virus = [
    
];

document.getElementById('submit').addEventListener('click',()=>{
    let radios = document.getElementsByName('med');
    let radioSelected = '';
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked){
            radioSelected = document.getElementById('med' + i);
            //console.log(radioSelected);
        }
    }
    if (virus.length < 3) {
        Math.floor
        virus.push(new VirusNormal(document.getElementById('name').value, radioSelected.id, ));
    } else {
        alert("Nomes es poden crear 3 virus");
    }
    console.log(virus);
    //virus[0].infectar();
}); 