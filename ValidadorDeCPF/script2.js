class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }


    eseq() {
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }


    geraCPF() {
        const cpfSemdigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.geradigito(cpfSemdigitos);
        const digito2 = this.geradigito(cpfSemdigitos + digito1);
        this.novoCpf = cpfSemdigitos + digito1 + digito2;
    }
    geradigito(cpfSemdigitos) {
        let total = 0;
        let reverso = cpfSemdigitos.lenght + 1;

        for (let stringNumerica of cpfSemdigitos) {
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false;
        if (typeof this.cpfLimpo !== 'string') return false;
        if (this.cpfLimpo.lenght !== 11) return false;
        if (this.eseq()) return false;
        this.geraCPF();

        return this.novoCpf === this.cpfLimpo
    }
}
let Validacpf = new ValidaCPF('070.987.720-03');

if (Validacpf.valida()) {
    console.log('CPF Válido');
} else {
    console.log('CPF Inválido');
}

