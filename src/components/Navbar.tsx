import { HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const Navbar = () => {
  return (
    <HStack>
      <Image src="/images/logo.webp" alt="logo" boxSize={'60px'} />
      <Text fontSize="2xl">Gamescovery</Text>
    </HStack>
  );
};
