from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)   # autoriser communication avec frontend

@app.route('/submit', methods=['POST'])
def submit_form():
    data = request.get_json()

    nom = data.get("nom")
    email = data.get("email")
    genre = data.get("genre")

    # Vérification simple
    if not nom or not email or not genre:
        return jsonify({"status": "error", "message": "Champs manquants"}), 400

    # Ici tu peux enregistrer dans une base ou un fichier
    print("---- NOUVELLE INSCRIPTION ----")
    print("Nom :", nom)
    print("Email :", email)
    print("Genre :", genre)
    print("-----------------------------")

    return jsonify({"status": "success", "message": "Données reçues"}), 200


if __name__ == "__main__":
    app.run(debug=True)
