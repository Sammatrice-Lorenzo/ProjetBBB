<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Big Blue Button</title>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="./JS/fonctions.js"></script>
        <script src="./JQuery/JQuery_3.5.1.js"></script>
    </head>
    <body>
        <div class="container">
            <div class="card text-center mt-5">
                <div class="card-header">
                    Big Blue Button Récupération Vidéo 
                </div>
                <div class="card-body">
                    <div class="contanier">
                        <div class="toast align-items-center offset-4 mt-0 text-white bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">
                            <div class="d-flex">
                                <div class="toast-body"></div>
                                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                        </div>
                        <form id="form" class="">
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
                            <div  class="row">
                                <div class="mb-3">
                                    <input id="check" type="checkbox" class="input" value="1">
                                    <label class="label" data="0">Mémoriser l'adresse mail à des fins commerciales</label>
                                </div>
                                <div class="mb-3">
                                    <input id="check-webcam" type="checkbox" class="input">
                                    <label class="label" data="0">WebCam</label>
                                </div>
                                <div class="mb-3">
                                    <input id="check-ecran" type="checkbox" class="input">
                                    <label class="label" data="0">Partage d'écran</label>
                                </div>
                                <div class="mb-3">
                                    <input id="check-slides" type="checkbox" class="input">
                                    <label class="label" data="0">Slides</label>
                                </div>

                            </div>
                        </form>
                        <button type="submit" class="btn btn-primary"  onclick="insert();">Sauvergarder</button>
                    </div>
                </div>
            </div>  
        </div>
    </body>
</html>