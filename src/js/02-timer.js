import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css";


const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute('disabled', true);

const inputData = document.querySelector("#datetime-picker");
let interval = null
const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  };

let chosenDate = Date.now();
      
const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

function convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        
        const days = addLeadingZero(Math.floor(ms / day));
        const hours = addLeadingZero(Math.floor((ms % day) / hour));
        const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
        const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }

      flatpickr("#datetime-picker", {
        enableTime: true,
        time_24hr: true,
        defaultDate: new Date(),
        minuteIncrement: 1,
        onClose(selectedDates) {
          startBtn.removeAttribute('disabled')
          console.log(selectedDates[0]);
          chosenDate = selectedDates[0]
        },

        minDate: "today",
        dateFormat: "d.m.Y",
        maxDate: "30.03.2022"
      });

      

      
            
      startBtn.addEventListener("click",()=>{
          interval = setInterval(updateDate, 1000)
         function updateDate(){
          
          const closeInterval = (chosenDate - Date.now());
          const resultTime = convertMs(closeInterval);
            refs.seconds.textContent = resultTime.seconds
            refs.minutes.textContent = resultTime.minutes
            refs.hours.textContent = resultTime.hours
            refs.days.textContent = resultTime.days
          
           
            if (closeInterval < 999){
              clearInterval(interval)
              setTimeout(()=>{alert('Время вышло')}, 100)
              
                            
            }
          
        }
        
      })
      
      
    
      
      
      

      