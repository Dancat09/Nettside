        const toggleButten = document.getElementById("theme-toggle");

        const savedTheme = localStorage.getItem("theme");
        if (savedTheme){
            document.body.setAttribute("data-theme", savedTheme);
        }
        else{
            const preferesDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (preferesDark){
                document.body.setAttribute("data-theme", "dark");
            }
        }
        toggleButten.addEventListener("click", ()=>{
            const currentTheme = document.body.getAttribute("data-theme",);
            const newTheme = currentTheme === "dark"? "light": "dark"; 
            document.body.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
        }) 

let count = 0;

function updateCount() {
  document.getElementById("count").innerHTML = count;
}

function increaseCount() {
  count++;
  updateCount();
}

function decreaseCount() {
  count--;
  updateCount();
}

function resetCount() {
  count = 0;
  updateCount();
}

function saveCount() {
  localStorage.setItem("count", count);
}

function loadCount() {
  let saved = localStorage.getItem("count");
  if (saved !== null) {
    count = Number(saved);
  }
  updateCount();
} 


let countt = 0; 

function updateCountt() {
  document.getElementById("countt").innerHTML = countt;
}

function increaseCountt() {
  countt++;
  updateCountt();
}

function decreaseCountt() {
  countt--;
  updateCountt();
}

function resetCountt() {
  countt = 0;
  updateCountt();
}

function saveCountt() {
  localStorage.setItem("countt", countt);
}

function loadCountt() {
  let saved = localStorage.getItem("countt");
  if (saved !== null) {
    countt = Number(saved);
  }
  updateCountt();
} 

const liste = ["Teknologi er best når det bringer mennesker sammen!",
  "Først løser du problemet. Deretter skriver du koden!",
  "Tiden du nyter å kaste bort, er ikke bortkastet tid,",
  "Tiden vi tilbringer sammen er den mest dyrebare vi har",
  "Livet er hva dine tanker gjør det til","Enkelhet er den ultimate sofistikasjon."]
function liste() {

}