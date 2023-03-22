//Interações com o calendário
const action = {
  addEventClick() {
    const dates        = document.querySelectorAll('.date ul li')
    const textWeekday  = document.querySelector('.popupAddEvent p')
    const weekdays     = [1, 2, 3, 4, 5, 6, 7] 
    const valueWeekday = new Date()
    for(let i = 0 ; i <= dates.length ; i++){
        dates[i].addEventListener('click', function chooseDate(){
        //console.log(dates[i].innerHTML);//aqui
        const dateSelected = document.querySelector('.popupAddEvent h2')
        dateSelected.innerHTML = dates[i].textContent
        //Retorna o dia da semana referente a data selecionada
        let date = Number(dates[i].innerHTML)
        valueWeekday.setDate(date)
        let diasDaSemana = weekdays[valueWeekday.getDay()]
        console.log(diasDaSemana);
        switch (diasDaSemana) {
          case 1: 
            textWeekday.innerHTML = "Domingo"
            break;
          case 2: 
            textWeekday.innerHTML = "Segunda"
            break;   
          case 3: 
            textWeekday.innerHTML = "Terça"
            break;
          case 4: 
            textWeekday.innerHTML = "Quarta"
            break;   
          case 5: 
            textWeekday.innerHTML = "Quinta"
            break;
          case 6: 
            textWeekday.innerHTML = "Sexta"
            break;
          case 7: 
            textWeekday.innerHTML = "Sábado"
            break;  
          
        
          default:
            break;
        }
      })
    }
  }
}

action.addEventClick()
