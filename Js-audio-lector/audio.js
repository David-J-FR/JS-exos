let playlist=[
    {
        song : 'Hold_On_a_Minute.mp3',
        name : 'Hold On Minute',
        singer : 'Ray Flowers'
    },

   {
        song : 'Cartoon_Hoedown.mp3',
        name : "Cartoon Hoedown",
        singer : "Media Right Productions"
    },

   {
        song:'Blue_Skies.mp3',
        name : 'Blue Skies',
        singer : 'Louis Armstrong & Ella Fitzgerald'
    },

  {
        song : 'Earthy_Crust.mp3',
        name : 'Earthy',
        singer : 'Jingle Punks'
    }, ];
// let est pour déclarer sa variable, playlist est le nom de la variable. Ici , c'est un tableau avec des indices de 0 à 1 qui 
//sont les deux musiques 

let index=0;

function init() {      //on initie une fonction initiale qui ira dans le document chercher l'élément qui sera
	//nommé par l'id lecteur donc dans notre html , l'id lecteur correspond à l'audio 
	
	document.getElementById('lecteur').src=playlist[index].song;  //dans le document, je fais appel via le .getElementById à l'id
	//qui a pour non lecteur donc l'audio, et pour savoir quel son les pistes audio donc on rajoute .src pour 
	//insérer un lien ici le tableau qui a pour nom playlist et qui commence à l'indice 0 qui est la première musique.

}



// le paused permet de mettre le booleen en true et false, ainsi si le media est en play , le booléen sera sur false et 
// s'il est pause, il sera sur true 
function lecture() {
	if (document.getElementById('lecteur').paused==true) {   //la boucle if avec le .paused permet de voir si la vidéo est égale à true alors 
		document.getElementById('lecteur').play();	// .. il lancera play car on a dit qu'avec .paused, si la vidéo est en pause elle est sur true 
	} else {
		document.getElementById('lecteur').pause(); //sinon, cela veut dire que .paused==false donc que la vidéo est déjà sur play
		//par conséquent, si la vidéo est sur le play, l'action d'appuyer sur le bouton entrainera une pause
	}
	
}

function volumemoins() {
	// si le lecteur audio a son volume qui, de base , fixé à la valeur (1) donc aux dixièmes grâce à .toFixed
	//est supérieur à 0 (=donc qu'il reste du volume à baisser), alors [...] 
	if (document.getElementById('lecteur').volume.toFixed(1)>0) 
	
	{
		document.getElementById('lecteur').volume-=0.1; //[...] alors le volume baissera de 0.1 en 0.1
		
		document.getElementById('rangevolume').value=document.getElementById('lecteur').volume;
	} //ici on agit sur l'id rangevolume qui est dans le html la barre de volume comprise entre 0 et 1 par step
	//de 0.1 en 0.1 et qui a une valeur de 1 initiale. Sa valeur sera ainsi égale à la valeur de l'id lecteur
	//qui lui aura changé par l'action juste au dessus.
}

function volumeplus() {
	if (document.getElementById('lecteur').volume.toFixed(1)<1) //dans ma fonction volumeplus , si le volume qui est fixé
	// à 1 est inférieur à 1, cela veut dire que le volume n'est pas au max, donc que l'on peut toujours
	// augmenter la valeur du son jusqu'à atteindre 1
	
	{
		document.getElementById('lecteur').volume+=0.1;
		//si c'est bien le cas et qu'il reste la possibilité d'augmenter le volume car .volume fixed à 1 est < à 1
		//alors notre volume augmentera de 0.1 en 0.1 jusqu'à la limite fixée
		document.getElementById('rangevolume').value=document.getElementById('lecteur').volume;
	} // cette ligne est pour la barre rangevolume qui prendra donc la valeur de l'id lecteur en volume
	//qui sera définit juste au dessus donc si le volume remplit les conditions et augmente, alors la range
	//prendra aussi cette valeur et augmentera aussi  
}

function volumechange() {
	document.getElementById('lecteur').volume=document.getElementById('rangevolume').value;
}
//ici, le volume de la piste audio de l'id lecteur prendra la valeur de la range de volume 


function pistesuivante() {
	if (index == playlist.length-1) { 	//pour que quand la piste suivante est nulle car on est au bout de la playlist, cela lance la première
		//musique de la playlist
		index= -1;  // je mets -1 car quand j'appuie sur suivant de base, l'index prend +1 donc si jamais repartais à index=0
		//.. se serait déjà l'audio d'après car il aura prit +1
		
	}
	
	index++;
	document.getElementById('lecteur').src=playlist[index].song;
	lecture()



	
}

function pisteprecedente (){

	if (index == 0){   //si l'index est égale à 0 cad qu'il est à la première piste audio, alors l'index reprendra la 
	index= playlist.length; //valeur de la dernière piste cad le playlist.lenght

}

	index--;   // si on appuie sur précédent, l'index recule de 1 en 1 donc ça lance la piste audio précédente
	document.getElementById('lecteur').src=playlist[index].song;   // traduction : la piste audio de l'id lecteur aura pour source playlist[index]
	lecture()
}


function tempsaudio(){  //je vais par cette fonction retrouver le nombre de secondes qu'il y a dans l'audio 
	//quand je bouge le curseur cad dans le html (oninput='')
	document.getElementById('lecteur').currentTime=document.getElementById('tempsmusique').value
//le currentTime me permets de retrouver le nb de secondes de mon audio qui est dans le lecteur et je lui dit qu'il prendra la 
//valeur de notre range 
}

function tempstotal(){ //je veux pouvoir faire en sorte que la durée de ma range s'adapte à toutes les durées des pistes audio quand elle est modifiée car sans cela
	// la durée est tout le temps la même
	document.getElementById('tempsmusique').setAttribute('max',document.getElementById('lecteur').duration);
}
//dans tempsmusique qui est la range , je lui donne comme attribut max la durée de l'élément audio qui se trouve
//dans l'id  lecteur 

