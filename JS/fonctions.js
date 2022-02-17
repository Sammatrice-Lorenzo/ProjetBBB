
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
                    $('.container')
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

function sendMail() {
    $.ajax(
        {
            method:'GET',
            url: "./PHP/sendMail.php",
            success: function(data)
            {
                $("#mail").val('')
                $("#url").val('')
                $("#check").val('')
            },
            errors: function()
            {
                alert("Erreur");
            },
        }
    );
}