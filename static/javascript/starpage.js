import {setThemeMode, update, themeButtonAddClickEvent, postArrayAddClickEvent, userPanelAddClickEvent} from './base.js'

let themeButton = document.getElementById("theme-button")
let postsArray =  document.getElementById("posts")
let starButton = document.getElementById("star-button")
let userPanel = document.getElementById("user-panel")

let login = false

setThemeMode(themeButton)

update(postsArray)

themeButtonAddClickEvent(themeButton)

postArrayAddClickEvent(postsArray)

userPanelAddClickEvent(userPanel, starButton, login, 0)
