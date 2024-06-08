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

function update(postsArray, flag= 0) {

    if (flag) {
        postsArray.innerHTML = '<div id="my-posts"><p>my posts</p></div>'
        for (let i = 0; i < 10; i++) {
            postsArray.insertAdjacentHTML('beforeend',
                `<a class="post" href="${i}" data-index="${i}">
                    <div class="post__text">
                        <p>head1</p>
                    </div>
            </a>`)
        }
    } else {
        postsArray.innerHTML = ''
        for (let i = 0; i < 10; i++) {
            postsArray.insertAdjacentHTML('beforeend',
                `<div class="post" data-index="${i}">
                <a href="${i}"  class="post__text">
                    <p>head1</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deserunt quod optio soluta facere delectus, mollitia consequuntur voluptatum, facilis ab officia quibusdam excepturi itaque nemo saepe, accusantium maxime! Earum ea aliquam laborum autem repellendus! Commodi officia sint facilis ullam quibusdam. Magnam, nihil rem quod aliquam voluptatum sequi rerum error iusto eveniet hic tenetur. Ducimus, enim suscipit vero doloribus neque cumque accusamus ut? Sapiente explicabo consequuntur rem enim? Placeat velit delectus sed, dolorem eaque vel suscipit nihil ea ab exercitationem harum ullam, quibusdam maxime laudantium fugit hic aperiam distinctio eveniet. Recusandae minima a aperiam illum dolorem delectus ducimus vero. Odit, ullam.</p>
                </a>
                <div class="post__options">
                    <img src="../static/images/nostar.png" alt="star image" class="star">
                    <a href="${i}"><div class="comment"></div></a>
                </div>
        </div>`)
        }
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
        let index = event.target.closest(".post").dataset.index

        let starImage = postsArray.childNodes[index].childNodes[3].childNodes[1]

        if (String(event.target.classList).includes("star")) {
            starImage.outerHTML = `<img src="../static/images/${starImage.outerHTML.includes("nostar") ? '' : "no"}star.png" alt="star image" class="star">`
        }
    })
}

function userPanelAddClickEvent(userPanel, starButton, login, flag= 1) {
    userPanel.addEventListener("click", () => {

        login = !login

        userPanel.style.backgroundColor = ["var(--user-panel-color)", "var(--search-color)"][+login]
        if (flag)
            starButton.style.display = ["inline-block", "none"][+login]
        userPanel.innerHTML = `<a href="/${login ? "authorisation" : "homepage"}">${login ? "log-in" : "home"}</a>`

    })
}

export {update, setThemeMode, themeButtonAddClickEvent, postArrayAddClickEvent, userPanelAddClickEvent}