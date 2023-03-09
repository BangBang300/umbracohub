import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ content, events }) {
    return (
        <>
            <Head>
                <title>{content.title}</title>
            </Head>

            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.headerTitle}>{content.title}</h1>
                    <p className={styles.headerText}>{content.text}</p>
                </div>

                {events?.map(({ id, url, title, image, imageCredits }) => (
                    <div key={id}>
                        <Link href={url}>
                            <a className={styles.events}>
                                <div className={styles.eventContent}>
                                    <h2 className={styles.eventTitle}>{title}</h2>
                                    <button className={styles.eventButton}>Check 'em out</button>
                                </div>
                                <div className={styles.eventImage}>
                                    <img src={image._url} />
                                </div>
                                <div className={styles.eventCredits}>{imageCredits}</div>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}

export async function getStaticProps() {
    return {
        props: {
            content: {
                title: 'Umbraco Hub App',
                text:
                    'For reliving our social events inside and outside of the HQ!'
            },
            artists: [
                {
                    id: 1,
                    url: '/event',
                    title: 'Company day',
                    image: {
                        _url:
                            'https://media.umbraco.io/umbracohubapp/s5zd1mqt/image.png'
                    },
                    imageCredits: 'UmbracoSupport'
                },
                {
                    id: 2,
                    url: '/event',
                    title: 'CodeGarden 2023',
                    image: {
                        _url:
                            'https://media.umbraco.io/umbracohubapp/sm3nbhye/image.png'
                    },
                    imageCredits: 'UmbracoSupport'
                },
                {
                    id: 3,
                    url: '/event',
                    title: 'TownHall',
                    image: {
                        _url:
                            'https://media.umbraco.io/umbracohubapp/13upazjz/image.png'
                    },
                    imageCredits: 'UmbracoSupport'
                }
            ]
        }
    };
}