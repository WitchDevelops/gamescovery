import React from "react";
import { Badge } from "@chakra-ui/react";

interface MetaCriticScoreProps {
  score: number;
}
export const MetacriticScore: React.FC<MetaCriticScoreProps> = ({ score }) => {
  const color = score > 80 ? "green" : score > 70 ? "yellow" : "red";
  return (
    <Badge fontSize={"md"} borderRadius={2} colorScheme={color}>
      {score}
    </Badge>
  );
};
