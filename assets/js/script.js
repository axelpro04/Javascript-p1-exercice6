function touch() {
    var pointure = document.getElementById('pointure').value;
    var birthDate = document.getElementById('birthDate').value;
    var resultat = (pointure*2 + 5)*50 - birthDate + 1769;
    alert(resultat);
}