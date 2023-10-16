import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.png";

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

import styles from "../../../styles/home.module.scss";

import Link from "next/link";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Faça seu cadastro</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logo} alt="Logo Bar Bisonho" />

        <div className={styles.login}>
          <h3>Cadastre-se agora!</h3>
          <form>
            <Input type="text" placeholder="Digite seu nome" />
            <Input type="text" placeholder="Digite seu e-mail" />
            <Input type="password" placeholder="Digite sua Senha" />
            <Button type="submit" loading={false}>
              Cadastrar usuário
            </Button>
          </form>
          <Link className={styles.text} href="/">
            Já possui uma conta? Faça login.
          </Link>
        </div>
      </div>
    </>
  );
}
