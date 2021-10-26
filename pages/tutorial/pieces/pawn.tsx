import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const Pawn: NextPage = () => {
  const FEN = "9/9/9/4p4/6p2/2p3N2/2P1P1Pp1/6p2/9 b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "c3",
          dest: "c4",
          brush: "green",
        },
        {
          orig: "c4",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "e4",
          brush: "green",
        },
        {
          orig: "e4",
          dest: "e5",
          brush: "green",
        },
        {
          orig: "e5",
          dest: "e6",
          brush: "green",
        },
        {
          orig: "e6",
          brush: "green",
        },
        {
          orig: "g3",
          dest: "g4",
          brush: "red",
        },
        {
          orig: "g4",
          brush: "red",
        },
      ],
    },
  };

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
                Pawns move <b>one</b> square forward. It captures enemy pieces
                in front of it.
              </Text>
              <Text fontSize="3xl">
                However, if your own piece (as in the red example) is in front
                of the pawn, it cannot advance.
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

export default Pawn;
