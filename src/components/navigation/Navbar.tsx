import { HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ColorModeSwitch } from "@/components/navigation/ColorModeSwitch";
import { SearchInput } from "@/components/navigation/SearchInput";

export const Navbar = () => {
  return (
    <HStack p={4} spacing={6}>
      <Image src="/images/logo.webp" alt="logo" boxSize={"60px"} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
