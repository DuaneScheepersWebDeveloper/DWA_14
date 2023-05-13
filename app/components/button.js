import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class ButtonsComponent extends LitElement {
  constructor() {
    super();
    this.addEventListener('click', this.handleClick);
  }

  handleClick(event) {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
      const action = target.textContent;
      if (action === '-') {
        this.dispatchEvent(new CustomEvent('decrement'));
      } else if (action === '+') {
        this.dispatchEvent(new CustomEvent('increment'));
      }
    }
  }
}

customElements.define('button-component', ButtonsComponent);
