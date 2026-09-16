let idade = Number(prompt("Digite sua idade:"));

if (idade >= 16) {
alert ("Você está apto a participar da maratona!")

} else if(idade >= 60) {
    
    
    let atestado = prompt("Você tem um atestado?");
   if (atestado == "sim"){
    alert ("Você está apto a participar da maratona!")}
    else if (atestado == "não") {
    alert ("Você não está apto a participar da maratona!")}
} else {
    alert ("Você não está apto a participar da maratona!")
}

    
     let distancia = Number(prompt("Digite a distância que você pretende correr"));
if (distancia == 5 || distancia == 10 || distancia == 21 || distancia == 42) {

    let tempo = Number(prompt("Digite o tempo percorrido"));
    
   let pace =  tempo / distancia;
    alert (`Seu pace é: ${pace}`)

} 
    else {
    alert ("Distancia inválida! As distâncias disponiveis são 5, 10, 21 e 42 km")}

    




    











