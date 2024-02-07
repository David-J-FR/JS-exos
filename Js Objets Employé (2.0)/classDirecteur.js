class Directeur extends Employe {


   
        MontantPrimePDG() {
 

    let dateActuelle = new Date();
    let dateEmbauche = new Date(this.Date);
    let anneesEmployees = dateActuelle.getFullYear() - dateEmbauche.getFullYear();
    let primeAnuelle = this.Salaire*0.07;
    let primeAncien = this.Salaire* (anneesEmployees*0.03);
     let primes = new Primes(primeAnuelle,primeAncien,this.Salaire);
    
     
          
            return primes;
        } ;
          
    

};

  
