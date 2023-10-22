import { useContext } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";

import { AuthContext } from "../../contexts/AuthContext";

export function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <img src="/logoHeader.png" width={200} height={50} />
        </Link>

        <nav>
          <Link href="/category">Categorias</Link>

          <Link href="/product">Produtos</Link>

          <button onClick={signOut}>
            <RiLogoutCircleLine size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}
