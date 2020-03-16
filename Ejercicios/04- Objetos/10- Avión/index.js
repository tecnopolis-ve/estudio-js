/* crear un objeto avión, indicar sus propiedades y dos métodos para arrancar y parar el avion*/

let plane = {
    model: '',
    brand: '',
    isEngineOn: true,
    color: '',
    start () {
        if (this.isEngineOn) {
            console.log('el motor está apagado');
        } else {
            console.log('el motor está encendido');
        }
        return this.isEngineOn; 
    },
    stop () {
        this.isEngineOn = false; 
        return this.isEngineOn;
    }
}