class VirusNormal extends Virus{
    constructor(nombre, medicina){
        super(nombre, medicina);
        this.organosPosibles = ["Cerebro", "Corazón", "Estómago", "Riñón"];
        this.organosInfectados = [];
    }
    infectar() {
        var x = Math.floor((Math.random() * 4));
        if (!this.organosInfectados.includes(this.organosPosibles[x])) {
            this.organosInfectados.push(this.organosPosibles[x]);
            for (let i = 0; i < virusArray.length; i++) {
                for (let j = 0; j < virusArray[i].organosInfectados.length; j++) {
                    if (!virusArray[i].organosInfectados.includes(this.organosPosibles[j])) {
                        virusArray[i].organosInfectados.push(this.organosPosibles[j]);
                    }
                }
            }
        }
        if (organos[x].estadoActual == 'sano') {
            organos[x].estadoActual = 'infectado';
        } else if (organos[x].estadoActual == 'infectado' ) {
            organos[x].estadoActual = 'grave';
        } else {
            organos[x].estadoActual = 'extirpado';
        }
    }
    atacar() {
        var x = Math.floor((Math.random() * this.organosInfectados.length));
        for (let i = 0; i < organos.length; i++) {
            if (organos[i].nombre == this.organosInfectados[x]) {
                if (organos[i].estadoActual == 'infectado') {
                    organos[i].estadoActual = 'grave';
                } else if (organos[i].estadoActual == 'grave') {
                    organos[i].estadoActual = 'extirpado'
                }
            }
        }
    }
    curar() {
        
    }
    toString() {
        let display = this.nombre + ' - ' + this.medicina;
        document.getElementById('displayVirus').innerHTML += display + '\n';
    }
}
const virusArray = [];
document.getElementById('crearVirus').addEventListener('click',()=>{
    if (document.getElementById('virusNormal').checked) {
        let radios = document.getElementsByName('med');
        let radioSelected = '';
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked){
                radioSelected = document.getElementById('med' + i);
            }
        }
        if (virusArray.length < 3) {
            virusArray.push(new VirusNormal(document.getElementById('virusName').value, radioSelected.id, ));
        } else {
            document.getElementById('displayVirus').innerHTML = 'Només es poden crear 3 virus';
        }
    } else if (document.getElementById('virusVacuna').checked) {
        let radios = document.getElementsByName('med');
        let radioSelected = '';
        for (let i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked){
                radioSelected = document.getElementById('med' + i);
            }
        }
        if (virusArray.length < 3) {
            const virus = new VirusNormal(document.getElementById('virusName').value, radioSelectedm, );
            virusArray.push(new VirusVacuna(document.getElementById('virusName').value, radioSelected.id, virus.organosPosibles, virus.organosInfectados));
        } else {
            document.getElementById('displayVirus').innerHTML = 'Només es poden crear 3 virus';
        }
    } else {
        document.getElementById('displayVirus').innerHTML = 'Por favor escoge un tipo de virus';
    }
});