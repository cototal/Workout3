import React, { Component } from "react";
import { Batch } from "./batch";

export class Exercise extends Component {
    batchCount = 0;

    state = {
        batches: []
    }

    startBatch = evt => {
        evt.preventDefault();
        const newBatch = {
            position: this.batchCount,
            reps: "",
            weight: ""
        }
        ++this.batchCount;
        this.setState({
            batches: [
                ...this.state.batches,
                newBatch
            ]
        })
    }

    render() {
        const { position, name, start } = this.props.exercise;
        return (<div className="exercise">
            <div className="columns is-mobile">
                <div className="column is-one-fifth">
                    <div className="field">
                        <label htmlFor={`exercises-${position}-position`}
                            className="label">Position</label>
                        <div className="control">
                            <input type="number" className="input"
                                defaultValue={position} name={`Exercises[${position}].Position`}
                                id={`exercises-${position}-position`} />
                        </div>
                    </div>
                </div>
                <div className="column is-two-fifths">
                    <div className="field">
                        <label htmlFor={`exercises-${position}-name`}
                            className="label">Name</label>
                        <div className="control">
                            <input type="text" className="input"
                                defaultValue={name} name={`Exercises[${position}].Name`}
                                id={`exercises-${position}-name`} />
                        </div>
                    </div>
                </div>
                <div className="column is-two-fifths">
                    <div className="field">
                        <label htmlFor={`exercises-${position}-start`}
                            className="label">Start</label>
                        <div className="control">
                            <input type="datetime-local" className="input"
                                defaultValue={start} name={`Exercises[${position}].StartTime`}
                                id={`exercises-${position}-start`} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="batches">
                {this.state.batches.map(batch => <Batch key={batch.position} exercise={position} batch={batch} />)}
            </div>
            <button className="button is-warning" onClick={this.startBatch}>Add Batch</button>
        </div>);
    }
}
