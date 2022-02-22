import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const Rook: NextPage = () => {
  const FEN = "9/4g4/9/9/4R2G1/9/9/9/9 b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "e5",
          dest: "e8",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "e1",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "g5",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "a5",
          brush: "green",
        },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Shogi Learn - Rooks</title>
        <meta name="description" content="Shogi Rooks" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Rook (hisha, 飛車)
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
                Rooks move exactly like rooks in Western Chess. You probably
                already know how to use it. If not,
              </Text>
              <Text fontSize="3xl">
                Rooks move and capture horizontally and vertically any amount of
                squares.
              </Text>
              <Text fontSize="3xl">
                Rooks are the most powerful pieces on a Shogi board.
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

export default Rook;
