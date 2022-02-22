
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  const startBtn = document.querySelector('[data-start]');
  
  const stopBtn = document.querySelector("[data-stop]");
  
  startBtn.addEventListener("click", () => {
      
    timerId = setInterval((changeBgColor) => {
        const color = getRandomHexColor();
        document.body.style.background = color;
    }, 1000);
    startBtn.setAttribute('disabled', true);
    
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
  });

//   disabled="true"