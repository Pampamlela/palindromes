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


//=> pb avec l'année faudrait la scindée en 2 et l'inversee
date = "14/02/2011"
function isPalindrome(date){
    let dateInversee = date.split("/").reverse().join("")
    console.log("inversee " +dateInversee)
    //let dateInversee2 = dateInversee.split().reverse()
    //console.log("inverse " +dateInversee2)
    date = date.split("/").join("")
    console.log('Date '+date)
    //let tabDate = date.split("/")
    //console.log(tabDate)
    //let inverseDate = tabDate.reverse()
    //console.log(inverseDate)
    //let tabInverseDate
    if(date === dateInversee){
        //console.log(date)
        return true
    }else{
        //console.log(date)
        return false
    }
}

console.log(isPalindrome(date))
/*const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."] pr transformer une chaine de caractere en tableau et l'inverser avec .reverse
const array1 = ["one", "two", "three"];
const reversed = array1.reverse();
console.log("reversed:", reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]
// const str = "résumé";
const strReverse = str.split(/(?:)/u).reverse().join("");
// => "́emuśer"

dateInversee = date.split("").reverse().join("")*/