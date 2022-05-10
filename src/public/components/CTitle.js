class CTitle extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      h1 {
        font-family: sans-serif;
        margin: 0;
        padding: calc(1rem / 2);
        text-align: center;
      }
    </style>

    <h1>Workouts</h1>
    `;
  }
}

window.customElements.define("c-title", CTitle);
