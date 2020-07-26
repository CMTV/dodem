const devMode = !global.out;

const CONFIG = {
    devMode: devMode,
    url: devMode ? "http://localhost:8080/" : "https://dodem.ru/"
}

module.exports = CONFIG;