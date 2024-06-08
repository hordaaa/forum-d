themeButton = document.getElementById("theme-button")
postsArray =  document.getElementById("posts")

header = document.getElementById("header")
userPanel = document.getElementById("user-panel")


lightThemeImage = 'url("../static/day.png")'
darkThemeImage = 'url("../static/night.png")'

if (localStorage.getItem("dark-theme") === "1"){
    themeButton.style.backgroundImage = darkThemeImage
    document.body.classList.add("dark-mode")
} else {
    themeButton.style.backgroundImage = lightThemeImage
    document.body.classList.remove("dark-mode")
}  


let login = false

function update() { 
    postsArray.innerHTML = ''
    for (let i = 0; i < 10; i++){
        postsArray.insertAdjacentHTML('beforeend',
            `<div class="post" data-index="${i}">
                <a href="/${i}"  class="post__text">
                    <p>head1</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt quod optio soluta facere delectus, mollitia consequuntur voluptatum, facilis ab officia quibusdam excepturi itaque nemo saepe, accusantium maxime! Earum ea aliquam laborum autem repellendus! Commodi officia sint facilis ullam quibusdam. Magnam, nihil rem quod aliquam voluptatum sequi rerum error iusto eveniet hic tenetur. Ducimus, enim suscipit vero doloribus neque cumque accusamus ut? Sapiente explicabo consequuntur rem enim? Placeat velit delectus sed, dolorem eaque vel suscipit nihil ea ab exercitationem harum ullam, quibusdam maxime laudantium fugit hic aperiam distinctio eveniet. Recusandae minima a aperiam illum dolorem delectus ducimus vero. Odit, ullam.</p>
                </a>
                <div class="post__options">
                    <img src="../static/star.png" alt="star image" class="star">
                    <a href="${i}"><div class="comment"></div></a>
                </div>
        </div>`)
    }
}

update()


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

postsArray.addEventListener("click", event => {
    let index = event.target.closest(".post").dataset.index 

    starImage = postsArray.childNodes[index].childNodes[3].childNodes[1]
    commentImage = postsArray.childNodes[index].childNodes[3].childNodes[3]

    if (String(event.target.classList).includes("star")){
        starImage.outerHTML =  `<img src="images/${starImage.outerHTML.includes("nostar") ? '': "no"}star.png" alt="star image" class="star">`
    }
})

userPanel.addEventListener("click", event => {

    login = !login
    
    userPanel.style.backgroundColor = ["var(--user-panel-color)", "var(--search-color)"][+login]
    userPanel.innerHTML = `<a href="${login ? "autorisation": "homepage"}.html">${login ? "autorisation": "home"}</a>`

})
