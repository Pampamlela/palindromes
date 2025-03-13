/*Étape 1

Créer une fonction isValidDate qui prend en paramètre une date en string 
et determine si elle est valide. Pour qu'une date soit valide, 
il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.
*/

function isValidDate(date){
//on sépare la chaine de caractères, on enlève les "/"
    let partDate = date.split('/');
    console.log(partDate)

//on vérifie que la date est bien divisée en trois parties
    if (partDate.length !== 3) {
    return false;
    }
//on extraire le jour, le mois et l'année, parseInt : analyse et convertit une chaine de caractères, 
// fournie en argument, en un entier dans la base souhaitée ici : chaine de caractère avec son index[i] et la base 10
    let jour = parseInt(partDate[0], 10);
    console.log("jour " + jour)
    let mois = parseInt(partDate[1], 10) - 1; // Le mois est 0-indexé
    console.log("mois " + mois)
    let annee = parseInt(partDate[2], 10);
    console.log("année " + annee)

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
    console.log("objetDate " + objetDate)

    /*console.log("jour " + objetDate.getDate())
    console.log("mois " + objetDate.getMonth())
    console.log("année " + objetDate.getFullYear())*/
//on vérifie que la date correspond bien aux valeurs du jour, mois, année, grace à la méthode .getDate .getMonth et .getFullYear
    return objetDate.getDate() === jour && objetDate.getMonth() === mois && objetDate.getFullYear() === annee;
    console.log(objetDate.getDate)
}



console.log(isValidDate("32/01/1981"))

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



getNextPalindromes(2)

let currentDate = new Date();
console.log(currentDate); // Affiche la date et l'heure actuelles en annee-mois-jour en chiffre 


function formatDateddjjaaaa(date) {
    let annee = date.getFullYear();
    let mois = ('0' + (date.getMonth() + 1)).slice(-2); //"0" pour les 9 premiers mois, +1 car janvier est index 0, .slice(-2) pr enlever le 0 si on est sur les 10 11 et 12e mois
    let jour = ('0' + date.getDate()).slice(-2); //"0" pour les 9 premiers jours et .slice(-2) pr enlever le 0
    return `${jour}/${mois}/${annee}`;
}

let exampleDate = new Date(20203, 9, 15); //objet Date (annee, mois indexé, jour)
console.log(formatDateddjjaaaa(exampleDate)); // "15/10/2023"

function getNextPalindromes(x){
    let dateDuJour = new Date()
    console.log(dateDuJour) // affiche la date et l'heure en jour de la semaine mois en lettre, jour, annee 
    let listePalindromes = "" //liste qui se remplira avec les palindromes trouvés

    /*while(listePalindromes.length < x){
       let nouvelleDate = new Date () ++
}*/
    if(nouvelleDate === isPalindrome() true ){
        return nouvelleDate += listePalindromes
    }else{
        nouvelleDate 
    }
    
}