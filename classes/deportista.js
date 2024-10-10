import Cl_estudiante from "./estudiante.js";
export default class Cl_deportista extends Cl_estudiante{
    constructor({nombre, acumuladoNotas, cantidadMaterias, peticionDeporte, edad}){
        super({nombre, acumuladoNotas, cantidadMaterias})
        this.peticionDeporte=peticionDeporte;
        this.edad=edad
        this.ID_DEPORTE_BEISBOL=1;
        this.ID_DEPORTE_FUTBOL=2;

    }

    
    set edad(e){
        return this._edad=+e;

    }
    get edad(){
        return this._edad

    }

    set peticionDeporte(pd){
        return this._peticionDeporte=+pd;

    }
    get peticionDeporte(){
        return this._peticionDeporte

    }

    admitidoDeporte(){
        const PROMEDIO = super.promedio();

        if(this._peticionDeporte===this.ID_DEPORTE_BEISBOL && this._edad>21 && PROMEDIO>14){
            return true
        }
        if(this._peticionDeporte===this.ID_DEPORTE_FUTBOL && this._edad>=19 && PROMEDIO>=12){
            return true
        }

        return false
       

    }

    reportarDeporte() {
        let nombreDeporte=this.peticionDeporte===this.ID_DEPORTE_BEISBOL?"beisbol":"futbol"
        let mensaje=this.admitidoDeporte()?`${this._nombre} es admitido en ${nombreDeporte}`: `${this._nombre} no es admitido en ${nombreDeporte}`

        return mensaje
    }
}