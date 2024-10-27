import { Stack, HStack, Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

import { ColorModeSwitch } from "@/components/navigation/ColorModeSwitch";
import { SearchInput } from "@/components/navigation/SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <Stack p={4} spacing={6}>
      <HStack justifyContent={"space-between"}>
        <Link href="/">
          <Image src="/images/logo_1.png" alt="logo" width={100} height={100} />
        </Link>
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
