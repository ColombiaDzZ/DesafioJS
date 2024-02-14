function calcularNivel(vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel;

if (vitorias < 100){
    nivel = "Ferro"
} else if (vitorias >= 101 && vitorias <= 200) {
    nivel = "Bronze";
} else if (vitorias >= 201 && vitorias <= 400) {
    nivel = "Prata";
} else if (vitorias >= 401 && vitorias <= 600) {
    nivel = "Ouro";
} else if (vitorias >= 601 && vitorias <= 800) {
    nivel = "Platina";
} else if (vitorias >= 801 && vitorias <= 1000) {
    nivel = "Diamante";
} else if (vitorias >= 1001 && vitorias <= 1200) {
    nivel = "Mestre";
} else if (vitorias >= 1201 && vitorias <= 1400) {
    nivel = "Ascendente";
} else if (vitorias >= 1401 && vitorias <= 1600) {
    nivel = "Imortal";
} else if (vitorias >= 1601 && vitorias <= 1800) {
    nivel = "Radiante";
    
   }
   return [saldoVitorias, nivel];
}

let vitorias = 195;
let derrotas = 100;
let [saldoVitorias, nivel] = calcularNivel(vitorias, derrotas)
console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////