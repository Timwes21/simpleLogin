

class User{
    constructor(username, password, firstName, lastName, cameraIP){
        this.username = username
        this.password = password
        this.firstName = firstName
        this.lastName = lastName
        this.cameraIP = cameraIP

    }

    validateUser(givenPassword, givenUsername){
        if (givenPassword.value === this.password && givenUsername.value === this.username){
            return 2
        }
        else{
            return 1
        }
    }
}
let user1 = new User("timwes21", "jordan18", "Timothy", "Wesley", 1762176)
let users = [user1]





let usernameInput = document.querySelector('#username')
let passwordInput = document.querySelector('#password')
let submit = document.querySelector('button')
let messageArea = document.querySelector('p')

function authenticated(users){
    let a;
    
    users.forEach((user) => {
        if (user.validateUser(passwordInput, usernameInput) === 2){
            messageArea.innerText = "Welcome"
            a = 1
        }
    })
    return (messageArea.innerText === "Welcome")?true:false
}



submit.addEventListener("click", (event) => {
    let message;
    
    
    event.preventDefault()
    
    if (usernameInput.value < 1 || passwordInput.value < 1){
        message = "You must fill out the form"
    }
    else if(authenticated(users)){
        message = "You are signed in"
        window.history.pushState({}, "", '');
        fetch('dash.html')
            .then(response => response.text())
            .then(htmlText => {
                let parser = new DOMParser()
                let doc = parser.parseFromString(htmlText, 'text/html')
                let body = doc.body.innerHTML
                document.querySelector('body').innerHTML = body
                console.log(body)
        })

    }
    else{
        message = "Username or password is incorrect"
    }
    messageArea.innerText = message 

})

console.log('mmmmmmmm');


