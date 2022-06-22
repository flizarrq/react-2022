import './App.css';
import Base_simp from "./simpson comp/Base_simp";

function App() {
    return (
        <div>
            {/*1. Описати всю сім'ю сімпсонів (5 персонажів)*/}

            <Base_simp name={'Bart'} surname={'Simpson'} age={'10'} info={'Bart Simpson ' +
                'is a fictional character in the American animated television series'}
                       image={'https://t.ly/3SDY'}
            />
            <Base_simp name={'Homer '} surname={'Simpson'} age={'30'} info={'Homer Jay Simpson ' +
                ' is the protagonist of the show and the father of the Simpson family. He embodies several American working' +
                ' class stereotypes: he is crude, overweight, incompetent, clumsy, thoughtless and a borderline alcoholic.'}
                       image={'https://t.ly/bXMb'}
            />
            <Base_simp name={'Marge  '} surname={'Simpson'} age={'29'}
                       info={'Marjorie Jacqueline "Marge" Simpson (née Bouvier, voiced by Julie Kavner) is the well-meaning' +
                           ' and extremely patient wife of Homer and mother of Bart, Lisa and Maggie. She often acts as the' +
                           ' voice of reason, but displays exaggerated behavior traits of stereotypical mothers' +
                           ' and takes the blatant dysfunctionality of her family for granted,[21] unlike the other family' +
                           ' members, who are aware that they are eccentric'}
                       image={'https://t.ly/ELJIG'}
            />
            <Base_simp name={'Lisa  '} surname={'Simpson'} age={'7'}
                       info={'Lisa Marie Simpson (voiced by Yeardley Smith) is the eldest daughter and middle child of the family. She is an extremely ' +
                           'intelligent 8-year-old girl, one of the most intelligent characters on the show. Lisa\'s political convictions are generally ' +
                           'socially liberal.'}
                       image={'https://t.ly/bB-x'}
            />
            <Base_simp name={'Maggie  '} surname={'Simpson'} age={'2'} info={'Margaret Evelyn Lenny "Maggie" Simpson is the youngest of the five main family ' +
                'members and is almost always seen as a baby. She has blonde spiked hair like Lisa. Her first word was "daddy", shown at one point after ' +
                'Homer tucks her in.'}
                       image={'https://t.ly/l75U'}
            />

        </div>
    );
}

export default App;
