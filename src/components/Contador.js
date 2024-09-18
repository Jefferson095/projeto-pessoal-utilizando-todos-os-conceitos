
class Tempo {
    constructor(valorInicial) {
        this.valor = valorInicial;
    }
}

class Dia extends Tempo {}
class Hora extends Tempo {}
class Minuto extends Tempo {}
class Segundo extends Tempo {}

class ContadorRegressivo {
    constructor(dataFinal) {
        this.dataFinal = new Date(dataFinal);
        this.dias = new Dia(0);
        this.horas = new Hora(0);
        this.minutos = new Minuto(0);
        this.segundos = new Segundo(0);
        this.elementoContador = document.getElementById('contador');

        this.atualizar();
        setInterval(() => this.atualizar(), 1000);
    }

    atualizar() {
        const agora = new Date();
        const diferenca = this.dataFinal - agora;
        const totalSegundos = Math.floor(diferenca / 1000);

        this.dias.valor = Math.floor(totalSegundos / (3600 * 24));
        this.horas.valor = Math.floor((totalSegundos % (3600 * 24)) / 3600);
        this.minutos.valor = Math.floor((totalSegundos % 3600) / 60);
        this.segundos.valor = totalSegundos % 60;

        this.elementoContador.textContent = `${this.dias.valor}d ${this.horas.valor}h ${this.minutos.valor}m ${this.segundos.valor}s`;
    }
}

