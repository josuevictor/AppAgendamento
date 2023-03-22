const date = new Date(); // Cria uma nova instância do objeto Date
date.setDate(23); // Define o dia para o primeiro dia do mês atual

const diasDaSemana = [1, 2, 3, 4, 5, 6, 7];
const diaDaSemana = diasDaSemana[date.getDay()]; // Obtém o nome do dia da semana

console.log(diaDaSemana);
