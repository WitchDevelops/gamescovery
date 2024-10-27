import { Stack, HStack, Box } from "@chakra-ui/react";
import Image from "next/image";

import { ColorModeSwitch } from "@/components/navigation/ColorModeSwitch";
import { SearchInput } from "@/components/navigation/SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <Stack p={4} spacing={6}>
      <HStack justifyContent={"space-between"}>
        <Image src="/images/logo.webp" alt="logo" width={60} height={60} />
        <Box
          display={{ base: "none", sm: "block" }}
          width={"100%"}
          paddingInline={4}
        >
          <SearchInput onSearch={onSearch} />
        </Box>
        <ColorModeSwitch />
      </HStack>
      <Box display={{ base: "block", sm: "none" }}>
        <SearchInput onSearch={onSearch} />
      </Box>
    </Stack>
  );
};
