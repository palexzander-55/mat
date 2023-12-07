
// import 'bulma/css/bulma.min.css';
import styles from './footer.module.css'


export default function Footer() {
    return (
        <footer className="footer" id={styles.footer}>
        <div className="content has-text-centered is-primary">
          <p className={styles.p}>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
          </p>
        </div>
      </footer>
    );
}