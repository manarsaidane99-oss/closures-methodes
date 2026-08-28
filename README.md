# closures-methodes

### 0. Nos closures sont :
```javascript
function creerCompte(initiale) {
 var solde = initiale;
return {
retirer : function(montant) {
 if (solde - montant >= 0) {
 solde = solde - montant;
 return “ Voici votre argent : $ “ +
montant;
 }
 return “solde insuffisants.”
},
deposer: function(montant) {
 solde = solde + montant;
 return "Votre solde est : $" + solde;
} }}

```



### 1. Modifier la fonction creerCompte vue en cours afin que l’objet retourné : 
contienne une clé supplémentaire appelée verifierSolde,
dont la valeur est une fonction qui ne prend aucun argument
et retourne une chaîne représentant le solde actuel.
Vous devez pouvoir l’utiliser comme ceci :

```javascript
function creerCompte() {
    // TODO : votre code ici
}
```

Exemple :
```javascript

var compte = creerCompte(100);
compte.verifierSolde(); // => "Votre solde est : $100"
compte.deposer(50);
compte.verifierSolde(); // => "Votre solde est : $150"

```


### 2.  Revenons à l’exercice du compteur.
a - Actuellement, makeCounter nous permet seulement de compter vers le haut.
Et si on voulait aussi compter vers le bas ?

Modifier makeCounter pour qu’elle retourne un objet contenant deux clés :
up et down, chacune ayant une fonction comme valeur.
up doit augmenter le compteur,
et down doit diminuer le compteur.

b - Donner à votre compteur une capacité de réinitialisation (reset) également,
qui remet le compteur à sa valeur initiale.

```javascript
function makeCounter() {
    // TODO : votre code ici
}
```

Exemple :
```javascript
var x = makeCounter(4);
x.up();    // 5
x.up();    // 6
x.down();  // 5
x.reset(); // 4
```



### 3.  écrire une classe Tv qui possède les propriétés suivantes :
channelNumber ==> c’est le numéro de la chaîne actuellement affichée à l’écran, valeur par défaut = 0
et les méthodes suivantes :
watch ==> ne prend aucun paramètre et affiche un message avec le numéro de la chaîne courante
changeChannel ==> prend un channelNumber (nombre) et change la chaîne vers ce numéro

```javascript
function Tv() {
    // TODO : votre code ici
}
```
Exemple :
```javascript
var maTv = Tv()
maTv.channelNumber //=> 0 (elle commence sur la chaîne 0 au début)
 maTv.watch() //=> "vous regardez maintenant la chaîne #0"
maTv.changeChannel(5) //=> "changement vers la chaîne #5"
maTv.channelNumber //=> 5
maTv.watch() //=> "vous regardez maintenant la chaîne #5"
```




