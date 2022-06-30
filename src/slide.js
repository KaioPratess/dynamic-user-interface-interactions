export default function slide() {
  const images = document.querySelectorAll('.img');
  const arrowBackward = document.querySelector('.arrow-backward');
  const arrowForward = document.querySelector('.arrow-forward');
  const circles = document.querySelectorAll('.circles ul li');


  const circlesArray = Array.from(circles);
  const slideArray = Array.from(images);

  let index = 0;

  slideArray[index].style.display = 'block';

  function setPrevious() {
    if(index > 0) {
      --index
      showImg();
      selectCircle();
    } else {
        index = slideArray.length - 1;
        showImg();
        selectCircle();
    }
  }

  function setNext() {
    if(index < slideArray.length - 1) {
      ++index
      showImg();
      selectCircle();
    } else {
      index = 0;
      showImg();
      selectCircle();
    }
  }

  function showImg() {
    slideArray.forEach((img) => {
      img.style.display = 'none';
    });
    slideArray[index].style.display = 'block';
  }

  function selectCircle() {
    circlesArray.forEach((circle) => {
      const i = circlesArray.indexOf(circle);
      if(i === index) {
        circle.style.background = 'black'
      } else {
          circle.style.background = 'none';
      }
    })
  }

  circlesArray.forEach((circle) => {
    const i = circlesArray.indexOf(circle);
    circle.addEventListener('click', () => {
      index = i;
      showImg();
      selectCircle();
    });
  })

  function slideAuto() {
    setNext();
    setTimeout(slideAuto, 5000);
  }

  selectCircle();
  setTimeout(slideAuto, 5000);

  arrowBackward.addEventListener('click', setPrevious);
  arrowForward.addEventListener('click', setNext);
}