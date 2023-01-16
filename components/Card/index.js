export default function Card({
    degree = "none",
    color = "purple",
    font = "14px",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: font}}>
            { color === "purple" ? (
                <img src="icon/person.png" width="50px"/>
            ) :
            color ==="blue" ? (
                <img src="icon/personThree.png" width="50px"/>
            ) : (
                <img src={image} width="50px"/>
            )}
            <li>
                {degree}
            </li>
        </div>
    )
}