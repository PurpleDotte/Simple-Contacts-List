

let rootPath = "https://mysite.itvarsity.org/api/ContactBook/"; //this is where you'll find a list of contacts (database/server)
let apiKey = checkApiKey();

//An API key is requested for security reasons, so that not anyone has access to the API
//the API key is your email address
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}
