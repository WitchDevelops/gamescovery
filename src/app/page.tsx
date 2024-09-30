"use client";
import { Link } from "@chakra-ui/next-js";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
      <Button colorScheme="blue">Button</Button>
    </>
  );
}
