console.log("Exercices Local Storage");


const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMsg = document.getElementById("msg");

const btn = document.getElementById("btn");

btn.addEventListener("click", sendData);




let i = 0;    //counter for changing local storage Key

function sendData(e) {
    e.preventDefault();
    i = i + 1;
    const user = {
        name: inputName.value,
        email: inputEmail.value,
        msg: inputMsg.value
    }

    let keyName = "user" + i  //save local storage key to variable so it can be different
    // console.log(user);
    localStorage.setItem(keyName, JSON.stringify(user)); //use variable as the key
    let data = JSON.parse(localStorage.getItem(keyName))
    // console.log(data);
    let paragraph = document.createElement("p"); 
    paragraph.setAttribute = ("class", "text");
    document.querySelector("div").appendChild(paragraph);  
    paragraph.textContent = "You entered: " + data.name + ", " + data.email + ", " + data.msg;
    
}


const btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearLocal);

function clearLocal(e) { 
   e.preventDefault();
   localStorage.clear();
   const para = document.querySelectorAll("p");    
   for (let i = 0; i < para.length; i++) {        //To clear all <p>s where the form text is
     para[i].remove();
    
   }
}








// OBLIGATORY EXERCISES THAT WORKED:

// const btn = document.getElementById("btn");

// btn.addEventListener("click", sendData);


// function sendData(e) {
//     e.preventDefault();
//     const user = {
//         name: inputName.value,
//         email: inputEmail.value,
//         msg: inputMsg.value
//     }

//     // console.log(user);
//     localStorage.setItem("user", JSON.stringify(user));
//     let data = JSON.parse(localStorage.getItem("user"))
//     // console.log(data);
//     let paragraph = document.createElement("p");
//     paragraph.textContent = data.name + " " + data.email + " " + data.msg;
//     document.querySelector("main").appendChild(paragraph);
// }



