
import React from "react";
import {Container, Button, Divider, Form } from 'semantic-ui-react'


export const SearchJob = () => {
  return (
 <div>
 <Container>
 <Form >
        <Form.Group widths='equal'>
          <Form.Field
            label='Job Title'
            control='input'
            placeholder='job name'
          />
          <Form.Field
            label='Location'
            control='input'
            placeholder='location'
          />
           
        </Form.Group>
        <Button secondary type='submit'>Search Job</Button>
        <Divider hidden />
      </Form>
 </Container>
     
 </div>
  );
};
