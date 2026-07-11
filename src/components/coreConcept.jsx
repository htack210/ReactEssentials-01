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

export default CoreConcept