import { FormEvent, useState, useContext } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../../public/logo.png";
import { toast } from "react-toastify";

import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";
import { AuthContext } from "../../contexts/AuthContext";

import styles from "../../../styles/home.module.scss";

import Link from "next/link";

export default function SignUp() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();

    if (name === "" || email === "" || password === "") {
      toast.error("Preencha todos os campos do cadastro", {
        theme: "dark",
      });
      return;
    }

    setLoading(true);

    let data = {
      name,
      email,
      password,
    };
    await signUp(data);
    setLoading(false);
  }

  return (
    <>
      <Head>
        <title>Faça seu cadastro</title>
      </Head>

      <div className={styles.containerCenter}>
        <Image className={styles.logo} src={logo} alt="Logo Bar Bisonho" />

        <div className={styles.login}>
          <h3>Cadastre-se agora!</h3>
          <form onSubmit={handleSignUp}>
            <Input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" loading={loading}>
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
