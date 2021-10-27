import { Container } from "@chakra-ui/layout";
import { Config } from "chessgroundx/config";
import { Dests } from "chessgroundx/types";
import { useState } from "react";
import { Color, Shogi } from "shogi.js";
import { toKey } from "../utils/shogiUtils";
import ShogiChessground, { DefaultConfig } from "./shogi";

interface Props {
  width?: number | string;
  height?: number | string;
  config?: Partial<Config>;
  fen?: string;
  editable?: boolean;
}

function ShogiWithLogic({
  width = "clamp(200px, 37vw, 500px)",
  height = "clamp(200px, 37vw, 500px)",
  config = DefaultConfig,
  fen = DefaultConfig.fen!,
  editable = false,
}: Props) {
  const [sstate, setSstate] = useState(new Shogi());
  sstate.initializeFromSFENString(fen);
  editable && sstate.editMode(true);

  function getDests(): Dests {
    let d = new Map();
    for (let i = 1; i < 10; i++) {
      for (let j = 1; j < 10; j++) {
        const ms = sstate.getMovesFrom(i, j);
        if (ms.length) {
          d.set(
            toKey(i, j),
            ms.map((m) => toKey(m.to.x, m.to.y))
          );
        }
      }
    }
    return d;
  }

  const CFG: Config = {
    fen: fen,
    movable: {
      color: "white",
      free: false,
      dests: getDests(),
    },
    draggable: {
      showGhost: true,
    },
  };

  return (
    <>
      <Container centerContent maxW="max-content">
        <ShogiChessground
          width={width}
          height={height}
          config={{ ...config, ...CFG }}
          nopocket={editable}
          after={(api) => (orig, dest) => {
            const ox = orig.charCodeAt(0) - "a".charCodeAt(0) + 1;
            const oy = parseInt(orig.charAt(1));
            const dx = dest.charCodeAt(0) - "a".charCodeAt(0) + 1;
            const dy = parseInt(dest.charAt(1));
            sstate.move(10 - ox, 10 - oy, 10 - dx, 10 - dy);
            const color = editable
              ? "white"
              : sstate.turn == Color.Black
              ? "white"
              : "black";
            api.set({
              turnColor: color,
              movable: {
                dests: getDests(),
                color: color,
              },
            });
          }}
        />
      </Container>
    </>
  );
}

export default ShogiWithLogic;
