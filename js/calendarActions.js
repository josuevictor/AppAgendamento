//Interações com o calendário

const action = {
  addEventClick() {
    const dates = document.querySelectorAll('.date ul li')
    for(let i = 0 ; i <= dates.length ; i++){
      dates[i].addEventListener('click', function chooseDate(){
        console.log(dates[i].innerHTML);
        const dateSelected = document.querySelector('.popupAddEvent h2')
        dateSelected.innerHTML = dates[i].innerHTML
        //dates[i].style.background = 'red'
      })
    }
  }
}

action.addEventClick()
