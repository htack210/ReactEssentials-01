import logo from './assets/react-core-concepts.png';
import components from './assets/components.png';
import jsxui from './assets/jsx-ui.png';
import statemgmt from './assets/state-mgmt.png';
import config from './assets/config.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Boss', 'Killer', 'Key'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function Header() {
    const descriptor = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

    return (
        <div id="header">
            <header>
                <img src={logo} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {descriptor} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    );
}

export default Header;