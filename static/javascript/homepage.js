import {setThemeMode, update, themeButtonAddClickEvent} from './base.js'

let themeButton = document.getElementById("theme-button")

let postsArray =  document.getElementById("posts")

setThemeMode(themeButton)

update(postsArray, 1)

themeButtonAddClickEvent(themeButton)
