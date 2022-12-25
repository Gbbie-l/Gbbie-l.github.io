const annual = document.querySelectorAll(".annually");
const month = document.querySelectorAll(".monthly");

document.querySelector("#pricing").addEventListener('change',
function(e){
    console.log("coucou")
    if(!e.target.checked){
        month.forEach(e => e.style.display= "none");
        annual.forEach(e => e.style.display = "block"); 
       
    } else{
        month.forEach(e => e.style.display = "block"); 
        annual.forEach(e => e.style.display= "none");
    }
}
 )
