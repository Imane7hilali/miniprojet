//lorsque l'utilisateur clicke sur le lien contenu dans l'un des cartes informations on cache le volet 3,
//et on change la class du volet2 de col-ms-9 (width 75%) a col-ms-12 (width 100%)
$(".card-link").on("click", ()=>{
    $(".volet3").hide();
    $(".volet2").attr("class" , "volet2 col-ms-12")
})


//si l'un des elements du menu de navigations est clické on affiche le volet 3 et on rechange la class du volet 2 en col-ms-9 (width 75%)
$(".nav-item").on("click", ()=>{
    $(".volet3").show();
    $(".volet2").attr("class" , "volet2 col-ms-9")
}) 


//on utilise la fonction toggle de bootstrap afin d'afficher ou de cacher le footer or les informations supplementaire
$(".button-info-sup").on("click", ()=>{
    $("footer").collapse('toggle');
})

