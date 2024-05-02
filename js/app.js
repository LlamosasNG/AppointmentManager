const patientInput = document.querySelector('#paciente');
const ownerInput = document.querySelector('#propietario');
const emailInput = document.querySelector('#email');
const dateInput = document.querySelector('#fecha');
const symptomsInput = document.querySelector('#sintomas');

const form = document.querySelector('#formulario-cita');

//Objeto de cita
const appointmentObj = {
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

//Eventos
patientInput.addEventListener('input', dataAppointment);
ownerInput.addEventListener('input', dataAppointment);
emailInput.addEventListener('input', dataAppointment);
dateInput.addEventListener('input', dataAppointment);
symptomsInput.addEventListener('input', dataAppointment);

form.addEventListener('submit', submitAppointment);


function dataAppointment(e) {
    appointmentObj[e.target.name] = e.target.value;
    console.log(appointmentObj);
}

function submitAppointment(e) {
    e.preventDefault();

    if (Object.values(appointmentObj).some(value => value.trim() === '')) {
        const notification = new Notification({
            text: 'Todos los campos son obligatorios',
            type: 'error'
        })
        console.log(notification);
        return;
    }   
}

class Notification {
    constructor({ text, type }) {
        this.text = text;
        this.type = type;
    }

    show(){
        //Crear notificación
        const alert = document.createElement('div');
    }





}
