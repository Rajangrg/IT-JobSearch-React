
import React from "react";
import {Container, Button, Divider, Form } from 'semantic-ui-react'


export const SearchJob = ({searchJob}) => {
  return (
 <div>
 <Container>
 <Form onSubmit={searchJob}>
        <Form.Group widths='equal'>
          <Form.Field
            label='Job Title'
            control='input'
            placeholder='job name'
            name='title'
          />
          <Form.Field
            label='Location'
            control='input'
            placeholder='location'
            name='jobLocation'
          />
           
        </Form.Group>
        <Button secondary type='submit'>Search Job</Button>
        <Divider hidden />
      </Form>
 </Container>
     
 </div>
  );
};
