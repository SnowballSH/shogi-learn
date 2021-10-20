import { Box, Text, BoxProps } from "@chakra-ui/react";
import { ShogiTheme } from "../theme";

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        fontStyle="italic"
        color={ShogiTheme.colors["sPink"][500]}
      >
        Shogi Learn
      </Text>
    </Box>
  );
}
