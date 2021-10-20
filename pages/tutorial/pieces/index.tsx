import { Button, Center, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shogi Learn - Pieces</title>
        <meta name="description" content="Shogi Pieces" />
      </Head>

      <main className={styles.main}>
        <Center>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sGreen"][500]}
            className={styles.pieceTitle}
          >
            Shogi Pieces
          </Text>
        </Center>
      </main>
    </div>
  );
};

export default Home;
