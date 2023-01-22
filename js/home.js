/*Data*/

const lista = [];

const currentDate = document.querySelector('p.containerCurrentDate')

const textcurrentDay = new Date().getDay()
const textcurrentDate = new Date().getDate()
const textcurrentMonth = new Date().getMonth() + 1
const textcurrentYear = new Date().getFullYear()

switch (textcurrentDay) {
  case 0:
    currentDate.append('Domingo');
    break;
  case 1:
    currentDate.append('segunda');
    break;
  case 2:
    currentDate.append(`Terça - ${textcurrentDate}/${textcurrentMonth}/${textcurrentYear}`);
    break;
  case 3:
    currentDate.append(`Quarta - ${textcurrentDate}/${textcurrentMonth}/${textcurrentYear}`);
  break;

  default:
    break;
};

/*Evento btn AddEvent*/


const DOM = {
  showModalAddEvent() {
    alert('clicou aqui')
  }
  
}

