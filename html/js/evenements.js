//si le bouton remove est clické on supprime l'element grand parent de cette derniere et en fait en sorte que l index de chaque ligne du tableau soit decrementé  
$(".remove").on("click", (event)=>{
    $(event.target).parents("tr").remove();
    $("span").each(function () {
        //on fait en sorte que les indexs decrementé sont celles supperieur a l'index de l'element supprimé 
        if($(event.target).parents("tr").find("span").text() < $(this).text()){
        $( this ).text($( this ).text() - 1)
        }
    })
    //decrementation de la variable gerant l'index des ligne de tableau
    num--
});

//si le bouton add est clické on affiche la partie add et on cache la partie qui affiche le tableau
$(".add").on("click", ()=>{
    $("table").hide();
    $(".addevent").show()
})
//on declare une variable qui va gerer les index des ligne du tableau 
var num = 4
//apres que le bouton add contenu dans la partie add on ajoute ue nouvelle ligne dans le tableau qui contiendera les informations ecrites
$(".addelement").on("click", ()=>{
    //on defini 2 variable qui contiennent les valeurs saisies
    var name = $(".name").val();
    var information = $("#description").val()
    //on ajoute une nouvelle ligne dans le tableau
    $("tbody").append(`
    <tr>
    <th scope="row"><span>`+num +`</span></th>
    <td class="label">`+name +`</td>
    <td class="resume">`+ information+`</td>
    <td class="d-flex justify-content-center">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <button type="button" class="btn btn-outline-danger remove">Supprimer</button>
        <button type="button" class="btn btn-outline-secondary edit">Editer</button>
      </div>
    </td>
    </tr>`);
    //on cache la partie add et on affiche le tableau
    $(".addevent").hide();
    $(".table").show()
    //on incremente l'index pour l'element prochain
    num++

    //on efface les valeurs saisie pour une prochain saisie
    $(".name").val("")  
    $("#description").val(" ")   

    //on rajoute l'event click au  nouvellement cree bouton remove
    $(".remove").last().on("click", (event)=>{
        $(event.target).parents("tr").remove();
        $("span").each(function () {
            if($(event.target).parents("tr").find("span").text() < $(this).text()){
            $( this ).text($( this ).text() - 1)
            }
        })
        num--
    });
      //on redonne l'event click au bouton nouvellement cree bouton edit
    $(".edit").last().on("click", (event)=>{
        edit_label = $(event.target).parents("tr").children("td.label")
        edit_description = $(event.target).parents("tr").children("td.resume")
        $(".name_edit").val(edit_label.html())
        $("#description_edit").val(edit_description.html())
        $(".editevent").show()
        $("table").hide()
    
    })
})

//on declare 2 variables qui correspondront au titre et information lieé u bouton edit clické
var edit_label
var edit_description
//on ajoute un evenement click au bouton edit qui editera les informations lieé au bouton
$(".edit").on("click", (event)=>{
    edit_label = $(event.target).parents("tr").children("td.label")
    edit_description = $(event.target).parents("tr").children("td.resume")
    //les informations qui seront ecrit seront deja ecris dans la zone de saisie infin que l'utilisateur puisse modifier
    $(".name_edit").val(edit_label.html())
    $("#description_edit").val(edit_description.html())
    //on cache la partie edit et on cache le tableau
    $(".editevent").show()
    $("table").hide()

})

//on ajoute un evenement click au bouton edit contenue dans la partie edit cela changera la valeur des informations souhaité
$(".editelement").on("click", ()=>{
    //on utilise les variables deja declare afin de changer les informations souhaité en les valeurs saisie par l'utilisateur
    edit_label.text($(".name_edit").val())
    edit_description.text($("#description_edit").val())
    //on cache la partie edit
    $(".editevent").hide()
    //on affiche le tableau
    $("table").show()
    
})