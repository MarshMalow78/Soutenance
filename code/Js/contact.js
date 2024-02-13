function validateForm() {
    var username = document.forms["profile-form"]["username"].value;
    var Birth = document.forms["profile-form"]["Birth"].value;
    var house = document.forms["profile-form"]["house"].value;
    var country = document.forms["profile-form"]["country"].value;
    var profilePic = document.forms["profile-form"]["profile-pic"].value;
    var description = document.forms["profile-form"]["description"].value;

    if (username === "" || username.length < 5) {
        alert("Veuillez entrer un nom d'utilisateur valide (au moins 5 caractères).");
        return false;
    }

    if (Birth === "") {
        alert("Veuillez sélectionner une date de naissance.");
        return false;
    }

    if (house === "") {
        alert("Veuillez sélectionner une maison à Poudlard.");
        return false;
    }

    if (country === "") {
        alert("Veuillez sélectionner un pays de résidence.");
        return false;
    }

    // Ajoutez des conditions supplémentaires si nécessaire pour les autres champs

    if (profilePic === "") {
        alert("Veuillez sélectionner une photo de profil.");
        return false;
    }

    if (description === "" || description.length < 50) {
        alert("Veuillez entrer une description. De plus de 50 caractères.");
        return false;
    }

    // Si toutes les conditions sont remplies, le formulaire est considéré comme valide
    alert("Formulaire soumis avec succès!");
    return true;
}