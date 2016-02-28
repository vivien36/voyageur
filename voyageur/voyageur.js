
villes = [
 ["Paris", 48.856578, 2.351828],
 ["Nantes", 47.21806, -1.55278],
 ["Lyon", 45.759723, 4.842223], 
 ["Bruxelles", 50.846667, 4.3525],
 ["Bordeaux", 44.837912, -0.579541],
 ["Toulouse", 43.604482, 1.443962],
 ["Montpellier", 43.611944, 3.877222],
 ["Marseille", 43.296346, 5.369889],
 ["Tours", 47.393611, 0.689167], 
 ["Lille", 50.637222, 3.063333],
 ["Strasbourg", 48.573392, 7.752353]
]

function myFunction() {

compteur = 0
plusPetit = 50000
plusGrand = 5000



while (compteur <= 500000){
  
//Distance entre les 2 premières villes du tableau
	km1et2=Math.acos(Math.sin(villes [0][1]*Math.PI/180)*Math.sin(villes [1][1]*Math.PI/180) + Math.cos(villes [0][1]*Math.PI/180)*Math.cos(villes [1][1]*Math.PI/180)*Math.cos(villes [1][2]*Math.PI/180-villes [0][2]*Math.PI/180) ) * 6371
	
//Distance entre la 2ème et 3ème ville du tableau
	km2et3=Math.acos(Math.sin(villes [1][1]*Math.PI/180)*Math.sin(villes [2][1]*Math.PI/180) + Math.cos(villes [1][1]*Math.PI/180)*Math.cos(villes [2][1]*Math.PI/180)*Math.cos(villes [2][2]*Math.PI/180-villes [1][2]*Math.PI/180) ) * 6371
	
//Distance entre la 3ème et 4ème ville du tableau
	km3et4=Math.acos(Math.sin(villes [2][1]*Math.PI/180)*Math.sin(villes [3][1]*Math.PI/180) + Math.cos(villes [2][1]*Math.PI/180)*Math.cos(villes [3][1]*Math.PI/180)*Math.cos(villes [3][2]*Math.PI/180-villes [2][2]*Math.PI/180) ) * 6371
	
//Distance entre la 4ème et 5ème ville du tableau
	km4et5=Math.acos(Math.sin(villes [3][1]*Math.PI/180)*Math.sin(villes [4][1]*Math.PI/180) + Math.cos(villes [3][1]*Math.PI/180)*Math.cos(villes [4][1]*Math.PI/180)*Math.cos(villes [4][2]*Math.PI/180-villes [3][2]*Math.PI/180) ) * 6371
	
//Distance entre la 5ème et 6ème ville du tableau
	km5et6=Math.acos(Math.sin(villes [4][1]*Math.PI/180)*Math.sin(villes [5][1]*Math.PI/180) + Math.cos(villes [4][1]*Math.PI/180)*Math.cos(villes [5][1]*Math.PI/180)*Math.cos(villes [5][2]*Math.PI/180-villes [4][2]*Math.PI/180) ) * 6371
	
//Distance entre la 6ème et 7ème ville du tableau
	km6et7=Math.acos(Math.sin(villes [5][1]*Math.PI/180)*Math.sin(villes [6][1]*Math.PI/180) + Math.cos(villes [5][1]*Math.PI/180)*Math.cos(villes [6][1]*Math.PI/180)*Math.cos(villes [6][2]*Math.PI/180-villes [5][2]*Math.PI/180) ) * 6371
	
//Distance entre la 6ème et 8ème ville du tableau
	km7et8=Math.acos(Math.sin(villes [6][1]*Math.PI/180)*Math.sin(villes [7][1]*Math.PI/180) + Math.cos(villes [6][1]*Math.PI/180)*Math.cos(villes [7][1]*Math.PI/180)*Math.cos(villes [7][2]*Math.PI/180-villes [6][2]*Math.PI/180) ) * 6371
	
//Distance entre la 8ème et 9ème ville du tableau
	km8et9=Math.acos(Math.sin(villes [7][1]*Math.PI/180)*Math.sin(villes [8][1]*Math.PI/180) + Math.cos(villes [7][1]*Math.PI/180)*Math.cos(villes [8][1]*Math.PI/180)*Math.cos(villes [8][2]*Math.PI/180-villes [7][2]*Math.PI/180) ) * 6371
	
//Distance entre la 9ème et 10ème ville du tableau
	km9et10=Math.acos(Math.sin(villes [8][1]*Math.PI/180)*Math.sin(villes [9][1]*Math.PI/180) + Math.cos(villes [8][1]*Math.PI/180)*Math.cos(villes [9][1]*Math.PI/180)*Math.cos(villes [9][2]*Math.PI/180-villes [8][2]*Math.PI/180) ) * 6371
	
//Distance entre la 10ème et 11ème ville du tableau
	km10et11=Math.acos(Math.sin(villes [9][1]*Math.PI/180)*Math.sin(villes [10][1]*Math.PI/180) + Math.cos(villes [9][1]*Math.PI/180)*Math.cos(villes [10][1]*Math.PI/180)*Math.cos(villes [10][2]*Math.PI/180-villes [9][2]*Math.PI/180) ) * 6371
	
//Distance entre la 11ème et 1ère ville du tableau
	km11et1=Math.acos(Math.sin(villes [10][1]*Math.PI/180)*Math.sin(villes [0][1]*Math.PI/180) + Math.cos(villes [10][1]*Math.PI/180)*Math.cos(villes [0][1]*Math.PI/180)*Math.cos(villes [0][2]*Math.PI/180-villes [10][2]*Math.PI/180) ) * 6371
	
	
//calcul de la distance totale dans l'ordre du tableau
	distanceT= km1et2 + km2et3 + km3et4 + km4et5 + km5et6 + km6et7 + km7et8 + km8et9 + km9et10 + km10et11 + km11et1
	
	distanceB = km1et2 + km2et3 + km3et4 + km4et5 + km5et6 + km6et7 + km7et8 + km8et9 + km9et10 + km10et11 + km11et1
	
	distanceG = km1et2 + km2et3 + km3et4 + km4et5 + km5et6 + km6et7 + km7et8 + km8et9 + km9et10 + km10et11 + km11et1
    
compteur += 1


//condition pour ne garder que le le plus court parcours trouvé
if (distanceT < plusPetit){
plusPetit = distanceT
itineraire = villes[0][0] + " " + villes[1][0] + " " + villes[2][0] + " " + villes[3][0] + " " + villes[4][0] + " " + villes[5][0] + " " + villes[6][0] + " " + villes[7][0] + " " + villes[8][0] + " " + villes[9][0] + " " + villes[10][0] + " " + villes[0][0]
ville1 = "distance entre " +(villes[0][0])+" et "+(villes[1][0])+": "+Math.round(km1et2)+" km"
ville2 = "distance entre " +(villes[1][0])+" et "+(villes[2][0])+": "+Math.round(km2et3)+" km"
ville3 = "distance entre " +(villes[2][0])+" et "+(villes[3][0])+": "+Math.round(km3et4)+" km"
ville4 = "distance entre " +(villes[3][0])+" et "+(villes[4][0])+": "+Math.round(km4et5)+" km"
ville5 = "distance entre " +(villes[4][0])+" et "+(villes[5][0])+": "+Math.round(km5et6)+" km"	
ville6 = "distance entre " +(villes[5][0])+" et "+(villes[6][0])+": "+Math.round(km6et7)+" km"
ville7 = "distance entre " +(villes[6][0])+" et "+(villes[7][0])+": "+Math.round(km7et8)+" km"
ville8 = "distance entre " +(villes[7][0])+" et "+(villes[8][0])+": "+Math.round(km8et9)+" km"
ville9 = "distance entre " +(villes[8][0])+" et "+(villes[9][0])+": "+Math.round(km9et10)+" km"
ville10 = "distance entre " +(villes[9][0])+" et "+(villes[10][0])+": "+Math.round(km10et11)+" km"
ville11 = "distance entre " +(villes[10][0])+" et "+(villes[0][0])+": "+Math.round(km11et1)+" km"

}else if (distanceG > plusGrand){
    plusGrand=distanceG
}else{
	plusPetit=plusPetit
}

//mélange du tableau
melange();

}
//Affichage
$resultat1.innerHTML = (ville1);
$resultat2.innerHTML = (ville2);
$resultat3.innerHTML = (ville3);
$resultat4.innerHTML = (ville4);
$resultat5.innerHTML = (ville5);
$resultat6.innerHTML = ( ville6);
$resultat7.innerHTML = ( ville7);
$resultat8.innerHTML = ( ville8);
$resultat9.innerHTML = ( ville9);
$resultat10.innerHTML = ( ville10);
$resultat11.innerHTML = ( ville11);
$resultat12.innerHTML = "longueur du parcours de base: "+Math.round(distanceB)+" km";
$resultat13.innerHTML = "longueur du parcours optimisé: "+Math.round(plusPetit)+" km";
$resultat14.innerHTML = "Parcours optimisé: " +( itineraire);
$resultat15.innerHTML = "Parcours le plus long obtenu: " +Math.round( plusGrand)+" km";   
    $resultat14.style.color='red';
    $resultat13.style.color='green';
    $resultat12.style.color='green';
    $synthese.style.border='2px solid blue';
    function melange(){

for(var position=villes.length-1; position>=1; position--){
	
	//hasard reçoit un nombre entier aléatoire entre 0 et position
	var hasard=Math.floor(Math.random()*(position+1));
	
	//Echange
	var sauve=villes[position];
	villes[position]=villes[hasard];
	villes[hasard]=sauve;

}
}
}
$synthese = document.getElementById("synthese");
$resultat1 = document.getElementById("resultat1");
$resultat2 = document.getElementById("resultat2");
$resultat3 = document.getElementById("resultat3");
$resultat4 = document.getElementById("resultat4");
$resultat5 = document.getElementById("resultat5");
$resultat6 = document.getElementById("resultat6");
$resultat7 = document.getElementById("resultat7");
$resultat8 = document.getElementById("resultat8");
$resultat9 = document.getElementById("resultat9");
$resultat10 = document.getElementById("resultat10");
$resultat11 = document.getElementById("resultat11");
$resultat12 = document.getElementById("resultat12");
$resultat13 = document.getElementById("resultat13");
$resultat14 = document.getElementById("resultat14");
$resultat15 = document.getElementById("resultat15");
