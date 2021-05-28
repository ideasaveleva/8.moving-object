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
 
