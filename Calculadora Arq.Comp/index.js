function btnCalcular() {

    var decimal = Number(inp_numero.value);

    let octal = decimal.toString(8);
    resul_oct.innerHTML = `<span><b>${octal}</b></span>`;

    let hexadecimal = decimal.toString(16);
    resul_hex.innerHTML = `<span><b>${hexadecimal}</b></span>`;

    let binary = decimal.toString(2);
    resul_bin.innerHTML = `<span><b>${binary}</b></span>`;

    if(decimal == 0) {
        alert(`Digite um número maior que Zero no campo abaixo`)
    }
}