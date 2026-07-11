export default function TabButton({ children }) {
    function handleClick() {
        console.log("Hello! Button clicked!")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}