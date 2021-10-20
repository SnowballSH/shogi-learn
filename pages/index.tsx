import { Button, Center, Text, useTheme } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { ShogiTheme } from "../theme";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shogi Learn - Get Started with Shogi</title>
        <meta
          name="description"
          content="Learn how to play Shogi, a Japanese variant of Chess."
        />
      </Head>

      <main className={styles.main}>
        <div>
          <Center>
            <div>
              <Text
                fontSize="7xl"
                color={ShogiTheme.colors["sGreen"][400]}
                className={styles.shogiTitle}
              >
                Shogi Learn
              </Text>
              <Text fontSize="3xl">
                Want to play Shogi but don&apos;t know where to start? We got
                you.
              </Text>
              <Button
                size="lg"
                colorScheme="sPink"
                className={styles.getStarted}
                onClick={() => {
                  window.location.assign("./tutorial/pieces");
                }}
              >
                <Text fontSize="2xl">Get Started</Text>
              </Button>
            </div>
          </Center>
        </div>
      </main>
    </div>
  );
};

export default Home;
