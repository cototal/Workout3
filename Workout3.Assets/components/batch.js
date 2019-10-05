import React, { Component } from "react";
export class Batch extends Component {
    render() {
        const { exercise } = this.props;
        const { position, reps, weight } = this.props.batch;

        return (<div className="batch">
            <div className="columns is-mobile">
                <div className="column">
                    <input type="hidden" name={`Exercises[${exercise}].Batches[${position}].Position`}
                        defaultValue={position} />
                    <div className="field">
                        <div className="control">
                            <input className="input" type="number" defaultValue={reps}
                                name={`Exercises[${exercise}].Batches[${position}].Reps`}
                                placeholder="Reps" />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <div className="control">
                            <input className="input" type="number" defaultValue={weight}
                                name={`Exercises[${exercise}].Batches[${position}].Weight`}
                                placeholder="Weight" />
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
