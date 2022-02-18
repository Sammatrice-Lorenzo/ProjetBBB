/**
 * Function qui va permettre d'appeler le ficheir php pour envoyer le data récupeé et insérer les données dans la bdd
 */
function insert()
{
    $("#email-feedback").empty()
    $("#url-feedback").empty()
    var verifMail = bonmail($("#mail").val())
    var verifUrl = urlLocate($("#url").val())

    if($("#mail").val() === "" || !verifMail){
        $("#form").addClass("was-validated")
        $("#email-feedback").append("Veuillez sasir l'adresse mail")
    }
    else if($("#url").val() === "")  {
        $("#form").addClass("was-validated")
        $("#url-feedback").append("Veuillez saisir l'url")
    }
    else{
        $("#form").removeClass("was-validated")
     
        approbation = 0
        webcam = 0
        ecran = 0
        slides = 0

        //On vérifie les si les checkbox on été sélectionné
        if($("#check").is(':checked')) approbation = 1
        if($("#check-webcam").is(':checked')) webcam = 1
        if($("#check-ecran").is(':checked')) ecran = 1
        if($("#check-slides").is(':checked')) slides = 1
    
        $.ajax(
            {
                method:'GET',
                url: "./PHP/ajout.php",
                data: "mail="+$("#mail").val()+"&url="+$("#url").val()+"&check="+approbation+"&webcam="+webcam+"&ecran="+ecran+"&slides="+slides,         
                success: function(data)
                {
                    sendMail();
                    removeData()
                    
                    $("#mail").val('')
                    $("#url").val('')
                    $("#check").val('')

                    approbation = $("#check").prop('checked', false)
                    webcam = $("#check-webcam").prop('checked', false)
                    ecran = $("#check-ecran").prop('checked', false)
                    slides = $("#check-slides").prop('checked', false)
                },
                errors: function()
                {
                    alert("Erreur");
                },
            }
        );
    }
}

function bonmail(mail)
{
	var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
	return(reg.test(mail));
}

function urlLocate(url) {
    var reg = new RegExp('/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g');
    return (reg.test(url));
}

/**
 * Function qui va appeler le script de envoie de mail
 */
function sendMail() {
    $('.toast-body').empty()

    $.ajax(
    {
        method:'GET',
        url: "./PHP/sendMail.php",
        success: function(data)
        {
            $('.toast-body').append("L'envoie du mail est en cours")
            $(".toast").toast("show");
            commande() //Appelle de la fonction Commande()
        },
        errors: function()
        {
            alert("Erreur");
        },
    })
}

/**
 * Fonction qui va permettre d'appeler la page php pour effacer le mail si cela respecte bien les condictions
 */
function removeData() {
    $.ajax(
    {
        url:"./PHP/effaceMail.php",
        success: function()
        {
            $("#mail").val('')
            $("#url").val('')
        },
        error:function()
        {
            alert("Erreur sur l'appel d'effacement ");
        }
    });
}

function refesh(){
    setInterval(function(){
        removeData();
    }, 2 * 60 * 3600 * 12)
}

/**
 * Fonction qui permet d'appeler la page pour éxecuter la commande
 */
function commande(){
    $.ajax
    (
        {
            url: "./PHP/bash.php",
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