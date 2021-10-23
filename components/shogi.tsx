import React, { useEffect, useRef, useState } from "react";
import { Chessground as ChessgroundApi } from "chessgroundx";

import { Api } from "chessgroundx/api";
import { Config } from "chessgroundx/config";

export const DefaultConfig: Config = {
  fen: "lnsgkgsnl/1r5b1/ppppppppp/9/9/9/PPPPPPPPP/1B5R1/LNSGKGSNL b - 1",
};

interface Props {
  width?: number;
  height?: number;
  contained?: boolean;
  config?: Partial<Config>;
}

function ShogiChessground({
  width = 450,
  height = 450,
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
        variant: "shogi",
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
  }, [api, config]);

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
