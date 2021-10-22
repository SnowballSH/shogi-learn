import React, { useEffect, useRef, useState } from "react";
import { Chessground as ChessgroundApi } from "chessground";
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

import { Api } from "chessground/api";
import { Config } from "chessground/config";

export const DefaultConfig: Config = {
  //variant: "chess",
  fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
};

interface Props {
  width?: number;
  height?: number;
  contained?: boolean;
  config?: Partial<Config>;
}

function ShogiChessground({
  width = 500,
  height = 500,
  config = DefaultConfig,
  contained = false,
}: Props) {
  const [api, setApi] = useState<Api | null>(null);

  let ref = useRef<HTMLDivElement>(null);

  const onRefChange = () => {
    if (ref && ref.current && !api) {
      const chessgroundApi = ChessgroundApi(ref.current, {
        animation: { enabled: true, duration: 200 },
        ...config,
      });
      chessgroundApi.redrawAll();
      setApi(chessgroundApi);
    } else if (ref && ref.current && api) {
      api.set(config);
    }
  };

  useEffect(onRefChange, [ref]);

  useEffect(() => {
    api?.set(config);
  }, [api, config]);

  useEffect(() => {
    onRefChange();
  }, []);

  return (
    <div
      style={{
        height: contained ? "100%" : height,
        width: contained ? "100%" : width,
      }}
    >
      <div
        ref={ref}
        style={{ height: "100%", width: "100%", display: "table" }}
      />
    </div>
  );
}

export default ShogiChessground;
