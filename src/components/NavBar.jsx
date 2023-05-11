import { Box, Button, Flex, HStack, Heading, Spacer, Text } from "@chakra-ui/react";


export default function NavBar() {
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1">Daem Tasks</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Box bg="gray.200" p="10px">A</Box>
            <Text>emmanuel@gmail.com</Text>
            <Button colorScheme="purple">Logout</Button>
        </HStack>
    </Flex>
  )
}
