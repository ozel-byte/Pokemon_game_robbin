import {shallowMount} from '@vue/test-utils'
import PokemonOpcion from '@/components/PokemonOpcion';

describe( 'pokemonOptions', () => {

    let wrapper;

    beforeEach(()=>{
        wrapper = shallowMount(PokemonOpcion, {
            props:{
                pokemons: [
                    {name: 'bulbasaur', id: 1},
                    {name: 'ivysaur', id:   2},
                    {name: 'venusaur', id:  3},
                    {name: 'charmander', id: 4}
                ]
            }
        })
    })
    test( 'debe ser match', () => {
       console.log(wrapper.html());

       expect(wrapper.html()).toMatchSnapshot();
    });

    test( ' debe mostrar  las 4 opciones correctamente', () => {
        const app = wrapper.findAll("li");
        expect(app.length).toBe(4);
        const [p1,p2,p3,p4] = app;
        expect(p1.text()).toBe("bulbasaur");
        expect(p2.text()).toBe("ivysaur");
        expect(p3.text()).toBe("venusaur");
        expect(p4.text()).toBe("charmander");
    })

    test( 'debe de emitir "selection" con sus respectivos parametros al hacer click', () => {
        const [li1,li2,li3,li4] = wrapper.findAll("li");
        console.log("Buenas");
       
        li1.trigger("click");
        li2.trigger("click");
        li3.trigger("click");
        li4.trigger("click");
        console.log(wrapper.emitted('selectionPokemon'));
        console.log(wrapper.emitted('selectionPokemon')[0]);
         expect(wrapper.emitted('selectionPokemon').length).toBe(4);
        expect(wrapper.emitted('selectionPokemon')[0]).toEqual([1]);
        expect(wrapper.emitted('selectionPokemon')[1]).toEqual([2]);
        expect(wrapper.emitted('selectionPokemon')[2]).toEqual([3]);
        expect(wrapper.emitted('selectionPokemon')[3]).toEqual([4]);
    })
});