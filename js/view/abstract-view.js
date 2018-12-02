class AbstractView {
  get template() {
    // Возвращает строку, содержащую разметку
    // переопределяется в наследнике
  }
  get element() {
    // ?????????????
    // Возвращает DOM-элемент, соответствующий представлению
  }
  render(str) {
    // создает DOM элемент на основе шаблона геттера template
    const div = document.createElement(`div`);
    div.innerHTML = str.trim();
    return div;
  }
  bind() {
    // добавляет обработчики событий
    // переопределяется в наследнике
  }
}

export default AbstractView;
