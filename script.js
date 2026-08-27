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
