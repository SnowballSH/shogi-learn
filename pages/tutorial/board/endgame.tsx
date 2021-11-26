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
import ShogiWithLogic from "../../../components/shogilogic";
import styles from "../../../styles/Board.module.scss";
import { ShogiTheme } from "../../../theme";

const Endgame: NextPage = () => {
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
            Shogi Endgame & Result
          </Text>

          <Text fontSize="3xl" className={styles.boardIntro}>
            There are 6 ways for a game to end:
          </Text>

          <List
            boxShadow="md"
            rounded="md"
            w="80%"
            p={8}
            spacing={3}
            margin="2rem"
            className={styles.list}
          >
            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Checkmate
              </Text>
              <Text fontSize="2xl" p={5}>
                The King is attacked (checked) but there is no legal move to
                escape the attack.
                <br />
                <br />
                <Container maxW="fit-content" centerContent>
                  <ShogiWithLogic
                    editable
                    fen={"k8/G8/9/1N7/9/9/9/9/8K b - 1"}
                  />
                </Container>
                In this position, the Gote King is attacked by the gold, and the
                gold is supported by the knight.
                <br />
                There is no legal move for the king to escape. Sente wins.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Resignation
              </Text>
              <Text fontSize="2xl" p={5}>
                If either player believes their position is lost, they can
                resign and lose the game immediately instead of playing to
                checkmate.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Illegal Move
              </Text>
              <Text fontSize="2xl" p={5}>
                If a player makes an illegal move and either player or any
                official points it out, the player who made the illegal move
                loses immediately.
                <br />
                <br />
                <Container maxW="fit-content" centerContent>
                  <ShogiWithLogic
                    editable
                    fen={
                      "ln1s3+R1/1ks6/1p1p3P1/p1ps5/4l2p1/P1P1P1P1P/1P1PS1+n2/2KGG1B+r1/LN3G2L b - 1"
                    }
                    config={{
                      drawable: {
                        autoShapes: [
                          {
                            orig: "h1",
                            brush: "red",
                          },
                          {
                            orig: "h7",
                            brush: "blue",
                          },
                        ],
                      },
                    }}
                  />
                </Container>
                In this complex position between master players Takahiro
                Toyokawa and Kōsuke Tamura, on move 109, Toyokawa placed a pawn
                on the square indicated by red circle.
                <br />
                This is illegal because he already has another pawn on the same
                file, indicated with blue circle.
                <br />
                Toyokawa lost due to illegal move.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Repetition
              </Text>

              <Text fontSize="2xl" p={5}>
                If the same position and same pieces in pockets occurs 4 times,
                the game immediately ends in a draw by repetition.
                <br />
                Note that the position cannot be a check, since perpetual check
                is not allowed in Shogi.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Impasse (持将棋, jishōgi)
              </Text>

              <Text fontSize="2xl" p={5}>
                If both players have their kings entered the opposing promotion
                zone, and no player can hope to gain furthur material, players
                can agree to Impasse.
                <br />
                The officials count the material points for each player -- 5
                points for each rook and bishop, 1 point for any other piece
                except king.
                <br />
                There is a total of 54 material points in the starting position.
                <br />
                If a player has <b>less than 24</b> material points, this player
                loses the game.
                <br />
                If both player has greater or equal to 24 material points, the
                game ends in a draw.
                <br />
                <br />
                This rule prevents infinite length of a game. Advanced kings are
                extremely hard to checkmate because most pieces in shogi are
                designed to move forward easier than backward. Pawns, Lances,
                and Knights can only move forward, so if the king is on the
                other edge of the board, there is simply few ways for it to get
                checkmated.
              </Text>
            </ListItem>

            <ListItem>
              <Text fontSize="3xl" className={styles.lt}>
                <ListIcon as={MinusIcon} color="pink.500" />
                Time forfeit
              </Text>
              <Text fontSize="2xl" p={5}>
                If either player runs out of time for the designated time
                control, this player loses immediately on time.
              </Text>
            </ListItem>
          </List>

          <br />

          <br />

          {/*
          <Link href="/tutorial/pieces">
            <Text fontSize="3xl">Next up: Pieces</Text>
          </Link>*/}
        </Container>
      </main>
    </div>
  );
};

export default Endgame;
