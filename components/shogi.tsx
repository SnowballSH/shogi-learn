import React, { useEffect, useRef, useState } from "react";
import { Chessground as ChessgroundApi } from "chessgroundx";

import { Api } from "chessgroundx/api";
import { Config } from "chessgroundx/config";
import { Box, Container } from "@chakra-ui/layout";

export const DefaultConfig: Config = {
  fen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
};

interface Props {
  width?: number | string;
  height?: number | string;
  contained?: boolean;
  nopocket?: boolean;
  config?: Partial<Config>;
  after?: (api: Api) => (orig: string, dest: string) => void;
}

function ShogiChessground({
  width = "clamp(200px, 37vw, 500px)",
  height = "clamp(200px, 37vw, 500px)",
  config = DefaultConfig,
  contained = false,
  nopocket = false,
  after,
}: Props) {
  const [api, setApi] = useState<Api | null>(null);

  let ref = useRef<HTMLDivElement>(null);

  const onRefChange = () => {
    if (ref && ref.current && !api) {
      const chessgroundApi = ChessgroundApi(ref.current, {
        animation: { enabled: true, duration: 200 },
        ...config,
        variant: "shogi",
        coordinates: false,
      });
      chessgroundApi.state.dimensions = { width: 9, height: 9 };
      chessgroundApi.state.geometry = 1;
      setApi(chessgroundApi);
    } else if (ref && ref.current && api) {
      api.set(config);
    }
  };

  useEffect(onRefChange, [ref]);

  useEffect(() => {
    api?.set(config);
    after &&
      api?.set({
        movable: {
          events: {
            after: after(api!),
          },
        },
      });
  }, [api, config]);

  return (
    <Container
      centerContent
      maxW="max-content"
      display={!nopocket ? "grid" : "block"}
      gridTemplateColumns="4fr 2fr"
      gridTemplateRows="1fr 1fr"
      gridGap="10px"
      gridTemplateAreas={'"gbd gep" "gbd gap"'}
    >
      <Container
        w={contained ? "100%" : width}
        h={contained ? "100%" : height}
        centerContent
        p={0}
        gridArea="gbd"
      >
        <Box
          ref={ref}
          style={{ height: "100%", width: "100%", display: "table" }}
        />
      </Container>
      {!nopocket && (
        <>
          <Box className="enemy pocket">
            <div className="P"></div>
            <div className="N"></div>
            <div className="L"></div>
            <div className="G"></div>
            <div className="S"></div>
            <div className="R"></div>
            <div className="B"></div>
          </Box>
          <Box className="ally pocket">
            <div className="P"></div>
            <div className="N"></div>
            <div className="L"></div>
            <div className="G"></div>
            <div className="S"></div>
            <div className="R"></div>
            <div className="B"></div>
          </Box>
        </>
      )}
    </Container>
  );
}

export default ShogiChessground;
