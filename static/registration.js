themeButton = document.getElementById("theme-button")


lightThemeImage = 'url("../static/day.png")'
darkThemeImage = 'url("../static/night.png")'

if (localStorage.getItem("dark-theme") === "1"){
    themeButton.style.backgroundImage = darkThemeImage
    document.body.classList.add("dark-mode")

} else {
    themeButton.style.backgroundImage = lightThemeImage
    document.body.classList.remove("dark-mode")
}  


themeButton.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode")

    if (themeButton.style.backgroundImage === darkThemeImage){
        themeButton.style.backgroundImage = lightThemeImage
        darkTheme = localStorage.setItem("dark-theme", 0)
        
    } else {
        themeButton.style.backgroundImage = darkThemeImage
        darkTheme = localStorage.setItem("dark-theme", 1)
    }
})