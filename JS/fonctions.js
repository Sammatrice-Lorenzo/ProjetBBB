function insert()
{
    var verifMail = bonmail($("#mail").val())
    if($("#mail").val() === ""){
        $("#form").addClass("was-validated")
        $("#email-feedback").append("Veuillez sasir l'adresse mail")
    }
    else if($("#url").val() === "")  {
        $("#url-feedback").append("Veuillez saisir l'url")
        $("#form").addClass("was-validated")
    }
    else if(!verifMail) {
        $("#mail-feedback").append("Veuillez saisir une adresse mail")
        $("#form").addClass("was-validated")
    }
    else if(!urlLocate($("#url").val())){
        $("#url-feedback").append("Veuillez saisir l'url")
        $("#form").addClass("was-validated")
        $("#url-feedback").empty() 
    }
    else{
        $("#form").removeClass("was-validated")
        check = 0
        if($("input:checked").length != 0) check = 1
    
        $.ajax(
            {
                method:'GET',
                // url: "../PHP/ajout.php",
                url: "./PHP/ajout.php",
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

function bonmail(mailteste)
{
	var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
	return(reg.test(mailteste));
}

function urlLocate(url) {
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    return(regexp.test(url))  
}