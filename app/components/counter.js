import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

class CounterComponent extends LitElement {
  static properties = {
    counter: { type: Number },
  };

  constructor() {
    super();
    this.counter = 5;
  }

  incrementCounter() {
    if (this.counter < 20) {
      this.counter++;
    }
  }

  decrementCounter() {
    if (this.counter > -20) {
      this.counter--;
    }
  }

  render() {
    return html`
      <div>${this.counter}</div>
      <button @click=${this.decrementCounter}>Subtract -</button>
      <button @click=${this.incrementCounter}>Add +</button>
    `;
  }
}

customElements.define('counter-component', CounterComponent);
