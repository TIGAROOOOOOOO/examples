
//  @author parzibyte 

 const app = new Vue({
    el: '#app',
    data: () => ({
        Base: "10",
        binario: "",
        octal: "",
        decimal: "",
        hexadecimal: "",
        numero: "",
        // Lo siguiente controla únicamente el mensaje de notificación
        mostrarNotificacion: false,
    }),
    methods: {
        numerotrocado() {
            this.convertordecimal(parseInt(this.numero, this.Base));
        },
        convertordecimal(numero) {
            if (!numero)
                return;
            this.binario = numero.toString("2");
            this.octal = numero.toString("8");
            this.decimal = numero.toString("10");
            this.hexadecimal = numero.toString("16");
        },

    },
    watch: {
        Base() {
            this.numerotrocado();
        },
        numero() {
            this.numerotrocado();
        }
    }
});