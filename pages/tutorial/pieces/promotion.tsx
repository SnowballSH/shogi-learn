import {
  Text,
  Container,
  Link,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { MinusIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Board.module.scss";
import { ShogiTheme } from "../../../theme";

const Promotion: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Promotion</title>
        <meta name="description" content="Shogi Promotion Rules" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sGreen"][400]}
            className={styles.boardTitle}
          >
            Shogi Promotion Rules
          </Text>

          <Text fontSize="3xl" className={styles.boardIntro}>
            In Shogi, unlike chess, the promotion rank is the last{" "}
            <b>3 ranks</b> of opposite side.
            <br />
            If a piece reaches that area, it may be promoted (sometimes
            obligated) to promote.
          </Text>

          <List
            boxShadow="md"
            rounded="md"
            w="100%"
            p={8}
            spacing={3}
            margin="2rem"
            className={styles.list}
          >
            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Pawn, Silver, Lance, and Knight
              </Text>
              <Text fontSize="2xl" p={5}>
                Pawns, Silver generals, Lances, and Knights may be promoted to{" "}
                <b>move like Gold generals</b>
                <br />
                Promoted Pawns (fuhyō 歩兵) will be called <b>Tokin (と金)</b>
                <br />
                Promoted Silvers (ginshō 銀將) will be called{" "}
                <b>Narigin (成銀)</b>
                <br />
                Promoted Lances (kyōsha 香車) will be called{" "}
                <b>Narikyō (成香)</b>
                <br />
                Promoted Knights (keima 桂馬) will be called{" "}
                <b>Narikei (成桂)</b>
                <br />
                After promoting, they all move the same way as Gold Generals do.
                <br />
                Player may choose whether to promote their piece... However, if
                a pawn or lance lands on the last rank, or a knight lands on the
                last two ranks, they are obligated to promote, otherwise they
                will be {'"dead"'} and have no legal movements forever.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Gold and King
              </Text>
              <Text fontSize="2xl" p={5}>
                Gold Generals and Kings do not promote at all.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Rook
              </Text>
              <Text fontSize="2xl" p={5}>
                Rooks (hisha 飛) promote to{" "}
                <b>
                  {'"'}Dragon King{'"'} ryūō 龍王
                </b>
                <br />
                Dragon Kings move like <b>Rook + King</b>: Attacking 4 diagonal
                squares around it in addition to all vertical and horizontal
                squares.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Bishop
              </Text>

              <Text fontSize="2xl" p={5}>
                Bishops (kakugyō 角行) promote to{" "}
                <b>
                  {'"'}Dragon Horse{'"'} ryūma 龍馬
                </b>
                <br />
                Dragon Horses move like <b>Bishop + King</b>: Attacking 4
                horizontal and vertical squares around it in addition to all
                diagonal squares.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Extra rules
              </Text>

              <Text fontSize="2xl" p={5}>
                Promoted pieces cannot demote unless captured.
                <br />
                When captured, promoted pieces become their original forms can
                goes into the opposite player&lsquo;s hand.
              </Text>
            </ListItem>
          </List>

          <br />

          <br />

          <Link href="/tutorial/board/endgame">
            <Text fontSize="3xl">Next up: End of Game</Text>
          </Link>
        </Container>
      </main>
    </div>
  );
};

export default Promotion;
