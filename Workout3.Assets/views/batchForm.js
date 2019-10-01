import * as helpers from "./templateHelpers";

export function batchForm(exerciseId, batchCount) {
    const batchIdPrefix = `exercises-${exerciseId}-batch`;
    const batchNamePrefix = `Exercises[${exerciseId}].Batches[${batchCount}]`;
    const positionId = helpers.nestedListId(batchIdPrefix, batchCount, "position");
    const positionField = `<input type="hidden" id="${positionId}" name="${batchNamePrefix}.Position" value="${batchCount}" />`;
    const repsId = helpers.nestedListId(batchIdPrefix, batchCount, "reps");
    const repsField = helpers.fieldDiv(helpers.inputTag({
        id: repsId,
        placeholder: "Reps",
        type: "number",
        name: `${batchNamePrefix}.Reps`
    }));
    const weightId = helpers.nestedListId(batchIdPrefix, batchCount, "weight");
    const weightField = helpers.fieldDiv(helpers.inputTag({
        id: weightId,
        placeholder: "Weight",
        type: "number",
        name: `${batchNamePrefix}.Weight`
    }));
    return helpers.div(
        helpers.columnsDiv(
            helpers.columnDiv(positionField + repsField) + helpers.columnDiv(weightField), null, ["is-mobile"]
        ),
    null, ["batch"]);
}
