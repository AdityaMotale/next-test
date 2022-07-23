import Head from "next/head";
import Layout from "../components/Layout";

const about = () => {
    return (
      <Layout>
        <Head>
          <title>Info Page</title>
          <link
            rel="icon"
            href="https://cdn-icons-png.flaticon.com/512/7371/7371972.png"
          />
        </Head>
        <h1>This is Info view</h1>
      </Layout>
    );
}

export default about;