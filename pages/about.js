import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import data from "@/data/employee.json"
import EmployeeCard from "@/components/EmployeeCard"
import styles from "@/styles/About.module.css"

export default function About() {

    const [employee, setEmployee] = useState([...data])

    return (
        <>
            <Head>
                <title>Employees</title>
                <meta name="description" content="Friends employee page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.description}>
                    <Link className={styles} href="/">Home</Link>
                    <div>
                        <a
                            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            By{' '}
                        <Image
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className={styles.vercelLogo}
                            width={100}
                            height={24}
                            priority
                        />
                        </a>
                    </div>
                </div>

                <div className={styles.center}>
                    <h1>Meet The Team</h1>
                </div>
                <div className={styles.grid}>
                    <div className={styles.employee}>
                        {employee && employee.map((info, index) => {
                            return (
                                <EmployeeCard
                                    image={info.image}
                                    name={info.name}
                                    career={info.career}
                                    hobbies={info.hobby}
                                />
                            )
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}