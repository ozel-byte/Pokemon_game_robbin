import {shallowMount,mount} from '@vue/test-utils';
import PokemonPage from '@/pages/PokemonPage';


describe( 'pokemonPage', () => {
    let wrapper;


    beforeEach( () => {
        wrapper=shallowMount(PokemonPage);
    });

    test( 'debe de hacer match con el snapshot', () => {
        expect( wrapper.html() ).toMatchSnapshot();
    });
    test( 'debe de llamar mixPokemonArr al montar', () => {
        const mixpokemonarray = jest.spyOn( PokemonPage.methods, 'mixPokemonArray');
        const wrapper = shallowMount(PokemonPage);
        expect(mixpokemonarray).toHaveBeenCalled();
    });
    test( 'debe de hacer match con el snapshot cuando cargan los pokemons', () => {
        const wrapper = shallowMount(PokemonPage,{
            data(){
                return {
                    pokemonArr: [
                        {name: 'bulbasaur', id: 1},
                        {name: 'ivysaur', id:   2},
                        {name: 'venusaur', id:  3},
                        {name: 'charmander', id: 4}
                    ],
                    pokemon: null,
                    showPokemon: false,
                    message: "",
                    showAnser: false,   
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    });

    test('debe de mostrar los componentes de PokemonPicture y PokemonOptions', () => {

        //PokemonPicture debe de existir
        const wrapper =  shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: [
                        {name: 'bulbasaur', id: 1},
                        {name: 'ivysaur', id:   2},
                        {name: 'venusaur', id:  3},
                        {name: 'charmander', id: 5}
                    ],
                    showPokemon: false,
                    message: "",
                    pokemon: {
                        name: 'charmander',
                        id: 5
                    },
                    showAnser: false, 
                }
            }
        });
        console.log(wrapper.html());
        const t = wrapper.findComponent("pokemon-img-stub");
        expect(t.exists()).toBeTruthy();
        //PokemonOptions debe de existir

        expect(wrapper.findComponent("pokemon-opcion-stub").exists()).toBeTruthy();
        //PokemonPicture atrribute pokemoinid = 5
        console.log(t.attributes('pokemonid'));
        expect(t.attributes('pokemonid')).toBe('5')
        //PokemonOptions tenga atrribute pokemons tobe true
        console.log(wrapper.findComponent('pokemon-opcion-stub').attributes());
        expect(wrapper.findComponent('pokemon-opcion-stub').attributes('pokemons')).toBeTruthy()

    });

    test( ' Pruebas con checkAnswer', async () => {
        const wrapper =  shallowMount(PokemonPage, {
            data(){
                return{
                    pokemonArr: [
                        {name: 'bulbasaur', id: 1},
                        {name: 'ivysaur', id:   2},
                        {name: 'venusaur', id:  3},
                        {name: 'charmander', id: 5}
                    ],
                    showPokemon: false,
                    message: "",
                    pokemon: {
                        name: 'charmander',
                        id: 5
                    },
                    showAnser: false, 
                }
            }
        });

       await wrapper.vm.checkAnswer(5);

       expect( wrapper.find('h2').exists()).toBeTruthy();
       expect(wrapper.vm.showPokemon).toBe(true);
       expect(wrapper.find('h2').text()).toBe(`Respuesta correcta charmander`)
    });
});