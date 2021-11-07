import { shallowMount } from "@vue/test-utils";
import PokemonImg from "@/components/PokemonImg";
describe('pokemonImg', () => {

    test('Dbe hacer snapshot', () => {
        const wrapper = shallowMount(PokemonImg, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();

    });

    test('Deb de mostrar la imagen oculta', () => {
        const wrapper = shallowMount(PokemonImg, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        });

        const [img1, img2] = wrapper.findAll('img');
        expect(img1.exists()).toBeTruthy();
        expect(img2).toBe(undefined);
        expect(img1.classes('hidden-pokemon')).toBeTruthy();
        expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg');
    })
    test('Debe de mostart la imagen de pokemon si showPokemon esta en true', () => {
        const wrapper = shallowMount(PokemonImg, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        });
        const img1 = wrapper.find('img');
        expect(img1.exists()).toBeTruthy();
        expect(img1.classes('fade-in')).toBeTruthy();
        console.log(img1.attributes('src'));
       
  
    });
});