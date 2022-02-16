
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
        check = 0
        if($("input:checked").length != 0) check = 1
    
        $.ajax(
            {
                method:'GET',
                url: "./PHP/ajout.php",
                data: "mail="+$("#mail").val()+"&url="+$("#url").val()+"&check="+check,         
                success: function(data)
                {
                    sendMail();
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

function bonmail(mailteste)
{
	var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
	return(reg.test(mailteste));
}

function urlLocate(url) {
    // var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
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
                $('.container')
                alert("Erreur");
            },
        }
    );
}