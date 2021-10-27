import { Text, Container } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";
import { Config } from "chessgroundx/config";
import ShogiWithLogic from "../../../components/shogilogic";

const King: NextPage = () => {
  const FEN = "9/9/9/9/4L4/3ppp3/3pGp3/3ppp3/9 b - 1";

  const CFG: Config = {
    drawable: {
      autoShapes: [
        {
          orig: "e3",
          dest: "e4",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "f4",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "f3",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "f2",
          brush: "red",
        },
        {
          orig: "e3",
          dest: "e2",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "d2",
          brush: "red",
        },
        {
          orig: "e3",
          dest: "d3",
          brush: "green",
        },
        {
          orig: "e3",
          dest: "d4",
          brush: "green",
        },
        {
          orig: "e4",
          dest: "e5",
          brush: "red",
        },
      ],
    },
  };

  return (
    <div>
      <Head>
        <title>Shogi Learn - Gold Generals</title>
        <meta name="description" content="Shogi Kings" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sPink"][400]}
            className={styles.pieceTitle}
          >
            Gold General (金)
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
                Gold generals move in any direction{" "}
                <b>except diagonally back</b>.
              </Text>
              <Text fontSize="3xl">
                Gold generals cannot capture ally pieces.
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

export default King;
