const DOM = {

   calendarDays(){
    const ul = document.querySelector('.date ul')
    const li = document.createElement('li')
    ul.append(li)  
    
  }
  
}

/*Verifica a quantidade de dias que o mês tem*/
function diasNoMes(mes, ano) {
  let data = new Date(ano, mes, 0);
  return data.getDate();
}

let currentMonth = new Date()
let currentYear = new Date()
let countDaysMonth = diasNoMes(currentMonth.getMonth()+1 , currentYear.getFullYear())

for(let i = 1 ; i <= countDaysMonth ; i++){
  DOM.calendarDays()
  console.log(i);
  function teste(){
    const li = document.querySelector('.date ul li')
    li.innerHTML = 1
  }
}
teste()
/*insere as datas*/


