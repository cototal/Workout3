import * as helpers from "./templateHelpers";

export function exerciseForm(exerciseCount) {
    const positionId = helpers.nestedListId("exercises", exerciseCount, "position");
    const positionField = helpers.fieldDiv(helpers.labelTag("Position", positionId) + helpers.inputTag({
        id: positionId,
        type: "number",
        name: `Exercises[${exerciseCount}].Position`,
        value: exerciseCount
    }));
    const nameId = helpers.nestedListId("exercises", exerciseCount, "name");
    const nameField = helpers.fieldDiv(helpers.labelTag("Name", nameId) + helpers.inputTag({
        id: nameId,
        name: helpers.nestedListName("Exercises", exerciseCount, "Name")
    }));
    const startId = helpers.nestedListId("exercises", exerciseCount, "start");
    const startField = helpers.fieldDiv(helpers.labelTag("Start", startId) + helpers.dateInput({
        id: startId,
        name: helpers.nestedListName("Exercises", exerciseCount, "StartTime"),
        date: new Date()
    }));
    const fields = helpers.columnsDiv(
        helpers.columnDiv(positionField, null, ["is-one-fifth"])
        + helpers.columnDiv(nameField, null, ["is-two-fifths"])
        + helpers.columnDiv(startField, null, ["is-two-fifths"]),
        null, ["is-mobile"]);
    const batchDiv = helpers.div(`<h4 class="subtitle">
        Sets
    </h2>`, helpers.nestedListId("exercises", exerciseCount, "batches"), ["batches"]);
    const addBatchButton = `<button data-exercise-id="${exerciseCount}" class="add-batch button is-warning">Add Batch</button>`;
    return helpers.div(fields + batchDiv + addBatchButton, null, ["exercise"]);
}
