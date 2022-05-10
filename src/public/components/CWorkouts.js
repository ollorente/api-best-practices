class CWorkouts extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }

      c-card.basic-card .card-content,
      c-card.basic-card .card-action {
        box-sizing: border-box;
        padding: 20px;
        background-color: white;
        color: #546E7A;
        border-bottom: 1px solid rgba(160,160,160,0.2);
        border-radius: 2px 2px 2px 2px;
      }

      c-card.basic-card .card-title {
        font-size: 18px;
      }

      c-card.basic-card a {
        color: #ffab40;
        transition: color .3s ease;
        text-transform: uppercase;
        border-bottom: none;
        text-decoration: none;
        margin-right: 20px;
      }

			c-card.basic-card a:hover {
				color: #ffd8a6;
			}
    </style>

    <c-card class="basic-card">
      <div class="card-content">
        <span class="card-title">Card Title</span>
        <p>
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
        </p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
        <a href="#">This is a link</a>
      </div>
    </c-card>
    `;
  }
}

window.customElements.define("c-workouts", CWorkouts);
