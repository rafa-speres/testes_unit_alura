import { somaHorasExtras, calculaDescontos } from "../index.js";

describe('Teste dos calculos de folha', () =>{
    it('Deve retornar a soma das horas extras', () =>{
        const esperado = 2500;
        const retornado = somaHorasExtras(2000, 500);
    
        expect(retornado).toBe(esperado);
    });
    
    it('Deve retornar a subtracao das horas extras', () => {
        const esperado = 2200;
        const retornado = calculaDescontos(2500, 300);
    
        expect(retornado).toBe(esperado);
    });
});
