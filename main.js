document.addEventListener("DOMContentLoaded", () => {

    let nameElement = document.querySelector("#name");
    const btn = document.querySelector(".btn");

    function checkName(name){

            if (name === "hejpa" || name === "dejpa") {
                console.log("Welcome back name! ")
            } else {
                console.log("Welcome new name")
            }
        }

    btn.addEventListener("click", (e) => {

        let name = nameElement.value;
    
        console.log("Login name: " + name);
        
        checkName(name);

        
    })
});
