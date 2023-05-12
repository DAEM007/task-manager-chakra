import { LockIcon } from "@chakra-ui/icons";
import { 
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast
} from "@chakra-ui/react";

export default function NavBar() {
  const toast = useToast();
  
  const showToast = () => {
    // console.log('Toast alive!');
    toast({
      title: 'Logged Out!',
      description: `You've just logged out!`,
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
      icon: <LockIcon />,
      colorScheme: 'purple'
    })
  }

  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1">Daem Tasks</Heading>
        <Spacer />
        <HStack spacing="20px">
            <Avatar src="/img/richard.avif">
              <AvatarBadge boxSize="1.25em" bg="teal.500">
                <Text fontSize="xs">5</Text>
              </AvatarBadge>
            </Avatar>
            <Text>emmanuel@gmail.com</Text>
            <Button colorScheme="purple" onClick={ () => showToast() }>Logout</Button>
        </HStack>
    </Flex>
  )
}
