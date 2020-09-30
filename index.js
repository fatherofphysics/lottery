var random_Result = Math.floor(Math.random() * 6) + 1; //0 to 6



document.querySelector("#generate").addEventListener("click", whenclick);

function whenclick(){

  document.querySelector("p").innerHTML = random_Result;

}

