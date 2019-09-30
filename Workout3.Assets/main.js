import "./styles.scss";
import $ from "cash-dom";

import { exerciseForm } from "./views/exerciseForm";
import { batchForm } from "./views/batchForm";

const $listContainer = $("#exercise-list");
if ($listContainer.length) {
    let exerciseCount = 0;
    $("#add-exercise").on("click", evt => {
        evt.preventDefault();
        $listContainer.append(exerciseForm(exerciseCount));
        ++exerciseCount;
    });

    $(document).on("click", ".add-batch", evt => {
        evt.preventDefault();
        const $exercise = $(evt.target);
        const $batchContainer = $exercise.closest(".exercise").find(".batches");
        const batchCount = $batchContainer.find(".batch").length;
        const exerciseId = $exercise.data("exercise-id");
        $batchContainer.append(batchForm(exerciseId, batchCount));
    })
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
