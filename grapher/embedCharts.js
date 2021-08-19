const embedSnippet = () => {

const coreStylesheets = [
    'https://ourworldindata.org/assets/commons~3b048933.css',
'https://ourworldindata.org/assets/commons~7efcf74f.css',
'https://ourworldindata.org/assets/commons~b3c4a2ff.css',
'https://ourworldindata.org/assets/commons~e4dfd1bd.css'
]


coreStylesheets.forEach(url => {
    const link = document.createElement('link')
    link.type = 'text/css'
    link.rel = 'stylesheet'
    link.href = url
    document.head.appendChild(link)
})

let loadedScripts = 0;
const checkReady = () => {
    loadedScripts++
    if (loadedScripts === 3)
        window.MultiEmbedderSingleton.embedAll()
}

const coreScripts = [
    'https://polyfill.io/v3/polyfill.min.js?features=es6,fetch,URL,IntersectionObserver,IntersectionObserverEntry',
    'https://ourworldindata.org/assets/commons~17c351d0.js',
'https://ourworldindata.org/assets/commons~1814676f.js',
'https://ourworldindata.org/assets/commons~1d14d743.js',
'https://ourworldindata.org/assets/commons~3b048933.js',
'https://ourworldindata.org/assets/commons~6bf23d7e.js',
'https://ourworldindata.org/assets/commons~7008702c.js',
'https://ourworldindata.org/assets/commons~7efcf74f.js',
'https://ourworldindata.org/assets/commons~b3c4a2ff.js',
'https://ourworldindata.org/assets/commons~bc7ea7ee.js',
'https://ourworldindata.org/assets/commons~e4dfd1bd.js',
'https://ourworldindata.org/assets/commons~f075b844.js',
'https://ourworldindata.org/assets/owid.js'
]

coreScripts.forEach(url => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.onload = checkReady
    script.src = url
    document.head.appendChild(script)
})
}
embedSnippet()
