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
                    removeData()
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

function removeData() {
    $.ajax
    (
        {
            url:"../PHP/effaceMail.php",
            success: function()
            {
                $("#mail").val('')
                $("#url").val('')
            },
            error:function()
            {
                alert("Erreur sur l'appel d'effacement ");
            }
        }
    );
}

function refesh(){
    setInterval(function(){
        removeData();
    }, 2 * 60 * 3600 * 12)
}
function commande(){
    $.ajax
    (
        {
            url: "../PHP/script.php",
            success: function()
            {
                $("#mail").val('')
                $("#url").val('')
            },
            error:function()
            {
                alert("Erreur sur l'appel de commande ");
            }
        }
    );
}