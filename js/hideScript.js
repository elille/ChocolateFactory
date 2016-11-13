//Set all hidden divs to hidden in JS so the data is still available if the JS fails.
var hiddendivs = document.getElementsByClassName("hide");
for (let i=0;i<hiddendivs.length;i++){
hiddendivs[i].style.display ='none';
}
//Handle clicks on charities' headers
document.getElementById("charitiesList").addEventListener("click", function(e){
  clicked = e.target.id;
  switch(clicked){
  case("commProg1Hdr"):
    toggleVisibleId(commProg1);
    break;
  case("commProg2Hdr"):
    toggleVisibleId(commProg2);
    break;
  case("sponsProg1Hdr"):
    toggleVisibleId(sponsProg1);
    break;
  case("sponsProg2Hdr"):
    toggleVisibleId(sponsProg2);
    break;
}
});
//toggle visibility of an element
function toggleVisibleId(id){
id.style.display = id.style.display == 'inline' ? 'none' : 'inline';
}
