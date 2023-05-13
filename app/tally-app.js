import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import './components/counter.js';
import './components/button.js';

class TallyApp extends LitElement {
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
      this.requestUpdate();
    }
  }

  decrementCounter() {
    if (this.counter > 0) {
      this.counter--;
      this.requestUpdate();
    }
  }

  render() {
    return html`
      <div>
        <counter-component .counter=${this.counter}></counter-component>
        <button-component
          @decrement=${this.decrementCounter.bind(this)}
          @increment=${this.incrementCounter.bind(this)}
        ></button-component>
      </div>
    `;
  }
}

customElements.define('tally-app', TallyApp);
