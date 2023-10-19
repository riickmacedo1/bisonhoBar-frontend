import Link from "next/link";
import styles from "./styles.module.scss";
import { RiLogoutCircleLine } from "react-icons/ri";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/logoHeader.png" width={200} height={50} />
        </Link>

        <nav>
          <Link href="/category">Categoria</Link>

          <Link href="/product">Cardapio</Link>

          <button>
            <RiLogoutCircleLine size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
