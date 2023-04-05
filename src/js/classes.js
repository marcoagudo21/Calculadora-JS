

export class Calc {

    constructor() {
        this.datos = [];
    }

    get getDatos(){
        return this.datos.join('')
    }
    
    agregarNumero(numero) {
        this.datos.push(numero);
        
    }

    borrarTodo() {
        this.datos = [];

    }
    resolver(){
        const datosAResolver = this.datos.join('');
        this.datos = [];
        try {
            return eval(datosAResolver)
        } catch (error) {
            return 'Syntax ERROR'
        }
        
    }
    

}