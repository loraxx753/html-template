const links = document.querySelectorAll('.from-wikipedia a')
for(let link of links) {
    link.addEventListener('click', function(e) {
        e.preventDefault()
        const [language, page] =  new URL(e.target.href).pathname.split('/').slice(1)
        const wikiUrl = new URL(`https://${language}.wikipedia.org/wiki/${page}`)
        window.location = wikiUrl
    })
}