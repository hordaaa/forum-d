let lightThemeImage = 'url("../static/images/day.png")'
let darkThemeImage = 'url("../static/images/night.png")'

function setThemeMode(themeButton) {

    if (localStorage.getItem("dark-theme") === "1"){
        themeButton.style.backgroundImage = darkThemeImage
        document.body.classList.add("dark-mode")

    } else {
        themeButton.style.backgroundImage = lightThemeImage
        document.body.classList.remove("dark-mode")
    }
}

function themeButtonAddClickEvent(themeButton) {
    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode")

        if (themeButton.style.backgroundImage !== darkThemeImage) {
            themeButton.style.backgroundImage = darkThemeImage
            localStorage.setItem("dark-theme", "1")
        } else {
            themeButton.style.backgroundImage = lightThemeImage
            localStorage.setItem("dark-theme", "0")

        }
    })
}

function postArrayAddClickEvent(postsArray) {
    postsArray.addEventListener("click", event => {


        if (String(event.target.classList) === "star") {
            let url = event.target.parentNode.parentNode.dataset.url

            if (String(event.target.outerHTML).includes("nostar")) {
                event.target.outerHTML = `<img src="/static/images/star.png" alt="star image" class="star">`
            } else {
                event.target.outerHTML = `<img src="/static/images/nostar.png" alt="star image" class="star">`
            }
        }
    })
}


export {setThemeMode, themeButtonAddClickEvent, postArrayAddClickEvent}