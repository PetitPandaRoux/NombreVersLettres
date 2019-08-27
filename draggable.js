var elements = document.querySelectorAll('.draggableBox');
var myDrag = document.querySelector('.unique-box');

myDrag.addEventListener('mousedown', () => {
  var isMovable = true;
  document.querySelector('.unique-box').style.background = 'red'; 
  document.addEventListener('mousemove', function(e){
    if (isMovable){
      document.querySelector('.unique-box').style.left = (e.clientX +'px');
      document.querySelector('.unique-box').style.top = (e.clientY +'px');
      console.log(e.screenX);
    }
  });
  document.addEventListener('mouseup', () => {
    document.querySelector('.unique-box').style.background = 'blue'; 
    isMovable = false;
  },false)
}, false);


for (var i = 0 ; i < elements.length ; i++) {
  elements[i].addEventListener('mousedown', () => {
    var isMovable = true;
    this.style.background = 'red'; 
    document.addEventListener('mousemove', (e) => {
      if (isMovable){
        this.style.left = (e.clientX +'px');
        this.style.top = (e.clientY +'px');
      }
    });
    document.addEventListener('mouseup',function(e){
      this.style.background = 'blue'; 
      isMovable = false;
    },false)
  }, false);
}
//   elements[i].addEventListener('mousemouve', function(e){
//     console.log(e);
//     console.log("onMouse"); 
//   })
