function insert()
{
    if($("#mail").val() === ""){
        $("#form").addClass("was-validated")
        $("#email-feedback").append("Veuillez sasir l'adresse mail")
    }
    else if($("#url").val() === "")  {
        ($("#url-feedback").append("Veuillez saisir l'url")) 
        $("#form").addClass("was-validated")
    }
    else{
        check = 0
        if($("input:checked").length != 0) check = 1
    
        $.ajax(
            {
                method:'GET',
                url: "../PHP/ajout.php",
                data: "mail="+$("#mail").val()+"&url="+$("#url").val()+"&check="+check,         
                success: function(data)
                {
                    $("#mail").val('')
                    $("#url").val('')
                    $("#check").val('')
                },
                errors: function()
                {
                    $('.container')
                    alert("Erreur");
                },
            }
        );
    }
}