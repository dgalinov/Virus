class Organo {
    constructor(nombre, estadoActual) {
        this.nombre = nombre;
        this.estadoActual = estadoActual;
        this.estadosPosibles = {
            SANO = 'sano',
            INFECTADO = 'infectado',
            GRAVE = 'grave',
            EXTIRPADO = 'extirpado'
        }
    }
    getters() {
        //TODO
    }

    setters() {
        //TODO
    }
    toString() {
        //TODO
    }
}