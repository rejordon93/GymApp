import React from "react";
import { Button, Form, Grid, Input } from "semantic-ui-react";

export const SearchBar = () => {
  return (
    <Grid
      textAlign="center"
      style={{ marginTop: "50px" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <h1 style={{ marginBottom: "20px" }}>Workout Builder</h1>
        <Form>
          <Form.Group>
            <Input
              type="text"
              placeholder="Search Workouts"
              style={{ flex: 1, marginRight: "10px" }} // Make input fill available space and add margin
            />
            <Button type="submit" primary size="large">
              Add Workout
            </Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
