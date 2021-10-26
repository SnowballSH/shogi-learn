import { Box, Container } from "@chakra-ui/layout";
import { NextPage } from "next";
import ShogiWithLogic from "../../components/shogilogic";

const AnalysisPage: NextPage = () => {
  return (
    <Box>
      <Container maxW="fit-content" centerContent p={6}>
        <ShogiWithLogic />
      </Container>
    </Box>
  );
};

export default AnalysisPage;
