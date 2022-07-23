import Layout from "../components/Layout";
import styles from "../styles/Layout.module.css";

export default function Home() {
  return (
    <Layout>
      <h1 className={styles.title}>Welcome to Nest!</h1>
    </Layout>
  );
}
