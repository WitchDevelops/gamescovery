import React from "react";
import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { useColorMode } from "@chakra-ui/react";

import { PlatformIcons } from "@/components/atoms/PlatformIcons";
import { MetacriticScore } from "@/components/atoms/MetacriticScore";
import { getCroppedImgUrl } from "@/lib/services/imageResized";

interface GameCardProps {
  game: Game;
}
export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const { colorMode } = useColorMode();
  return (
    <Card height={"100%"} width={"100%"}>
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
      <CardBody
        backgroundColor={colorMode === "light" ? "gray.50" : "gray.700"}
      >
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
          <HStack
            justifyContent={"space-between"}
            width={"100%"}
            color={"gray.400"}
          >
            <Text>{game.released}</Text>
            <Text>{game.rating}/5</Text>
          </HStack>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </VStack>
      </CardBody>
    </Card>
  );
};
