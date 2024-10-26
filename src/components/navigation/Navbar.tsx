import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "@/components/navigation/ColorModeSwitch";

export const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} p={4}>
      <Image src="/images/logo.webp" alt="logo" boxSize={"60px"} />
      <ColorModeSwitch />
    </HStack>
  );
};
