const ACTION = {
  addEventClick() {
    const dates = document.querySelectorAll('.date ul li')
    for(let i = 0 ; i <= dates.length ; i++){
      dates[i].addEventListener('click', function chooseDate(){
        console.log(dates[i].innerHTML);
        const dateSelected = document.querySelector('.popupAddEvent h2')
        dateSelected.innerHTML = dates[i].innerHTML
      })
    }
  }
}

ACTION.addEventClick()

// const date = document.querySelectorAll('.date ul li')
//       for (let day = 0 ; day <= date.length ; day++){
//         date[day].style.backgroundColor = "red"
//       }