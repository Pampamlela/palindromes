/*Étape 1

Créer une fonction isValidDate qui prend en paramètre une date en string 
et determine si elle est valide. Pour qu'une date soit valide, 
il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
*/

function isValidDate(date){
//on sépare la chaine de caractères
    let partDate = date.split('/');

//on vérifie que la date est bien divisée en trois parties
    if (partDate.length !== 3) {
    return false;
    }
//on extraire le jour, le mois et l'année, parseInt : analyse et convertit une chaine de caractères, 
// fournie en argument, en un entier dans la base souhaitée ici : chaine de caractère avec son index[i] et la base 10
    let jour = parseInt(partDate[0], 10);
    let mois = parseInt(partDate[1], 10) - 1; // Le mois est 0-indexé
    let annee = parseInt(partDate[2], 10);

//on vérifie que le jour, mois et année sont des valeurs valides
    if (isNaN(jour) || isNaN(mois) || isNaN(annee)) {
    return false;
    }    
//on vérifie que l'année est dans l'intervalle [1000, 9999]
    if (annee < 1000 || annee > 9999) {
        return false;
    }
//on crée un objet Date avec les parties extraites
    let objetDate = new Date(annee, mois, jour);

//on vérifie que la date correspond bien aux valeurs du jour, mois, année, grace à la méthode .getDate .getMonth et .getFullYear
    return objetDate.getDate() === jour && objetDate.getMonth() === mois && objetDate.getFullYear() === annee;
}



console.log(isValidDate("31/11/1981"))

/*Etape 2

Créer une fonction isPalindrome qui prend une date en string en paramètre et 
retourne un booléen qui indique si la date est un palindrome. Si la date est invalide, retourner false.

Exemple de date palindrome: 11/02/2011. Les caractères / ne sont pas pris en compte.

isPalindrome("11/02/2011") // true
isPalindrome("03/04/2001") // false */


// 1ere solution
//date = "11/02/2011"
/*function isPalindrome(date){

    date = date.split("/").join("") // on elève les "/" et on joint les chiffres
    console.log('Date '+date)
    
    let dateInversee = date.split("").reverse().join("") //on inverse l'ordre des chiffres et on les joint
    console.log("2 " + dateInversee)
  
    if(date === dateInversee){
        //console.log(date)
        return true
    }else{
        //console.log(date)
        return false
    }
}*/


//console.log("est-ce un palindrome ? " + isPalindrome("11/02/2011"))


/*// Renvoie un mot écrit à l'envers
function inverser(mot) {
    var motInverse = "";
 
    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }
 
    return motInverse;
}*/

//2nd solution

function isPalindrome(date){

    date = date.split("/").join("")  // on elève les "/" et on joint les chiffres

    let dateInversee = "";

    for(let i=0 ; i < date.length; i++){ // une boucle pour ajouter les chiffres au début du nombre
        dateInversee = date[i] + dateInversee
        console.log(dateInversee)
    }

    if(date === dateInversee){ // on compare les deux nombres
        //console.log(date)
        return true
    }else{
        //console.log(date)
        return false
    }
}
console.log("est-ce un palindrome ? " + isPalindrome("14/02/2011"))

/*Étape 3

Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui. La fonction prendra le x en paramètre.

getNextPalindromes(8)
22/02/2022
03/02/2030
13/02/2031
23/02/2032
04/02/2040
14/02/2041
24/02/2042
05/02/2050*/

function getNextPalindromes(x){
    let dateDuJour = Date()
    console.log(dateDuJour)
}

getNextPalindromes(2)