class VirusVacuna extends Virus{
    constructor(nombre, medicina, virusLatente) {
        super(nombre, medicina);
        this.virusLatente = new VirusNormal();
    }

    evolucionar(virusLatente) {
        
    }

    toString() {
        let display = this.nombre + ' - ' + this.medicina;
        document.getElementById('displayVirus').innerHTML += display + '\n';
    }
}
