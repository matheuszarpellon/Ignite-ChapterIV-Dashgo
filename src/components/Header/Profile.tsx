import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
        <Text>Matheus Zarpellon</Text>
        <Text color="gray.300" fontSize="small">
          mvzarpellon@gmail.com
        </Text>
      </Box>
      )}
      <Avatar
        size="md"
        name="Matheus Zarpellon"
        src="https://github.com/matheuszarpellon.png"
      />
    </Flex>
  );
}
