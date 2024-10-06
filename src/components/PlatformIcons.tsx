import { HStack, Icon } from "@chakra-ui/react";
import {
  IoLogoPlaystation,
  IoLogoWindows,
  IoLogoApple,
  IoLogoAndroid,
  IoLogoXbox,
  IoIosGlobe,
} from "react-icons/io";
import { AiOutlineLinux } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch } from "react-icons/si";
import { ParentPlatform } from "@/types/cardTypes";
import { IconType } from "react-icons";

interface PlatformIconsProps {
  platforms: ParentPlatform[];
}

export const PlatformIcons: React.FC<PlatformIconsProps> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: IoLogoWindows,
    playstation: IoLogoPlaystation,
    xbox: IoLogoXbox,
    nintendo: SiNintendoswitch,
    mac: IoLogoApple,
    linux: AiOutlineLinux,
    ios: MdPhoneIphone,
    android: IoLogoAndroid,
    web: IoIosGlobe,
  };
  return (
    <HStack spacing={1} marginY={2}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};
