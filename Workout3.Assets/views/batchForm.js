import * as helpers from "./templateHelpers";

export function batchForm(exerciseId, batchCount) {
    const batchIdPrefix = `exercises-${exerciseId}-batch`;
    const batchNamePrefix = `Exercises[${exerciseId}].Batches[${batchCount}]`;
    const positionId = helpers.nestedListId(batchIdPrefix, batchCount, "position");
    const positionField = helpers.fieldDiv(helpers.labelTag("Position", positionId) + helpers.inputTag({
        id: positionId,
        type: "number",
        name: `${batchNamePrefix}.Position`,
        value: batchCount
    }));
    const repsId = helpers.nestedListId(batchIdPrefix, batchCount, "reps");
    const repsField = helpers.fieldDiv(helpers.labelTag("Reps", repsId) + helpers.inputTag({
        id: repsId,
        type: "number",
        name: `${batchNamePrefix}.Reps`
    }));
    const weightId = helpers.nestedListId(batchIdPrefix, batchCount, "weight");
    const weightField = helpers.fieldDiv(helpers.labelTag("Weight", weightId) + helpers.inputTag({
        id: weightId,
        type: "number",
        name: `${batchNamePrefix}.Weight`
    }));
    return helpers.div(
        helpers.columnsDiv(
            helpers.columnDiv(positionField, null, ["is-one-fifth"]) + helpers.columnDiv(repsField) + helpers.columnDiv(weightField)
        ),
    null, ["batch"]);
}
