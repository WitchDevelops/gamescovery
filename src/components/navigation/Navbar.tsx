import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import { ColorModeSwitch } from "@/components/navigation/ColorModeSwitch";
import { SearchInput } from "@/components/navigation/SearchInput";

interface NavbarProps {
  onSearch: (searchText: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
  return (
    <HStack p={4} spacing={6}>
      <Image src="/images/logo.webp" alt="logo" width={60} height={60} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};
