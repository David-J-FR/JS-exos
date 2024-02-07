//création d'une classe Employe avec les différentes propriétés : 
class  Employe { 
    constructor (Nom, Prenom, DateEmbauche, PosteEntreprise, SalaireKBrutAnnuel, ServiceAssocie, Agence, enfant){

            this.Nom=  Nom;
            this.Prenom= Prenom;
            this.Date= new Date (DateEmbauche); 
            this.Poste = PosteEntreprise;
            this.Salaire = SalaireKBrutAnnuel;
            this.Service = ServiceAssocie; 
            this.Agence = Agence;
            if (this.NbAnneesEntreprise() >= 1 ) {
                this.chequeVac = "droit aux chèques vacances";
            } else {
                this.chequeVac = " n'a pas le droit aux chéques vacances";
            };
        //    console.log(this.chequeVac);
        this.enfant =  enfant;



    }

    //Dans la classe Employe, écrire une méthode permettant de savoir depuis combien d’années l'employé est dans l'entreprise:

    NbAnneesEntreprise() {
        // pour la date actuelle
        let dateActuelle = new Date();

        // je convertis la date d'embauche en objet Date et j'utilise new: 
        let dateEmbauche = new Date(this.Date);
        // console.log(dateEmbauche.getTime());
        // je calcule la différence de jours pour avoir mon nb de jours employés dans le mois:
        // let joursEmployes= dateActuelle.getDate() - dateEmbauche.getDate();
    
        //je calcule la différence de mois pour avoir mon nb de mois employés dans l'année:
        // let moisEmployes = dateActuelle.getMonth() - dateEmbauche.getMonth();
    
        //je calcule la différence d'années pour avoir mon nb d'années passées dans l'entreprise:
        let anneesEmployees = dateActuelle.getFullYear() - dateEmbauche.getFullYear();


       
        
       return anneesEmployees; 
    }

    // j'écris dans la classe Employe , les ou la fonction me permet de déduire le montant de cette prime et de donner l'ordre de transfert à la banque le jour du versement . 

    MontantPrime() {
 

let dateActuelle = new Date();
let dateEmbauche = new Date(this.Date);
let anneesEmployees = dateActuelle.getFullYear() - dateEmbauche.getFullYear();
let primeAnuelle = this.Salaire*0.05;
let primeAncien = this.Salaire* (anneesEmployees*0.02);
 let primes = new Primes(primeAnuelle,primeAncien,this.Salaire);

      
        return primes;
    } 

}