import "./styles.scss";
import $ from "cash-dom";
import React from "react";
import ReactDOM from "react-dom";

import { ExerciseList } from "./components/exerciseList";

const exerciseList = document.getElementById("exercise-list");
if (null != exerciseList) {
    console.log(exerciseList);
    ReactDOM.render(
        <ExerciseList />,
        exerciseList
    );
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
