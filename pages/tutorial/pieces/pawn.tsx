import { List, Text, ListItem, Link, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Pawns</title>
        <meta name="description" content="Shogi Pawns" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Pawn (歩)
          </Text>
        </Container>
      </main>
    </div>
  );
};

export default Home;
