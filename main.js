document.addEventListener("DOMContentLoaded", () => {

    //Save Hejpa and Dejpa to local storage
    let names = ["Hejpa", "Dejpa"];
    let namesLs = names.join();   //convert arr to str for correct format for local storage
    localStorage.setItem("names", namesLs);

    // handles to elements
    let nameElement = document.querySelector("#name");
    const btn = document.querySelector(".btn");

    // helper functions. if name is in local storage do something. If not, do something else.

    function checkIfNameIsInLocalStorage(arg){
        //get from local storage
        let lsnamestuff= localStorage.getItem("names");
        // from str to arr, local storage format conversion
        lsArr = lsnamestuff.split(","); 
        
        if ( lsArr.includes(arg) ) {
            console.log("Already in ls");
            displayWelcomeBack(arg);

        } else {
            console.log("nada in local storage")
        }
    }

    function displayWelcomeBack(name){
        let welcomeBack = document.getElementById("welcome-back");
        welcomeBack.style.display = "block";
    }

    // function to compare if input name is same as in localstorage. If yes -> page "Welcome Back", if no -> "Welcome ${inputname}"


    btn.addEventListener("click", (e) => {

        let name = nameElement.value;
    
        console.log("Login name: " + name);
        
        checkIfNameIsInLocalStorage(name);
        //invoke displayWelcomeBack or displayWelcomeNew inside^

        
    })
});
