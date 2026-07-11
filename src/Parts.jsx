const reactDescriptions = ['Fundamental', 'Crucial', 'Core', 'Boss', 'Killer', 'Key'];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export function Header() {
    const descriptor = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

    return (
        <div id="header">
            <header>
                <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
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

export default Header;