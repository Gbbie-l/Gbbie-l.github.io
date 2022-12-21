const ratings = document.querySelectorAll('.rating_vote');

document.querySelector("#btn_submit").addEventListener('click',
function(){

    for (var radio of ratings){
        if (radio.checked) {    
            //alert(radio.value);
            document.querySelector("#rating-number").innerHTML = radio.value;
            document.querySelector("#container_form_rating").remove();
            document.querySelector(".container_thank").style.display = "block"; 
        }}                   
}
)

/*------- get radio button data method forEach ------- */
// ratings.forEach(element => {
//     element.addEventListener('click',
//     function(e) {
//         alert(e.target.getAttribute('value'))
//     })  
    
// });