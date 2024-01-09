
// import 'bulma/css/bulma.min.css';
import styles from './footer.module.css'


export default function Footer() {
    return (
        <footer className="footer" id={styles.footer}>
        <div className="content has-text-centered is-warning">
          <p className={styles.p}>
            <strong>Minnesota Academy of Tumbling</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
          <form action="http://www.google.com/search" method="get"> <fieldset> <input type="hidden" name="sitesearch" value="http://localhost:3000" /> <input type="text" name="q" size={31} maxLength={255}  /> <input type="submit" value="Google Search" /> </fieldset> </form>

        </div>
      </footer>
    );
}