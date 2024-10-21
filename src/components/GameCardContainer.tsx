import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: ReactNode;
}

export const GameCardContainer: React.FC<GameCardContainerProps> = ({
  children,
}) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
