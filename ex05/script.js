function tamanhoNomeCompleto(nome,sobrenome) {
    return nome.length + ' '.length + sobrenome.length;
}

const tamanhoJuan = tamanhoNomeCompleto('Juan', 'Perez');

console.log( tamanhoJuan );

const tamanhoMarcelo = tamanhoNomeCompleto('Marcelo', 'Maciel');

console.log( tamanhoMarcelo );