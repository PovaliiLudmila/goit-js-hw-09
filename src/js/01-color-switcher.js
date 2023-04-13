const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body: document.querySelector('body'),
  };
  
  const colorChanger = {
    intervalId: null,
    isActive: false,
    start() {
      if (this.isActive) {
        stop.setAttribute('disabled', true);
      }else{
        this.isActive = false;  
      }
      
      this.intervalId = setInterval(() => {
        bodyBGColorChanger();
      }, 1000);
  
      refs.start.disabled = true;
      refs.stop.removeAttribute('disabled');
      refs.start.setAttribute('disabled', true);
    },
    stop() {
      clearInterval(this.intervalId);
      // this.isActive = false;
      refs.start.disabled = false;
      refs.start.removeAttribute('disabled');
      refs.stop.setAttribute('disabled', true);
    },
  };
  
  refs.start.addEventListener('click', () => {
    colorChanger.start();
  });
  refs.stop.disabled = true;
  refs.stop.addEventListener('click', () => {
    colorChanger.stop();
  });
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  function bodyBGColorChanger() {
    refs.body.style.backgroundColor = getRandomHexColor();
  }
  // const startButton = document.querySelector('button[data-start]')
  // const stopButton = document.querySelector('button[data-stop]')
  // let timerId = null;
  // startButton.addEventListener('click', () => {
  //   timerId = setInterval(() => {
  //     document.body.style.backgroundColor = getRandomHexColor();
  //   }, 1000);
  //   startButton.disabled = true;
  // });

  // stopButton.addEventListener('click', () => {
  //   clearInterval(timerId);
  //   startButton.disabled = false;
  // });

  // function getRandomHexColor() {
  //   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // }
  
  // const btnStart = document.querySelector('button[data-start]');
  // const btnStop = document.querySelector('button[data-stop]');
  // const body = document.querySelector('body');
  // const colorValSpan = document.querySelector('.color');
  
  // let timerId = null;
  
  // // function to switch color to random
  
  // const backgroundColorSwitcher = function () {
  //   body.style.backgroundColor = getRandomHexColor();
  //   body.style.color = getRandomHexColor();
  //   colorValSpan.textContent = getRandomHexColor();
  // };
  
  // // start changing color
  
  // btnStart.addEventListener('click', () => {
  //   timerId = setInterval(backgroundColorSwitcher, 1000);
  //   btnStart.disabled = true;
  // });
  
  // // stop changing color
  // btnStop.setAttribute('disabled', true);
  // btnStop.addEventListener('click', () => {
  //   clearInterval(timerId);
  //   btnStart.disabled = false;
  // });