import { 
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea
} from "@chakra-ui/react";

import { Form, redirect } from "react-router-dom";

export default function Create() {
  return (
    <Box maxW="480px">
      <Form method="post" action="/create">

        <FormControl 
          isRequired
          mb="40px"
        >
          <FormLabel>Task name:</FormLabel>
          <Input 
            type="text"
            name="title"
            placeholder="Enter a descriptive task title"
          />
        </FormControl>

        <FormControl 
          isRequired
          mb="40px"
        >
          <FormLabel>Task description:</FormLabel>
          <Textarea 
            name="description"
            placeholder="Enter a detailed description for your task..."
          />
        </FormControl>

        <FormControl 
          display="flex"
          alignItems="center"
          mb="40px"
        >
          <Checkbox 
            name="isPriority"
            colorScheme="purple"
            size="lg"
          />
          <FormLabel mb="0" ml="10px">Make task a priority</FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>

      </Form>
    </Box>
  )
}

export const createAction = async ({ request }) => {

  // console.log(request);

  const data = await request.formData();

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
    // isPriority: data.get('isPriority') === '' ? true : false
  };

  console.log(task);

  return redirect('/');

}
