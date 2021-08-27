/*Taco Farm Practice Project*/

//event listner on the div fo rthe click event
document.getElementById("button").addEventListener("click", addTaco);

//global variable that starts tacoCount at zero
let tacoNum = 0;
//write the zero value to tacoNum into the <span> element
document.getElementById("tacoCount").textContent = tacoNum;

//defination of the addTaco function
function addTaco(){
    // increment the tacoNum value by one
    tacoNum++;
    //analyze how many tacos w currently have 
    if(tacoNum <= 10){
        //add a taco img into the document 
        let newImg = document.createElement("img");
        newImg.setAttribute("src", "tacos.png");
        document.getElementById("tacoFarm").appendChild(newImg);
        //update the tacoCount of the document
        document.getElementById("tacoCount").textContent = tacoNum;
    }//end of if statement
    else{
        document.getElementsByTagName("h1")[0].textContent = "Why so many tacos?";
        document.getElementById("button").removeEventListener("click", addTaco);
    }
}//end of addTaco function