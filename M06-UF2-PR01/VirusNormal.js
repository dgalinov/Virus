class VirusNormal extends Virus{
    constructor(nombre, medicina){
        super(nombre, medicina);
        this.organosPosibles = ["Cerebro", "Corazón", "Estómago", "Riñón"];
        this.organosInfectados = [];
    }
    infectar() {
        
    }
    atacar() {

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
            virusArray.push(new VirusNormal(document.getElementById('name').value, radioSelected.id, ));
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
            const virus = new VirusNormal(document.getElementById('name').value, radioSelectedm, );
            virusArray.push(new VirusVacuna(document.getElementById('name').value, radioSelected.id, virus.organosPosibles, virus.organosInfectados));
        } else {
            document.getElementById('displayVirus').innerHTML = 'Només es poden crear 3 virus';
        }
    } else {
        document.getElementById('displayVirus').innerHTML = 'Por favor escoge un tipo de virus';
    }
});