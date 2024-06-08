themeButton = document.getElementById("theme-button")
starButton = document.getElementById("star-button")

header = document.getElementById("header")
postsArray =  document.getElementById("posts")


lightThemeImage = 'url("../static/day.png")'
darkThemeImage = 'url("../static/night.png")'

let login = false

if (localStorage.getItem("dark-theme") === "1"){
    themeButton.style.backgroundImage = darkThemeImage
    document.body.classList.add("dark-mode")
} else {
    themeButton.style.backgroundImage = lightThemeImage
    document.body.classList.remove("dark-mode")
}  

function update() { 
    postsArray.innerHTML = '<div id="my-posts"><p>my posts</p></div>'
    for (let i = 0; i < 10; i++){
        postsArray.insertAdjacentHTML('beforeend',
            `<a class="post" href="/${i}" data-index="${i}">
                <div class="post__text">
                    <p>head1</p>
                </div>
        </a>`)
    }
}

update()

themeButton.addEventListener("click", () => {
    
    document.body.classList.toggle("dark-mode")

    if (themeButton.style.backgroundImage === darkThemeImage){
        themeButton.style.backgroundImage = lightThemeImage
        localStorage.setItem("dark-theme", 0)
        
    } else {
        themeButton.style.backgroundImage = darkThemeImage
        localStorage.setItem("dark-theme", 1)
    }
})
