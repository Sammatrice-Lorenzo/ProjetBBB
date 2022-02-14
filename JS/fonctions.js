function Insert(mail, url, check)
{
    check.attr('')
    console.log(check)
    // if()
    console.log(check.prop('checked'))
    console.log("aa")
    $.ajax(
        {
            method:'GET',
            url: "../PHP/ajout.php",
            data: "mail="+mail+"&url="+url+"&check="+check,         
            success: function(data)
            {
                console.log(mail)
                // $("#mail").empty()
                // $("#url").empty()
            },
            errors: function()
            {
                console.log("aaa")
                $('.container')
                alert("Erreur");
            },
        }
    );
}