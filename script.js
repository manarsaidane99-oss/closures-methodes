function creerCompte(initiale) {
 var solde = initiale;
return {
retirer : function(montant) {
 if (solde - montant >= 0) {
 solde = solde - montant;
 return " Voici votre argent"+montant
 }
 return "solde insuffisants"
},
deposer: function(montant) {
 solde = solde + montant;
 return "Votre solde est : $" + solde
} ,
verifierSolde: function(){
  return "votr solde actuel est : $"+ solde
}

}}
let compte = creerCompte(100);
console.log(compte.verifierSolde())
console.log(compte.deposer(50))
console.log(compte.verifierSolde())

function makeCounter(n) {
  let initial=n
  return {
    up: function(){
      n++
      return n
    },
    down:function(){
      n--
      return n
    },
    reset: function(){
      return initial
    }
  }
}
let x=makeCounter(4)
console.log(x.up())    
console.log(x.up())  
console.log(x.down())
console.log(x.reset())

function Tv() {
    let channelNumber=0
    return {
      watch: function (){
        return "vous regardez maintenant la chaine"+channelNumber
      },
      changeChannel :function (x){
        channelNumber=x
        return "changement vers la chaine"+ x
      }
    }
}
let maTv = Tv()
console.log(maTv.watch() )
console.log(maTv.changeChannel(5) )
console.log(maTv.watch()) 
