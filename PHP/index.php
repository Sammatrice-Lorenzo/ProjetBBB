<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Big Blue Button</title>
        <script src="../JS/fonctions.js"></script>
        <script src="../JQuery/JQuery_3.5.1.js"></script>
    </head>
<body>

<?php
$retour = mail($_POST['mail'],$_POST['url']);
if ($retour)
echo '<p>Votre message a bien été envoyé.</p>';
?>

    <div class="container">

        <div class="card text-center mt-5">
            <div class="card-header">
                Big Blue Button Récuperation Vidéo 
            </div>
            <div class="card-body">
                <div class="contanier">
                    <form id="form" action="" class="">
                        <div class="mb-3">
                            <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Email"  aria-describedby="email" required>
                            <div id="email-feedback" class="invalid-feedback">
                            </div>
                        </div>
                        <div class="mb-3">
                            <input type="url" class="form-control" id="url" placeholder="Url" aria-describedby="url-feedback" required>
                            <div id="url-feedback" class="invalid-feedback">
                            </div>
                        </div>
                        <div class="mb-3 form-check">
                            <input id="check" type="checkbox" class="form-check-input">
                            <label class="form-check-label" data="0">Mémoriser l'adresse mail a des fin commerciales </label>
                        </div>
                    </div>
                </form>
                <button class="btn btn-primary"  onclick="insert();">Sauvergarder</button>
            </div>
        </div>  
    </div>
</body>
</html>