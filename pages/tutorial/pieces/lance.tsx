import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const Lance: NextPage = () => {
  const FEN = "9/9/9/9/4p4/8S/9/9/L3L3L b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "a1",
          dest: "a9",
          brush: "green",
        },
        {
          orig: "e1",
          dest: "e5",
          brush: "green",
        },
        {
          orig: "i1",
          dest: "i3",
          brush: "green",
        },
        {
          orig: "i3",
          dest: "i4",
          brush: "red",
        },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Shogi Learn - Lances</title>
        <meta name="description" content="Shogi Lances" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Lance (kyōsha, 香車)
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
                Lances move any amount of squares forward (toward enemy).
              </Text>
              <Text fontSize="3xl">
                Lances cannot capture ally pieces and cannot jump over any
                piece.
              </Text>
              <br />
              <Text fontSize="3xl">
                Lances <b>may NOT</b> be dropped on the 9th rank since it will
                then have no legal movements and become {'"dead"'}.
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

export default Lance;
