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



console.log(isValidDate("08/01/1981"))

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
}


console.log("est-ce un palindrome ? " + isPalindrome("14/02/2011"))*/


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


/*function getNextPalindromes(x){
    let dateDuJour = new Date()
    console.log("dateduJour " + new Date()) // affiche la date et l'heure en jour de la semaine mois en lettre, jour, annee 
    let listePalindromes = [] //liste qui se remplira avec les palindromes trouvés

    while(listePalindromes.length < x){ //tant que la liste des palindromes est plus petite que "x"
       

    //il faut que la date soit dans le bon format

        let annee = dateDuJour.getFullYear();
        let mois = ('0' + (dateDuJour.getMonth() + 1)).slice(-2); //"0" pour les 9 premiers mois, +1 car janvier est index 0, .slice(-2) pr enlever le 0 si on est sur les 10 11 et 12e mois
        let jour = ('0' + dateDuJour.getDate()).slice(-2); //"0" pour les 9 premiers jours et .slice(-2) pr enlever le 0
        
        let dateDuJourFormatted = `${jour}/${mois}/${annee}`; // la date est au bon format  

            if(isPalindrome(dateDuJourFormatted)){ //on vérifie que la date est un palindrome
                listePalindromes.push(dateDuJourFormatted)//si c'est le cas onh l'ajoute à la liste
            }

        dateDuJour.setDate(dateDuJour.getDate()+1)//on ajoute 1 jour à la date du jour et on augmente le mois et l'année quand c'est nécessaire
}
    return listePalindromes
}

console.log("liste des dates " + getNextPalindromes(2))*/


/*Étape 4
Refactorer la fonction isPalindrome pour faire en sorte qu’elle renvoie si, ou non, une chaine de caractère est un palindrome. 
Créer ensuite une nouvelle fonction isDatePalindrome qui reprendra les spécificités du palindrome au 
format date (comme s’assurer que la date est valide) et qui appellera isPalindrome.*/

function isPalindrome(string){

    let stringInversee = "";

    for(let i=0 ; i < string.length; i++){ // une boucle pour ajouter les caractères au début
        stringInversee = string[i] + stringInversee
        console.log(stringInversee)
    }

    if(string === stringInversee){ // on compare les deux chaines de caractères
        
        return true
    }else{
        
        return false
    }
}
console.log("est-ce un palindrome ? " + isPalindrome("tortue"))
