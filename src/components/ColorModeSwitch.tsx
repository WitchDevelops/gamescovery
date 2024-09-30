import React from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark</Text>
    </HStack>
  );
};
