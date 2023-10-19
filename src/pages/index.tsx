import { useContext, FormEvent, useState, use } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/logo.png";
import { toast } from "react-toastify";

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import styles from "../../styles/home.module.scss";

import { AuthContext } from "../contexts/AuthContext";
import Link from "next/link";

export default function Home() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();

    if (email === "" || password === "") {
      toast.error("Preencha seu e-mail e senha :')", {
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    let data = {
      email,
      password,
    };

    await signIn(data);

    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Bisonhos Bar - Faça seu login</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logo} alt="Logo Bar Bisonho" />

        <div className={styles.login}>
          <form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
              Acessar
            </Button>
          </form>
          <Link className={styles.text} href="/signup">
            Não possui uma conta? Crie uma aqui.
          </Link>
        </div>
      </div>
    </>
  );
}
