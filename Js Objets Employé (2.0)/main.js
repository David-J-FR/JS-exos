//Je vais créer les variables de mes agences qui seront des instances de ma class Agence:
let agence1 = new Agence("afpa","11 rue des cerisiers", 54000, "Nancy", "restaurant d'entreprise");
let agence2 = new Agence("Pole Emploi","1 rue des bretelles", 57000, "Metz", "ticket restaurant");
let agence3 = new Agence("InterEmploi","55 rue de la formation", 57500, "Metz", "restaurant d'entreprise");
let agence4 = new Agence("Mission Locale","", 54600, "Pompey", "ticket restaurant");
 

//Création d'instances (variables) pour les enfants des employés par rapport à la class Enfant : 
let enfant1 = new Enfant ("Edouard", 12);
let enfant2 = new Enfant ("Elise", 15);
let enfant3 = new Enfant ("Luc", 8);
let enfant4 = new Enfant ("Lucas", 17);
let enfant5 = new Enfant ("Alexis", 16);
let enfant6 = new Enfant ("Camille", 4);


//Je vais créer des tableaux pour attribuer les enfants que j'ai créé juste avant aux employés:
let enf_Employe1 = [enfant2, enfant4];
let enf_Employe2 = [enfant1];
let enf_Employe3 = [enfant5];
let enf_Employe4= [enfant6];
let enf_Employe5= [enfant3];


 //je définit une nouvelle instance de ma classe Employe 
  let Employe1 = new Employe ("Hugue", "Jean", new Date(1998,8,6), "directeur en second", 100000, "direction générale", agence4, enf_Employe1);
  let Employe2 = new Employe ("Rabby", "Jacob", new Date(2012,10,20), "trésorier", 60000, "Ressources humaines", agence3, enf_Employe2);
  let Employe3 = new Employe ("Kennnedy", "François", new Date(2022,12,8), "co-directeur", 150000, "direction générale", agence2, enf_Employe3);
  let Employe4 = new Employe ("Kofe", "John", new Date(2020,2,17), "intérimaire", 12000, "intérim CDD", agence1, enf_Employe4);
  let Employe5 = new Employe ("Winchester", "Dean", new Date(1999,9,19), "chef secteur", 35000, "direction locale", agence1, enf_Employe5);
  
//création d'une instance Directeur pour la classe directeur :
  let Directeur1 = new Directeur ("Donatello", "Christophe", new Date(1989,5,6), "PDG", 200000, "direction générale",agence4 );

console.log(Directeur1.MontantPrimePDG());
 


 //consigne: Afin de créer un reporting d’informations sur les employés de l’entreprise, établir une liste (array)d’employés en y ajoutant les 5 objets

 let TableauEmployes =  [Employe1, Employe2, Employe3, Employe4, Employe5];


// Chaque année, des chèques Noël sont distribués aux enfants des employés. Le montant du chèque Noël dépend de l’âge des enfants :

 for (let z = 0; z < TableauEmployes.length; z++) {

    let nb_cheque_20 = 0;
    let nb_cheque_30 = 0;
    let nb_cheque_50 = 0;

   for (let indexEnfant = 0; indexEnfant < TableauEmployes[z].enfant.length; indexEnfant++) {
    
    if ((TableauEmployes[z].enfant[indexEnfant].ageEnfant) <= 10) {
        nb_cheque_20 ++;
       console.log("L'employé " + TableauEmployes[z].Nom + " " + TableauEmployes[z].Prenom + " va avoir le droit à " + nb_cheque_20 + " chèque(s) de 20 euros");
    } 
    
    if ((TableauEmployes[z].enfant[indexEnfant].ageEnfant) >= 11 && (TableauEmployes[z].enfant[indexEnfant].ageEnfant) <= 15  ) {
        nb_cheque_30 ++;
        console.log("L'employé " + TableauEmployes[z].Nom + " " + TableauEmployes[z].Prenom + " va avoir le droit à " + nb_cheque_30 + " chèque(s) de 30 euros");
    }

    if ((TableauEmployes[z].enfant[indexEnfant].ageEnfant) >= 16  && (TableauEmployes[z].enfant[indexEnfant].ageEnfant) <= 18  ) {
        nb_cheque_50 ++;
        console.log("L'employé " + TableauEmployes[z].Nom + " " + TableauEmployes[z].Prenom + " va avoir le droit à " + nb_cheque_50 + " chèque(s) de 50 euros");
    }

   }
 }





//Je demande à la console de me donner le nb d'années dans l'entreprise de l'employé 3 :
  console.log(Directeur1.NbAnneesEntreprise()) ;


     //je vais demander qu'il m'indique dans la console le salaire après avoir perçu les primes de tous les employés:
    //donc je fais appel à ma fonction du MontantPrime
    Employe1.MontantPrime();
    Employe2.MontantPrime();
    Employe3.MontantPrime();
    Employe4.MontantPrime();
    Employe5.MontantPrime();

     //Pour afficher le nombre d’employés de l’entreprise : 
 let nb_employes = TableauEmployes.length;
 console.log("L'entreprise a en son sein "+ nb_employes + " employés.");


  //Pour afficher toutes les informations des employés par ordre alphabétique sur le nom et le prénom

//je dis que dans mon tableau employé, il va le trier selon les noms/prénoms. Je choisis les paramètres a et b 
//je lui dit qu'à chaque fois fois, il va comparer l'ordre alpha pour les noms/ prénoms
// de a avec ceux de b 
//maintenant que j'ai déterminé mon sort au dessus, je vais lui dire de le faire pour chaque élément du tableau
// je vais utiliser le foreach pour parcourir tout mon tableau, j'utilise empl comme index pour parcourir le tabl
// et j'affiche les résultats dans la console avec les logs


function triNomPren(){
    
    TableauEmployes.sort((a, b) => 
       (a.Nom + a.Prenom).localeCompare(b.Nom + b.Prenom));   
    
    
        TableauEmployes.forEach(function(empl){
            console.log(empl.Nom + " "+ empl.Prenom);
           
        });
        
    };
        
    triNomPren();
    
    
    
    
            
    
    
    
    //même principe, je fais une autre fonction mais pour insérer les services:
    function triServNomPren(){
    
    TableauEmployes.sort((a,b) => 
    
    (a.Service + a.Nom + a.Prenom).localeCompare(b.Service + b.Nom + b.Prenom));
    
    
        TableauEmployes.forEach(function(parcoursTab) {
            console.log(parcoursTab.Service + " " + parcoursTab.Nom + " " + parcoursTab.Prenom );
    
        });
    };
    
    triServNomPren();
    
    
    //afficher le montant total du coût que représentent tous les salariés (masse salariale) calculé à partir des salaires et des primes.
    // Je mets une variable vide pour la masse salariale .
    // je mets une boucle qui va parcourir tout le tableau des employés via un index et qui va ajouter la masse salariale à chaque tour.
    let MasseSalar= 0;   
    for (let index = 0; index < TableauEmployes.length; index++) {
    
        let dateActuelle = new Date();
        let prime = TableauEmployes[index].MontantPrime();
       MasseSalar +=  prime.totalPrime+prime.salaire  ;
       //normalement c'est le 30/10 (11 car ça va de 0 à 11) mais je mets la date du jour pour pouvoir tester
       if (dateActuelle.getDate() == 8 && dateActuelle.getMonth()==10) {
                    console.log("Le salaire de "+ TableauEmployes[index].Prenom +" "+ TableauEmployes[index].Nom + " après les deux primes sera de "+ prime.totalPrime + " euros.");
                }
               
    }
        console.log(MasseSalar); 
        
        
        
                
       
    
    // création d'une fonction pour indiquer quel mode de restauration dispose chaque employé selon son entreprise : 
        function MRestauEmployes(){
    
            for (let j = 0; j < TableauEmployes.length; j++) {
                
                console.log("L'employé "+ TableauEmployes[j].Nom + " " + TableauEmployes[j].Prenom + " se trouve dans l'agence "+ TableauEmployes[j].Agence.nomAgence + " et possède le mode de restauration: "+ TableauEmployes[j].Agence.modeRestauration ) ;
                
               
            }
            } ;
    
            MRestauEmployes();
    
       
    // création d'une fonction pour indiquer chaque employé a le droit ou non à des chèques vacances selon si il a un an d'ancienneté :
            function ChequesVac(){
                
                for (let x = 0; x < TableauEmployes.length; x++) {
                    if (TableauEmployes[x].NbAnneesEntreprise() >= 1) {
                        console.log("L'employé "+ TableauEmployes[x].Nom + " " + TableauEmployes[x].Prenom + " a le droit à des chèques vacances.");
                    } else {
                        console.log("L'employé "+ TableauEmployes[x].Nom + " " + TableauEmployes[x].Prenom + " n'a pas le droit à des chèques vacances.");
                    }
                    
                };
            };
    
            ChequesVac();


      
        
        
        