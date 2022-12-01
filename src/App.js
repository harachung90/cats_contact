import whiskerson from './images/mr-whiskerson.png'
import felix from './images/felix.png';
import pumpkin from './images/pumpkin.png';
import fluff from './images/fluffykins.png';

import './App.css';
import Contact from "./Contact";

function App() {
    return (
        <div className="App">
            <Contact
                name="Mr. Whiskerson"
                img={whiskerson}
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                mame="Fluffykins"
                img={fluff}
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                mame="Felix"
                img={felix}
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact
                mame="Pumpkin"
                img={pumpkin}
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    );
}

export default App;
