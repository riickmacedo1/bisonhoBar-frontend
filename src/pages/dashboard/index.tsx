import { Header } from "../../components/Header";
import Head from "next/head";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Painel - Bar Bisonho</title>
      </Head>

      <div>
        <Header />
      </div>
    </>
  );
}
