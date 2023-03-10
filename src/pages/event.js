import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Event.module.css';

export default function Event({
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
                title: 'Company Day 2022',
                biography:
                    'Company day 2022, was held in Odense Zoo, food was provided by Umbraco as a token of appreciation for all the hard work that we do everyday.',
                image: {
                    _url:
                        'https://media.umbraco.io/umbracohubapp/s5zd1mqt/image.png'
                },
                imageCredits: 'something'
            }
        }
    };
}