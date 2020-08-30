module.exports = {
    preset: "jest-puppeteer",
    globals: {
        //URL: "https://angular-6-registration-login-example.stackblitz.io/register"
        //URL: "https://losestudiantes.co/"

        URL: "http://localhost:4200/account/register"
    },
    testMatch: [
        "**/*.test.js"
    ],
    verbose: true
}
