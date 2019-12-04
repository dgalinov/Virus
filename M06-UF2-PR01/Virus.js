class Virus{
    constructor(nombre, medicina) {
        this.nombre = nombre;
        this.medicina = medicina;
    }
    toString() {
        let display = this.nombre + ' - ' + this.medicina;
        document.getElementById('displayVirus').innerHTML += display + '\n';
    }
}
