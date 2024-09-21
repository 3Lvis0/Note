function calcul() {
    // Définit la fonction qui sera appelée lorsqu'on clique sur le bouton

    var M1 = parseFloat(document.getElementById('moyenne1').value);
    var M2 = parseFloat(document.getElementById('moyenne2').value);
    // Récupère les valeurs des moyennes et les convertit en nombres à virgule flottante

    if (isNaN(M1) || M1 < 0 || M1 > 20 || isNaN(M2) || M2 < 0 || M2 > 20) {
        alert("Les moyennes doivent être comprises entre 0 et 20.");
        return;
    }
    // Vérifie si les moyennes sont valides (entre 0 et 20) et affiche une alerte si ce n'est pas le cas

    var C1 = document.querySelector('input[name="coefficient1"]:checked');
    var C2 = document.querySelector('input[name="coefficient2"]:checked');
    // Récupère les boutons radio sélectionnés pour les coefficients

    if (!C1 || !C2) {
        alert("Veuillez sélectionner un coefficient pour chaque module.");
        return;
    }
    // Vérifie si un coefficient a été sélectionné pour chaque module

    C1 = parseInt(C1.value);
    C2 = parseInt(C2.value);
    // Convertit les valeurs des coefficients en nombres entiers

    var T1 = M1 * C1;
    var T2 = M2 * C2;
    // Calcule les totaux pondérés pour chaque module

    var T = (T1 + T2) / (C1 + C2);
    // Calcule la moyenne générale pondérée

    var mention;
    if (T < 10) {
        mention = "Mauvais";
    } else if (T < 12) {
        mention = "Moyenne";
    } else if (T < 15) {
        mention = "Bien";
    } else {
        mention = "T.Bien";
    }
    // Détermine la mention en fonction de la moyenne générale

    document.getElementById('moyenneGenerale').value = T.toFixed(2);
    // Affiche la moyenne générale arrondie à deux décimales dans le champ de texte

    document.getElementById('mention').textContent = "Avec la mention " + mention;
    // Affiche la mention dans l'élément span
}
