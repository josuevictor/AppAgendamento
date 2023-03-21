let currentMonth = new Date()
let currentYear  = new Date()
let weekday      = new Date()
let mes          = new Date().getMonth() + 1
// console.log(weekday.getDay());//Dia da semana(indica a posicao onde será inserido o primeiro elemento <li>) 
let countDaysMonth = getDaysInMonth(currentMonth.getMonth() + mes , currentYear.getFullYear())
/*Manipula os elementos do calendário*/
const DOM = {

   calendarDays(){
    const ul = document.querySelector('.date ul')
    const li = document.createElement('li')
    ul.append(li)  
    
  },

  positionFirstDay(){
    const date = new Date(); // Cria uma nova instância do objeto Date
    date.setDate(1); // Define o dia para o primeiro dia do mês atual
    const diasDaSemana = [1, 2, 3, 4, 5, 6, 7];
    const diaDaSemana = diasDaSemana[date.getDay()]; // Obtém o nome do dia da semana
    const liDaysFirstChild = document.querySelector('.date ul li:first-child')
    liDaysFirstChild.style.gridColumnStart = diaDaSemana
  }

}

/*Verifica a quantidade de dias que o mês tem*/
function getDaysInMonth(mes, ano) {
  let data = new Date(ano, mes, 0);
  return data.getDate();
}

/*insere as datas*/
for(let i = 1 ; i <= countDaysMonth ; i++){
  DOM.calendarDays()
  // console.log(i);
  function insertDates(){
    const li = document.querySelectorAll('.date ul li')
    //li.forEach(element => {console.log(element);})
    for (i = 1 ; i <= countDaysMonth ; i++){
      li[i-1].innerHTML = i;
    }
    setInterval(function(){
      
    }, 5000)
  }
}



insertDates()
DOM.positionFirstDay()