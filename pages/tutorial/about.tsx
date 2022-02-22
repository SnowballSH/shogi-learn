import { Text, Container, Link } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/ShogiAbout.module.scss";
import { ShogiTheme } from "../../theme";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Shogi</title>
        <meta name="description" content="Shogi Board" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sGreen"][400]}
            className={styles.aboutTitle}
          >
            Shogi (将棋)
          </Text>

          <br />

          <Text fontSize="3xl" className={styles.aboutIntro}>
            <b>Shogi</b> <i>(shōgi, 将棋)</i>, sometimes called{" "}
            <b>Japanese Chess</b> or <b>the Game of Generals</b>, is a{" "}
            <b>two-player, perfect-information</b> strategy game originated from
            Japan.
          </Text>

          <br />

          <Text fontSize="3xl" className={styles.aboutIntro}>
            Shogi existed as early as the 16th century, and was a variation of a game invented as early as in the 12th century.
          </Text>

          <br />

          <Text fontSize="3xl" className={styles.aboutIntro}>
            The Major difference between Shogi and Western Chess is that in
            Shogi, captured pieces become <b>yours</b> to use.
            <br />
            Once you captured an opposing piece, it goes into your <b>Pocket</b>
            , or on a <b>Komodai</b> (piece stand) in classical setups.
            <br />
            Later in the game, you can drop a piece from your pocket onto the
            board instead of moving a piece.
            <br />
            <br />
            Shogi is the first chess/chaturanga variant that contains the drop
            rule.
            <br />
            Historians believe this rule is invented because in the 15th
            Century, Japanese mercenaries <b>switch loyalty</b> to the winning
            army instead of being killed.
          </Text>

          <br />
          <br />

          <Text fontSize="3xl" className={styles.aboutIntro}>
            Besides a board game, Shogi is also{" "}
            <b>a representative of historical Japanese culture and art.</b>
          </Text>

          <br />

          <Link href="/tutorial/board">
            <Text fontSize="3xl">Next up: Shogi Board</Text>
          </Link>
        </Container>
      </main>
    </div>
  );
};

export default About;
