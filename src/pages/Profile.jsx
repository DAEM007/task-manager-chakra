import { 
  ChatIcon,
  EmailIcon,
  StarIcon,
  CheckCircleIcon,
  WarningIcon
} from "@chakra-ui/icons";

import { 
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from "@chakra-ui/react";

export default function Profile() {
  return (
    <Tabs p="20px" mt="40px" variant="enclosed">
      <TabList>
        <Tab _selected={{ bg: 'purple.400', color: 'white' }}>Account Info</Tab>
        <Tab _selected={{ bg: 'purple.400', color: 'white' }}>Task History</Tab>
      </TabList>  

      <TabPanels py="10px">
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              email: damiemmanuel1000@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, labore.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, sunt?
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
        <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>

    </Tabs>
  )
}
