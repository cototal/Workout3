import React, { Component } from "react";
import { Exercise } from "./exercise";
import { formatDateForInput } from "../lib/templateHelpers";

export class ExerciseList extends Component {
    exerciseCount = 0;

    state = {
        exercises: []
    }

    startExercise = evt => {
        evt.preventDefault();
        const newExercise = {
            position: this.exerciseCount,
            name: "",
            start: formatDateForInput(new Date())
        };
        ++this.exerciseCount;
        this.setState({
            exercises: [
                ...this.state.exercises,
                newExercise
            ]
        })
    }

    render() {
        return (<div className="exercises">
            {this.state.exercises.map(ex => <Exercise key={ex.position} exercise={ex} />)}
            <button className="button is-primary" onClick={this.startExercise}>Add Exercise</button>
        </div>);
    }
}
