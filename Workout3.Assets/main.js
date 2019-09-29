import "./styles.scss";
import $ from "cash-dom";
import * as helpers from "./views/templateHelpers";

function exerciseTemplate(exerciseCount) {
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
    const endId = helpers.nestedListId("exercises", exerciseCount, "end");
    const endField = helpers.fieldDiv(helpers.labelTag("End", endId) + helpers.dateInput({
        id: endId,
        name: helpers.nestedListName("Exercises", exerciseCount, "EndTime"),
        date: new Date()
    }));
    const posAndName = helpers.columnsDiv(helpers.columnDiv(positionField) + helpers.columnDiv(nameField));
    const timeFields = helpers.columnsDiv(helpers.columnDiv(startField) + helpers.columnDiv(endField));
    const batchDiv = helpers.div("", helpers.nestedListId("exercises", exerciseCount, "batches"), ["batches"]);
    const addBatchButton = `<button data-exercise-id="${exerciseCount}" class="add-batch button is-warning">Add Batch</button>`;
    return helpers.div(posAndName + timeFields + addBatchButton + batchDiv, null, ["exercise"]);
}

const $listContainer = $("#exercise-list");
if ($listContainer.length) {
    let exerciseCount = 0;
    $("#add-exercise").on("click", evt => {
        evt.preventDefault();
        $listContainer.append(exerciseTemplate(exerciseCount));
        ++exerciseCount;
    });
}


$(() => {
    // Bulma navbar
    const $navbarBurgers = $(".navbar-burger");
    if ($navbarBurgers.length > 0) {
        $navbarBurgers.each((idx, el) => {
            const $el = $(el);
            $el.on("click", () => {
                const $target = $(`#${$el.data("target")}`);
                $target.toggleClass("is-active");
            });
        });
    }
});
