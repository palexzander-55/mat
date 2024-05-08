
// import 'bulma/css/bulma.min.css';
import Link from 'next/link';
import styles from './footer.module.css'


export default function Footer() {
    return (
        <footer className="footer" id={styles.footer}>
        <div className="content has-text-centered is-warning">
          <p className={styles.p}>
            <strong>Minnesota Academy of Tumbling</strong> 
          </p>
          <ol>
            <Link href={'/events'}>Events</Link>
            <Link href={'/classes/schedule'}>Class Schedule</Link>
            <Link href={'/about'}>About Us</Link>
            <Link href={'/team'}>Team</Link>
          </ol>

          <form action="http://www.google.com/search" method="get"> <fieldset> <input type="hidden" name="sitesearch" value="http://localhost:3000" /> <input type="text" name="q" size={31} maxLength={255}  /> <input type="submit" value="Google Search" /> </fieldset> </form>

        </div>
      </footer>
    );
}