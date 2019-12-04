class Organo{
    constructor(nombre, estadoActual) {
        this.nombre = nombre;
        this.estadoActual = estadoActual;
    }

    getters() {
        return this.estadoActual;
    }

    setters(estadoNuevo) {
        if (estadoNuevo == 'sano' || estadoNuevo == 'infectado' || estadoNuevo == 'grave' || estadoNuevo == 'extirpado') {
            this.estadoActual = estadoNuevo;
        }
    }
    toString() {
        let display = this.nombre + ' - ' + this.estadoActual;
        document.getElementById('displayOrganos').innerHTML += display + '\n';
    }
}

const organos = [
    new Organo("Cerebro", "sano"),
    new Organo("Corazón", "sano"),
    new Organo("Estómago", "sano"),
    new Organo("Riñón", "sano")
];

function displayOrganos() {
    for (let i = 0; i < organos.length; i++) {
        organos[i].toString();
    }
}