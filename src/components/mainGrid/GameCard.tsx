import React from "react";
import { Box, Card, CardBody, Heading, HStack, VStack } from "@chakra-ui/react";
import Image from "next/image";

import { PlatformIcons } from "@/components/atoms/PlatformIcons";
import { MetacriticScore } from "@/components/atoms/MetacriticScore";
import { getCroppedImgUrl } from "@/lib/services/imageResized";

interface GameCardProps {
  game: Game;
}
export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  return (
    <Card height={"100%"}>
      <Box>
        <Image
          src={getCroppedImgUrl(game.background_image)}
          alt={game.name}
          width={600}
          height={400}
          placeholder={"blur"}
          blurDataURL={getCroppedImgUrl(game.background_image)}
          style={{ aspectRatio: "6/4", objectFit: "contain", width: "100%" }}
        />
      </Box>
      <CardBody>
        <VStack
          justifyContent={"flex-start"}
          height={"100%"}
          alignItems={"flex-start"}
        >
          <HStack justifyContent={"space-between"} width={"100%"}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <MetacriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </VStack>
      </CardBody>
    </Card>
  );
};
