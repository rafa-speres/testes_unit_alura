import { somaHorasExtras, calculaDescontos } from "../index.js";

test('Deve retornar a soma das horas extras', () =>{
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
});

test('Deve retornar a subtracao das horas extras', () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 300);

    expect(retornado).toBe(esperado);
});