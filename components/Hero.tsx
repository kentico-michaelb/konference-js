import Image from 'next/image'
import styles from '../styles/Hero.module.css'


export default function Hero({
    title,
    image,
    dateFrom,
    dateTo,
    location }:{
        title: string,
        image: string,
        dateFrom: any,
        dateTo: any,
        location: string  
    }
) {

    return (
        <div className={styles.bannerContainer}>
            <Image
                className={styles.bannerImage} 
                src={image}
                height={1024}
                width={1536}
                alt={title}
            />
            <div className={styles.bannerText}>
                <h1 className={styles.title}>{title}</h1>
                <h2>{dateFrom} - {dateTo}</h2>
                <h3>{location}</h3>
            </div>
        </div>
    )
}