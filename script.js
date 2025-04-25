const form = document.getElementById("form");
const dateInput = document.getElementById("date");
const eventInput = document.getElementById("event");
const timeline = document.getElementById("timeline");

let moments = JSON.parse(localStorage.getItem("moments")) || [];

function saveAndRender() {
  localStorage.setItem("moments", JSON.stringify(moments));
  timeline.innerHTML = "";
  moments
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((m) => {
      const li = document.createElement("li");
      li.textContent = `${m.date} - ${m.text}`;
      timeline.appendChild(li);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newMoment = {
    date: dateInput.value,
    text: eventInput.value,
  };
  moments.push(newMoment);
  saveAndRender();
  form.reset();
});

saveAndRender();
