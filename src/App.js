import './App.css';
import Rick_morty from "./rickandmorty_comp/Rick_morty";

function App() {
  return (
    <div className={'main_rick_div'}>
        2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
        https://rickandmortyapi.com/
        https://rickandmortyapi.com/api/character
        Створити 4 персонажів
        <Rick_morty
            id={'91'}
            name={'David Letterman'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/91.jpeg'}
        />
                <Rick_morty
            id={'99'}
            name={'Hepatitis C'}
            status={'Dead'}
            species={'Disease'}
            gender={'unknown'}
            image={'https://rickandmortyapi.com/api/character/avatar/99.jpeg'}
        />
                <Rick_morty
            id={'118'}
            name={'Evil Morty'}
            status={'Alive'}
            species={'Human'}
            gender={'Male'}
            image={'https://rickandmortyapi.com/api/character/avatar/118.jpeg'}
        />
       <Rick_morty
            id={'251'}
            name={'Nancy'}
            status={'Alive'}
            species={'Human'}
            gender={'Female'}
            image={'https://rickandmortyapi.com/api/character/avatar/251.jpeg'}
        />

    </div>
  );
}

export default App;
