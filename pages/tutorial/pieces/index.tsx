import {
  List,
  Text,
  ListItem,
  Link,
  Container,
  ListIcon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../../styles/Pieces.module.scss";
import { ShogiTheme } from "../../../theme";

const PieceIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Pieces</title>
        <meta name="description" content="Shogi Pieces" />
      </Head>

      <main className={styles.main}>
        <Container maxW="container.lg" centerContent>
          <Text
            fontSize="7xl"
            color={ShogiTheme.colors["sGreen"][400]}
            className={styles.pieceTitle}
          >
            Shogi Pieces
          </Text>

          <Text fontSize="3xl" className={styles.pieceIntro}>
            In Shogi, we have <b>8</b> kinds of basic pieces.
            <br />
            Each player has <b>20</b> pieces in the beginning.
            <br />
            They are:
          </Text>

          <List
            boxShadow="md"
            rounded="md"
            w="80%"
            p={8}
            spacing={3}
            margin="2rem"
            className={styles.pieceList}
          >
            <ListItem>
              <Link href="./pieces/king">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />1 King (王/玉)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/gold_general">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />2 Gold Generals (金)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/silver_general">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />2 Silver Generals (銀)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/knight">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />2 Knights (桂)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/lance">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />2 Lances (香)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/bishop">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />1 Bishop (角)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/rook">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />1 Rook (飛)
                </Text>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="./pieces/pawn">
                <Text fontSize="3xl">
                  <ListIcon as={ArrowForwardIcon} />9 Pawns (歩)
                </Text>
              </Link>
            </ListItem>
          </List>

          <Link href="/tutorial/pieces/promotion">
            <Text fontSize="3xl">
              Next up (after you read all the links above): Promotion
            </Text>
          </Link>
        </Container>
      </main>
    </div>
  );
};

export default PieceIndex;
