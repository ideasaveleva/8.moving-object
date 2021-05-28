const box = document.querySelector('#block')


function moveBlock(e) {
  // Перемешаем блок по X
  block.style.left = e.pageX + 'px';
  // Перемешаем блок по Y
  block.style.top = e.pageY + 'px';
}

// Отслеживаем событие нажатия мыши
block.addEventListener("mousedown", function (e) {
  // Отслеживаем событие перемещение мыши
  document.onmousemove = function (e) {
    // Объявляем функцию для перемещения блока
    moveBlock(e);
  }
  
  // Отслеживаем отпускание кнопки мыши
  block.onmouseup = function () {
    // Убираем отслеживание позиции мыши
    document.onmousemove = null;
    // Убираем отслеживание нажатия мыши
    block.onmouseup = null;
  }
});
 
// Дополнительная информацмя для создания обработчика событий тачпада на мобильных устройствах
//  // Отслеживаем событие нажатия тачпада
// block.addEventListener("touchmove", function (e) {
//   // Отслеживаем событие перемещение тачпада
//   document.ontouchmove = function (e) {
//     // Объявляем функцию для перемещения блока
//     moveBlock(e);
//   }

//  mounted() {
//       ...
//       // Навешиваем обработчик события на родительский элемент
//       document
//       .getElementById("parent_id")
//       .addEventListener("touchmove", this.touchMove);
//    }
//    methods : {
//       touchMove(event) {
//          // получаем касание
//          const touch = event.changedTouches[0];   
//          // вычисляем нажатый дочерний элемент  
//          const target = document.elementFromPoint(touch.clientX, touch.clientY);
//          // далее как обычно   
//          this.dosome(target);
//       }
//    }
  
//   document.addEventListener('touchstart', (e) => {
//     console.log(e.touches);
// }
