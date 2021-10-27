import { Text, Container, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import ShogiChessground from "../../../components/shogi";
import styles from "../../../styles/Board.module.scss";
import { ShogiTheme } from "../../../theme";
import KomadaiImage from "../../../public/shogi/komadai.jpg";

const BoardIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Board</title>
        <meta name="description" content="Shogi Board" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sGreen"][400]}
            className={styles.boardTitle}
          >
            Shogi Board (将棋盤)
          </Text>

          <Text fontSize="3xl" className={styles.boardIntro}>
            Shogi Board, or Shogiban, is a <b>9x9</b> board for playing Shogi.
            <br />
            The board contains 9 ranks (段) by 9 files (筋) yielding{" "}
            <b>81 squares</b>.
            <br />
            The 3rd row (promotion rank) for each player is indicated with dots.
          </Text>

          <br />

          <Text fontSize="3xl" className={styles.boardIntro}>
            Players sit on opposite sides of the board.
            <br />
            All pieces have a sharp edge, indicating the ownership of the piece.
            <br />
            Your pieces <b>always point forward</b>.
          </Text>

          <br />
          <br />

          <ShogiChessground />
          <Text>Initial setup. Interactive board, no move limitations.</Text>

          <br />

          <Text fontSize="3xl" className={styles.boardIntro}>
            The first player is called <b>Sente (先手)</b> and the second player
            is called <b>Gote (後手)</b>. Sente and Gote alternate turns.
          </Text>

          <br />
          <br />

          <Text fontSize="3xl" className={styles.boardIntro}>
            In addition to a 9x9 board, each player has a{" "}
            <b>stand (駒台, komadai)</b>
            for captured enemy pieces.
            <br />
            Players are allowed to drop captured pieces onto the board
            (we&aposll learn the rules later), so players usually keep their
            stand organized.
          </Text>

          <br />

          <Container centerContent>
            <Image
              src={KomadaiImage}
              alt=""
              width={KomadaiImage.width / 4}
              height={KomadaiImage.height / 4}
            />
            <Text>Classical Komodai</Text>
          </Container>

          <br />

          <Link href="/tutorial/pieces">
            <Text fontSize="3xl">Next up: Pieces</Text>
          </Link>
        </Container>
      </main>
    </div>
  );
};

export default BoardIndex;
