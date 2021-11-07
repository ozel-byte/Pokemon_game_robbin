import getPokemonOptions, { getPokemons, getPokemonNames } from "@/helpers/getPokemonOptions";


describe( 'getPokemonOptions', () => {
    test( 'Debe regresar un arreglo de numeros', () => {
        const pokemon = getPokemons();

        expect( pokemon.length).toBe(650);
    });

    test( 'debe de retornar un arreglo de 4 elementos con nombre ', async () => {
        const [p1,p2,p3,p4] = await getPokemonNames([1,2,3,4]);
        expect(p1).toStrictEqual({name: 'bulbasaur', id: 1});
        
    });
    test( 'getPokemonOptions debe de retornar un arreglo mezclado', async () => {
        const pokemons = await getPokemonOptions();
        expect( pokemons.length).toBe(4);
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            }
        ])
    });
})