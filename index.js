
import Cl_deportista from "./classes/deportista.js";

export default class Cl_main {

    reportar(){
        let estudianteA=new Cl_deportista({nombre:"Juan", acumuladoNotas:132, cantidadMaterias:8, peticionDeporte:1, edad:21})
        let estudianteB=new Cl_deportista({nombre:"Felix", acumuladoNotas:110, cantidadMaterias:10, peticionDeporte:2, edad:20})

        document.body.innerHTML+=`
            <br>
            nombre: ${estudianteA._nombre}
            <br>
            acumulado de notas: ${estudianteA._acumuladoNotas}
            <br>
            cantidad de materias: ${estudianteA._cantidadMaterias}
            <br>
            Deporte (1=beisbol - 2=fútbol): ${estudianteA._peticionDeporte}
            <br>
            edad: ${estudianteA._edad}
            <br>
            Nota promedio: ${estudianteA.promedio()}
            <br>
            ${estudianteA.reportarDeporte()}
            <br>
            <br>
            nombre: ${estudianteB._nombre}
            <br>
            acumulado de notas: ${estudianteB._acumuladoNotas}
            <br>
            cantidad de materias: ${estudianteB._cantidadMaterias}  
            <br>
            Deporte (1=beisbol - 2=fútbol): ${estudianteB._peticionDeporte}
            <br>
            edad: ${estudianteB._edad}
            <br>
            Nota promedio: ${estudianteB.promedio()}
            <br>
            ${estudianteB.reportarDeporte()}

        `

    }
}   