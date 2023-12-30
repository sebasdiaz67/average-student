function calcularPromedio() {
    const numeroMaximoNotas = 3;
    let promedio = 0;
    let nota1 = 10;
    let nota2 = 10;
    let nota3 = 1;
    promedio = (nota1 + nota2 + nota3) / numeroMaximoNotas;
    let mensaje = '';
    if (promedio >= 7) {
        mensaje = 'Nancy, aprobaste con un promedio de ' + promedio.toFixed(2);
    } else {
        mensaje = 'Nancy, reprobaste con un promedio de ' + promedio.toFixed(2);
    }
    console.log(mensaje);
}