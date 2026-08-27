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
        