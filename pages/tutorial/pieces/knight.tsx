import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const Knight: NextPage = () => {
  const FEN = "9/9/9/9/4p1P2/3p1p3/5N3/4N4/9 b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "e2",
          dest: "d4",
          brush: "green",
        },
        {
          orig: "e2",
          dest: "f4",
          brush: "green",
        },
        {
          orig: "f3",
          dest: "e5",
          brush: "green",
        },
        {
          orig: "f3",
          dest: "g5",
          brush: "red",
        },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Shogi Learn - Knights</title>
        <meta name="description" content="Shogi Knights" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Knight (keima, 桂馬)
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
                Knights move one square forward <b>and then</b> one square
                diagonally forward.
                <br />
                Unlike western chess, it cannot go sideway or go back.
              </Text>
              <Text fontSize="3xl">
                Knights cannot capture ally pieces at destination square. They
                may jump over the piece in front of it.
              </Text>
              <br />
              <Text fontSize="3xl">
                Knights <b>may NOT</b> be dropped on the 9th or 8th rank since
                it will then have no legal movements and become {'"dead"'}.
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

export default Knight;
