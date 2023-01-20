import styles from './styles.module.css'

export default function Card({
    degree = "none",
    color = "purple",
    font = "14px",
    image = "icon/personThree.png"
}) {
    return (
        <div className={styles.card_container} style={{fontSize: font,}}>
            { color === "purple" ? (
                <img src="icon/person.png" width="50px"/>
            ) :
            color ==="blue" ? (
                <img src="icon/personTwo.png" width="50px"/>
            ) : (
                <img src={image} width="50px"/>
            )}
            <p>
                {degree}
            </p>
        </div>
    )
}