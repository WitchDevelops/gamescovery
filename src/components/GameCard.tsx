import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Game } from "@/types/cardTypes";
import { PlatformIcons } from "@/components/PlatformIcons";
import { MetacriticScore } from "@/components/MetacriticScore";
import { getCroppedImgUrl } from "@/lib/services/imageResized";

interface GameCardProps {
  game: Game;
}
export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card height={"100%"}>
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <VStack
          justifyContent={"space-between"}
          height={"100%"}
          alignItems={"flex-start"}
        >
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"} width={"100%"}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetacriticScore score={game.metacritic} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
