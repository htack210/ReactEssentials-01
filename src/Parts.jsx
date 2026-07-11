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

export function MainGoal() {
    return (
        <div id="MainGoal">
            <p className="myParagraph">My main goal: Learn React in-depth and from the ground up.</p>
        </div>
    )
}

// export function CoreConcept(props) {
// Now I don't need to use 'props.' notation. It's also clearer what I am doing.
export function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default Header;