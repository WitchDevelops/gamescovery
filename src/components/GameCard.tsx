import React from "react";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "@/types/cardTypes";
import { PlatformIcons } from "@/components/PlatformIcons";

interface GameCardProps {
  game: Game;
}
export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcons
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};
