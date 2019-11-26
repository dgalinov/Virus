class VirusNormal extends Virus{
    constructor(nombre, medicina, organosPosibles, organosInfectados){
        super(nombre, medicina);
        this.organosPosibles = organosPosibles;
        this.organosInfectados = organosInfectados;
    }

    infectar() {
        //TODO
    }

    atacar() {
        //TODO
    }

    curar() {
        //TODO
    }
    
    toString() {
        //TODO
    }
}

const organ = new Organo('nombre', 'infectado');
console.log(organ);