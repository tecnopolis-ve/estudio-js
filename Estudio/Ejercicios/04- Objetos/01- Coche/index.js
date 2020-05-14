/* Crear objeto coche, incluir estas propiedades:

modelo 
marca
matricula
color
propietario
año de fabricacion

Además, definir dos métodos para el objeto coche:

* arrancar el motor del coche
* parar el motor del coche
*/

let car = {
    model: 'A3',
    brand: 'Audi',
    id: 'BFJ3000',
    km: 0,
    color: 'blue',
    isEngineOn: false,
    owner: {
        name: '',
        firstName: '',
        lastName: '',
        birthDate: '18/01/1989',
        identityDocument: {
            number: '',
            type: 'DNI'
        },
        driverLicense: {
            type: 'B'
        }
    },
    fabricationYear: 2020,
    start: function () {
        if (this.isEngineOn){
            console.log('el coche está encendido'); 
        } else {
            this.isEngineOn = true;
        }
        return this.isEngineOn; 
    }, 
    move: function (distanceTraveled = 0) {
        if (this.isEngineOn) {
            this.km += distanceTraveled;
        }
        return this.km; 
    },
    stop: function () {
        this.isEngineOn = false; 
    }

}