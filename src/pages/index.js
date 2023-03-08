import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home({ content, artists }) {
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

        {artists.map(({ id, url, title, image, imageCredits }) => (
          <div key={id}>
                <Link href={url} passHref legacyBehavior>
              <a className={styles.artist}>
                <div className={styles.artistContent}>
                  <h2 className={styles.artistTitle}>{title}</h2>
                  <button className={styles.artistButton}>Check 'em out</button>
                </div>
                <div className={styles.artistImage}>
                  <img src={image._url} />
                </div>
                <div className={styles.artistCredits}>{imageCredits}</div>
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
        title: '🖤 Heartless Records 🖤',
        text:
          'Presenting three of the most lovable bands to come out of the `70'
      },
      artists: [
        {
          id: 1,
          url: '/artist',
          title: 'Ramones',
          image: {
            _url:
              'https://media.gq-magazine.co.uk/photos/5f35064effe32218efca4f9a/16:9/w_2880%2cc_limit/20200813-ramones-08.jpg'
          },
          imageCredits: '© Ian Dickson/Shutterstock. All Rights Reserved.'
        },
        {
          id: 2,
          url: '/artist',
          title: 'Motörhead',
          image: {
            _url:
              'https://m.psecn.photoshelter.com/img-get2/I0000CJCZccaYAIo/fit=1000x750/g=G0000FxqHIJzaVZ4/Motorhead-U16095.jpg'
          },
          imageCredits: '© Adrian Boot. All Rights Reserved.'
        },
        {
          id: 3,
          url: '/artist',
          title: 'The Clash',
          image: {
            _url:
              'https://www.nme.com/wp-content/uploads/2019/11/theclash-1392x884.jpg'
          },
          imageCredits: '© Pennie Smith. All Rights Reserved.'
        }
      ]
    }
  };
}
