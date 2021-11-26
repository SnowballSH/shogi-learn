import { Box, Container } from "@chakra-ui/layout";
import { NextPage } from "next";
import ShogiWithLogic from "../../components/shogilogic";

const AnalysisPage: NextPage = () => {
  return (
    <Box>
      <Container maxW="fit-content" centerContent p={6}>
        <ShogiWithLogic />
        <i>Drop function not completed yet.</i>
        <i>Right click to draw circles, right drag to draw rays.</i>
      </Container>
    </Box>
  );
};

export default AnalysisPage;
