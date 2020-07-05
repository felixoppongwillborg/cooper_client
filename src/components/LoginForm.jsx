import React from "react";
import { Form, Button,Grid } from "semantic-ui-react";

const LoginForm = ({ submitFormHandler }) => {
  return (
    <Grid width={4} textAlign="center">
    <Form onSubmit={submitFormHandler} id="login-form">
      <Form.Field>
        <label>Email</label>
        <input name="email" type="email" id="email"></input>
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input name="password" type="password" id="password"></input>
      </Form.Field>
      <Button type="submit" id="submit">
        Submit
      </Button>
    </Form>
    </Grid>
  );
};

export default LoginForm;
