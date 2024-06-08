import {update, setThemeMode, themeButtonAddClickEvent, postArrayAddClickEvent, userPanelAddClickEvent} from "./base.js"

let login = true

let themeButton = document.getElementById("theme-button")
let starButton = document.getElementById("star-button")

let postsArray =  document.getElementById("posts")
let userPanel = document.getElementById("user-panel")

setThemeMode(themeButton)

update(postsArray)

themeButtonAddClickEvent(themeButton)

postArrayAddClickEvent(postsArray)

userPanelAddClickEvent(userPanel, starButton, login)
