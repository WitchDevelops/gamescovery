import { Badge, HStack } from "@chakra-ui/react";
import Image from "next/image";

interface MetaCriticScoreProps {
  score: number;
}
export const MetacriticScore: React.FC<MetaCriticScoreProps> = ({ score }) => {
  const color = score > 80 ? "green" : score > 70 ? "yellow" : "red";
  return (
    <HStack>
      {score && (
        <Image
          src="/images/metacritic_logo.png"
          alt="metacritic"
          width={20}
          height={20}
        />
      )}
      <Badge fontSize={"md"} borderRadius={2} colorScheme={color}>
        {score}
      </Badge>
    </HStack>
  );
};
