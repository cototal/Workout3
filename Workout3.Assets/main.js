import "./styles.scss";
import $ from "cash-dom";

function padString(string, padding = 2) {
    let output = "0";
    for (let idx = 0; idx < padding; idx++) {
        output = output + "0";
    }
    output = output + string;
    return output.slice(-padding);
}

function formatDateForInput(date) {
    // Format mm/dd/yyyy HH:mm am/pm
    const dateString = [date.getFullYear(), padString(date.getMonth() + 1), date.getDate()].join("-");
    const timeString = [date.getHours(), padString(date.getMinutes())].join(":");
    return [dateString, timeString].join("T");
}

const $listContainer = $("#exercise-list");
if ($listContainer.length) {
    let exerciseCount = 0;
    $("#add-exercise").on("click", evt => {
        evt.preventDefault();
        const date = formatDateForInput(new Date());

        $listContainer.append(`<div class="exercise">
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <label class="label">Position</label>
                        <div class="control">
                            <input class="input" type="number"
                                name="Exercises[${exerciseCount}].Position" value="${exerciseCount}">
                        </div>
                    </div>
                </div>
                <div class="column is-three-quarters">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text"
                                name="Exercises[${exerciseCount}].Name" value="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <div class="field">
                        <label class="label">Start</label>
                        <div class="control">
                            <input class="input" type="datetime-local" name="Exercises[${exerciseCount}].StartTime" value="${date}">
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="field">
                        <label class="label">End</label>
                        <div class="control">
                            <input class="input" type="datetime-local" name="Exercises[${exerciseCount}].EndTime" value="${date}">
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
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
