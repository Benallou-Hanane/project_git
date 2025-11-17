        function envoyer() {
            let nom = document.getElementById("nom").value;
            let email = document.getElementById("email").value;
            let genre = document.getElementById("genre").value;

            if (nom === "" || email === "" || genre === "") {
                alert("Veuillez remplir tous les champs !");
                return;
            }

            document.getElementById("successMsg").style.display = "block";
        }
