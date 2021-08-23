const embedSnippet = () => {

const coreStylesheets = [
    'https://ourworldindata.org/assets/commons-css.css'
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
    if (loadedScripts === 14)
        window.MultiEmbedderSingleton.embedAll()
}

const coreScripts = [
    'https://polyfill.io/v3/polyfill.min.js?features=es6,fetch,URL,IntersectionObserver,IntersectionObserverEntry',
'https://ourworldindata.org/assets/commons-js~17c351d0.js',
'https://ourworldindata.org/assets/commons-js~1814676f.js',
'https://ourworldindata.org/assets/commons-js~1d14d743.js',
'https://ourworldindata.org/assets/commons-js~34e3d95a.js',
'https://ourworldindata.org/assets/commons-js~6bf23d7e.js',
'https://ourworldindata.org/assets/commons-js~7008702c.js',
'https://ourworldindata.org/assets/commons-js~7efcf74f.js',
'https://ourworldindata.org/assets/commons-js~81ba8019.js',
'https://ourworldindata.org/assets/commons-js~b3c4a2ff.js',
'https://ourworldindata.org/assets/commons-js~bc7ea7ee.js',
'https://ourworldindata.org/assets/commons-js~d91c6bc2.js',
'https://ourworldindata.org/assets/commons-js~f075b844.js',
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
