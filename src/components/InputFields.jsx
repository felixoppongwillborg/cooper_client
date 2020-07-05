import React from "react";
import { Grid, Input } from "semantic-ui-react";

const InputFields = ({ onChangeHandler }) => {
  return (
    <Grid width={4} textAlign="center">
       
        <Input
          label={{ basic: true, content: "Meters" }}
          labelPosition="right"
          placeholder="Enter your distance.."
          onChange={onChangeHandler}
          position="center"
          label="Meters"
          name="distance"
          id="distance"
          
          
        />
        <Input
          label={{ basic: true, content: "Age" }}
          labelPosition="right"
          placeholder="Enter your age"
          onChange={onChangeHandler}
          label="Age"
          name="age"
          id="age"
        />

        <select onChange={onChangeHandler} name="gender" id="gender">
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      
    </Grid>
  );
};
export default InputFields;
