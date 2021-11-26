import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const Bishop: NextPage = () => {
  const FEN = "9/9/2g6/9/4B4/9/9/7G1/9 b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "e5",
          dest: "c7",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "i9",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "a1",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "g3",
          brush: "green",
        },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Shogi Learn - Bishops</title>
        <meta name="description" content="Shogi Bishops" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Bishop (角)
          </Text>

          <Container
            p="4rem"
            maxW="100%"
            boxShadow="xl"
            backgroundColor="#f3ffe0"
            rounded="lg"
          >
            <Text
              fontSize="5xl"
              fontWeight="bold"
              color={ShogiTheme.colors["sGreen"][400]}
            >
              Basic Movement
            </Text>

            <Container maxW="container.md" pt={4} pb={10} centerContent>
              <Text fontSize="3xl">
                Bishops move exactly like bishops in Western Chess. You probably
                already know how to use it. If not,
              </Text>
              <Text fontSize="3xl">
                Bishops move and capture diagonally any amount of squares.
              </Text>
              <Text fontSize="3xl">
                Bishops are the second most powerful pieces on a Shogi board.
              </Text>
            </Container>
            <Container maxW="fit-content" centerContent>
              <ShogiWithLogic editable fen={FEN} config={CFG} />
            </Container>
          </Container>
        </Container>
      </main>
    </div>
  );
};

export default Bishop;
