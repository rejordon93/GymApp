import React, { useEffect } from "react";
import { Grid, Form, Dropdown } from "semantic-ui-react";
import { useAppContext } from "../context/useAppContext"; // Import the custom hook

export const SearchBar = () => {
  const { state, dispatch } = useAppContext(); // Use the custom hook

  // Fetch workouts on component mount
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:3000/workouts");
        const data = await response.json();
        dispatch({ type: "ADD_WORKOUT", payload: data });
      } catch (error) {
        console.error("Error fetching workouts", error);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  const dropdownOptions = state.workouts.map((workout) => ({
    key: workout.id,
    text: workout.name,
    value: workout.id,
  }));
  return (
    <Grid
      textAlign="center"
      style={{ marginTop: "50px" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 600 }}>
        <h1 style={{ marginBottom: "20px" }}>Workout List</h1>
        <Form>
          <Dropdown
            placeholder="Select a workout"
            fluid
            selection
            options={dropdownOptions}
            style={{ marginTop: "20px" }}
          />
        </Form>
      </Grid.Column>
    </Grid>
  );
};
