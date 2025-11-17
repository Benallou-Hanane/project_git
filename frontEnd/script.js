function envoyer() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;
    let genre = document.getElementById("genre").value;

    fetch("http://127.0.0.1:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nom: nom,
            email: email,
            genre: genre
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            document.getElementById("successMsg").style.display = "block";
        } else {
            alert("Erreur : " + data.message);
        }
    })
    .catch(error => console.error(error));
}