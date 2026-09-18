var idade = Number(prompt("Digite sua idade:"));

if (idade < 16) {

    alert("Reprovado na Etapa 1");

}
else {

    var aprovado = true;

    // ETAPA 2
    if (idade >= 60) {

        var atestado = prompt("Você tem um atestado?");

        if (atestado != "sim") {
            alert("Reprovado na Etapa 2");
            aprovado = false;
        }
    }

    // ETAPA 3
    if (aprovado) {

        var distancia = Number(prompt("Digite a distância:"));

        if (distancia != 5 && distancia != 10 &&
            distancia != 21 && distancia != 42) {

            alert("Reprovado na Etapa 3");
            aprovado = false;
        }
    }

    // ETAPA 4
    if (aprovado) {

        var tempo = Number(prompt("Digite o tempo percorrido:"));

        if (tempo <= 0) {

            alert("Digite um tempo válido!");
            aprovado = false;

        }
        else {

            var pace = tempo / distancia;

            alert("Seu pace é: " + pace.toFixed(2));

            if (distancia == 5 || distancia == 10) {

                if (pace <= 5) {
                    alert("Seu rank é: Elite");
                }
                else if (pace <= 7) {
                    alert("Seu rank é: Competitivo");
                }
                else {
                    alert("Seu rank é: Amador");
                }

            }
            else {

                if (pace <= 5) {
                    alert("Seu rank é: Elite");
                }
                else if (pace <= 6.5) {
                    alert("Seu rank é: Competitivo");
                }
                else {
                    alert("Seu rank é: Amador");
                }
            }

            // ETAPA 5
            console.log("===== RESUMO =====");
            console.log("Idade: " + idade);
            console.log("Distância: " + distancia);
            console.log("Tempo: " + tempo);
            console.log("Pace: " + pace.toFixed(2));

            alert("Inscrição concluída!");

            // ETAPA 6
            if (pace <= 5) {

                var premio = prompt("Você quer concorrer à premiação?");

                if (premio == "sim") {
                    alert("Você está concorrendo à premiação!");
                }
            }
        }
    }
}




    











