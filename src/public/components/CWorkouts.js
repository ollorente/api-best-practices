class CWorkouts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div>
      <h1>Welcome to API Best practices!</h1>
      <p>Hey</p>
    </div>`;
  }
}

window.customElements.define("c-workouts", CWorkouts);
