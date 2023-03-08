import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Artist.module.css';

export default function Artist({
    content: { title, biography, image, imageCredits }
}) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={styles.content}>
                <div className={styles.biography}>
                    <h1 className={styles.title}>{title}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: biography
                        }}
                    />

                    <Link href="/">
                        <a className={styles.goBackButton}>Go back</a>
                    </Link>
                </div>

                <div className={styles.image}>
                    <img src={image._url} />
                    <p className={styles.imageCredits}>{imageCredits}</p>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.biography}>
                    <h2 className={styles.subtitle}>Past tour dates</h2>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Venue</th>
                                <th>Support</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sun 08 Dec 2019</td>
                                <td>ULU Live, London</td>
                                <td>Spaghetti Mayhem</td>
                            </tr>
                            <tr>
                                <td>Sat 07 Dec 2019</td>
                                <td>Brudenell Community Room, Leeds</td>
                                <td>Cupid Ate My Face</td>
                            </tr>
                            <tr>
                                <td>Fri 06 Dec 2019</td>
                                <td>Club Academy, Manchester</td>
                                <td>Death By Rice Pudding</td>
                            </tr>
                            <tr>
                                <td>Tue 03 Dec 2019</td>
                                <td>Asylum, Birmingham</td>
                                <td>John Deers Sister</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            content: {
                title: 'Ramones',
                biography:
                    'The Ramones were an American punk rock band that formed in the New York City neighborhood of Forest Hills, Queens in 1974. They are often cited as the first true punk rock group.[1][2] Despite achieving only limited commercial success initially, the band was highly influential in the United States, Brazil and most of South America, as well as Europe, including the United Kingdom, the Netherlands, Germany, Sweden and Belgium. All of the band members adopted pseudonyms ending with the surname "Ramone", although none of them were biologically related; they were inspired by Paul McCartney of the Beatles, who would check into hotels as "Paul Ramon".',
                image: {
                    _url:
                        'https://media.gq-magazine.co.uk/photos/5f35064effe32218efca4f9a/16:9/w_2880%2cc_limit/20200813-ramones-08.jpg'
                },
                imageCredits: '©Ian Dickson/Shutterstock. All Rights Reserved.'
            }
        }
    };
}