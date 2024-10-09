import React from "react";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "@/types/cardTypes";
import { PlatformIcons } from "@/components/PlatformIcons";
import { MetacriticScore } from "@/components/MetacriticScore";
import { getCroppedImgUrl } from "@/lib/services/imageResized";

interface GameCardProps {
  game: Game;
}
export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden" width='300px'>
      <Image src={getCroppedImgUrl(game.background_image)} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <MetacriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
