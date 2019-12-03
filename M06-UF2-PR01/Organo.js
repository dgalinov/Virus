class Organo{
    constructor(nombre, estadoActual) {
        this.nombre = nombre;
        this.estadoActual = estadoActual;
        /*this.estadosPosibles = {
            SANO = 'sano',
            INFECTADO = 'infectado',
            GRAVE = 'grave',
            EXTIRPADO = 'extirpado'
        } */
    
    }
    

    empeorar() {
        //TODO
    }

    mejorar() {
        //TODO
    }

    getters() {
        //TODO
    }

    setters() {
        //TODO
    }
    toString() {
        //TODO MOSTRAR EN EL TEXTAREA
    }
}

const organos = [
    new Organo("Cerebro", "sano"),
    new Organo("Corazón", "sano"),
    new Organo("Estómago", "sano"),
    new Organo("Riñón", "sano")
];