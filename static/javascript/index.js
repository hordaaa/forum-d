import {setThemeMode, themeButtonAddClickEvent, postArrayAddClickEvent} from "./base.js"

let themeButton = document.getElementById("theme-button")
let postsArray =  document.getElementById("posts")

setThemeMode(themeButton)

themeButtonAddClickEvent(themeButton)

postArrayAddClickEvent(postsArray)

