import {setThemeMode, themeButtonAddClickEvent} from "./base.js"

let themeButton = document.getElementById("theme-button")

setThemeMode(themeButton)

themeButtonAddClickEvent(themeButton)
