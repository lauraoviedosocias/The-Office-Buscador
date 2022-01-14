const charactersButton = document.getElementById("characters-button");
const episodesButton = document.getElementById("episodes-button");
const quotesButton = document.getElementById("quotes-button");
const homeButton = document.getElementById("home-button")
const menu_hamburguesa = document.getElementById("menu-hamburguesa")


const charactersSection = document.getElementById("characters-section")
const episodesSection = document.getElementById("episodes-section")
const quotesSection = document.getElementById("quotes-section")
const homeSection = document.getElementById("home-section")

// BASIC FUNCTIONS TO NAVIGATE THE WEB

charactersButton.onclick = () => {

    homeSection.style.display = "none"
    episodesSection.style.display = "none"
    quotesSection.style.display = "none"
    charactersSection.style.display = "flex"
    
}

episodesButton.onclick = () => {
    
    homeSection.style.display = "none"
    quotesSection.style.display = "none"
    charactersSection.style.display = "none"
    episodesSection.style.display = "flex"

}

quotesButton.onclick = () => {

    homeSection.style.display = "none"
    episodesSection.style.display = "none"
    charactersSection.style.display = "none"    
    quotesSection.style.display = "flex"

}

homeButton.onclick = () => {

    episodesSection.style.display = "none"
    charactersSection.style.display = "none"    
    quotesSection.style.display = "none"
    homeSection.style.display = "flex"
}

// API FUNTIONS

const inputCharacters = document.getElementById("input-characters-search")
const inputEpisodes = document.getElementById("input-episodes-search")
const inputQuotes = document.getElementById("input-quotes-search")

fetch