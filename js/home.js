let currentMonth = new Date()
let currentYear  = new Date()
let weekday      = new Date()
// console.log(weekday.getDay());//Dia da semana(indica a posicao onde será inserido o primeiro elemento <li>) 
let countDaysMonth = diasNoMes(currentMonth.getMonth()+1 , currentYear.getFullYear())
/*Manipula os elementos do calendário*/
const DOM = {

   calendarDays(){
    const ul = document.querySelector('.date ul')
    const li = document.createElement('li')
    ul.append(li)  
    
  },

  positionFirstDay(){
    const liDaysFirstChild = document.querySelector('.date ul li:first-child')
  }

}

/*Verifica a quantidade de dias que o mês tem*/
function diasNoMes(mes, ano) {
  let data = new Date(ano, mes, 0);
  return data.getDate();
}

/*insere as datas*/
for(let i = 1 ; i <= countDaysMonth ; i++){
  DOM.calendarDays()
  // console.log(i);
  function teste(){
    const li = document.querySelectorAll('.date ul li')
    //li.forEach(element => {console.log(element);})
    for (i = 1 ; i <= countDaysMonth ; i++){
      li[i-1].innerHTML = i;
    }
  }
}

teste()
DOM.positionFirstDay()


