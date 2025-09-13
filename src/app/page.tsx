import Link from 'next/link';
import { Button } from '@shared';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Aqui é MFE do <Link href="/">Login!</Link> :D
        </h1>
        <span> testando aqui</span>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir para o outro projeto do mfe
          </a>
          <Button
            style={{ marginLeft: 12 }}
            onClick={() => alert('Botão compartilhado do LOGIN!')}
            label="Shared Button"
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <span> testando aqui</span>
      </footer>
    </div>
  );
}
