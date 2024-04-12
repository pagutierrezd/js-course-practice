let votos = []

function votar(candidatos){
    votos.push(candidatos)
}

function contarVotos(){
    let conteo = {};

    for (let i = 0; i < votos.length; i++){
        let voto = votos[i];
        if(conteo[voto]=== undefined){
            conteo[voto] = i;
        }else{
            conteo[voto]++;
        }
    }
    return conteo;
}

votar("Candidato 1");
votar("Candidato 2");
votar("Candidato 1");
votar("Candidato 3");
votar("Candidato 3");

console.log(contarVotos());