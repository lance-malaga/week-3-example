import Image from 'next/image'
import styles from './styles.module.css'

export default function EmployeeCard({
    image = "",
    name = "",
    career = "",
    hobbies = ""
}) {
    return (
        <div className={styles.employee_container}>
            <Image
                src={image}
                alt={name}
                width={250}
                height={250}
                priority
            />
            <div>
                <h2>{name}</h2>
                <p><strong>Career</strong>: <span>{career}</span></p>
                <p><strong>Interests</strong>: <span>{hobbies}</span></p>
            </div>
        </div>
    )
} 