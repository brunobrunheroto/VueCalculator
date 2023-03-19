/**
 * Arquivo: src/components/calculadora/calculadora.js
 * Data: 19/03/2023
 * Author: Bruno Brunheroto Contessoto
 * Descrição: arquivo responsável por tratar toda a lógica da Calculadora.
 */

export default {
    data () {
        return {
            valorCorrente: '',
            numeroAnterior: null,
            operador: null,
            operadorClicado: false
        }
    },
    methods: {
        limpar () {
            this.valorCorrente = ''
        },
        sinal () {
            this.valorCorrente = this.valorCorrente.charAt(0) === '-'
            ? this.valorCorrente.slice(1)
            : `-${this.valorCorrente}`
        },
        porcentagem () {
            this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`
        },
        juntarNumeros (numero) {
            if (this.operadorClicado) {
            this.valorCorrente = ''
            this.operadorClicado = false
            }
    
            this.valorCorrente = `${this.valorCorrente}${numero}`
        },
        ponto () {
            if (this.valorCorrente.indexOf('.') === -1) {
            this.juntarNumeros('.')
            }
        },
        setarValor () {
            this.numeroAnterior = this.valorCorrente
            this.operadorClicado = true
        },
        resultado () {
            this.valorCorrente = `${this.operador(
            parseFloat(this.numeroAnterior),
            parseFloat(this.valorCorrente)
            )}`
            this.numeroAnterior = null
        },
        // Quatro operações
        somar () {
            this.operador = (num1, num2) => num1 + num2
            this.setarValor()
        },
        diminuir () {
            this.operador = (num1, num2) => num1 - num2
            this.setarValor()
        },
        multiplicar () {
            this.operador = (num1, num2) => num1 * num2
            this.setarValor()
        },
        dividir () {
            this.operador = (num1, num2) => num1 / num2
            this.setarValor()
        }
    }
}