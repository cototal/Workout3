export function padString(string, padding = 2, padWith = "0") {
    let output = padWith;
    for (let idx = 0; idx < padding; idx++) {
        output = output + padWith;
    }
    output = output + string;
    return output.slice(-padding);
}

export function formatDateForInput(date) {
    // Format mm/dd/yyyy HH:mm am/pm
    const dateString = [date.getFullYear(), padString(date.getMonth() + 1), padString(date.getDate())].join("-");
    const timeString = [padString(date.getHours()), padString(date.getMinutes())].join(":");
    return [dateString, timeString].join("T");
}

export function div(content, id = null, classes = []) {
    let output = [`<div`];
    if (classes.length > 0) {
        const classString = classes.join(" ");
        output.push(` class="${classString}"`);
    }
    if (null != id) {
        output.push(` id="${id}"`);
    }
    output.push(`>${content}</div>`)
    return output.join("");
}

export function columnsDiv(content, id = null, classes = []) {
    return div(content, id, ["columns", ...classes]);
}

export function columnDiv(content, id = null, classes = []) {
    return div(content, id, ["column", ...classes]);
}

export function fieldDiv(content, id = null, classes = []) {
    return div(content, id, ["field", ...classes]);
}

export function labelTag(content, htmlFor, id = null, classes = []) {
    const classString = ["label", ...classes].join(" ");
    let output = [`<label class="${classString}" for="${htmlFor}"`];
    if (null != id) {
        output.push(` id="${id}"`);
    }
    output.push(`>${content}</label>`);
    return output.join("");
}

export function inputTag(opts) {
    const classString = null == opts.classes ? "input" : ["input", ...opts.classes].join(" ");
    const type = null == opts.type ? "text" : opts.type;
    const value = null == opts.value ? "" : opts.value;
    let output = [`<input class="${classString}" type="${type}" value="${value}" name="${opts.name}"`];
    if (null != opts.id) {
        output.push(` id="${opts.id}"`);
    }

    if (null != opts.placeholder) {
        output.push(` placeholder="${opts.placeholder}"`);
    }
    output.push("/>");
    const divClasses = null == opts.divClasses ? ["control"] : ["control", ...opts.divClasses];
    return div(output.join(""), null, divClasses);
}

export function dateInput(opts) {
    const dateOptions = {
        type: "datetime-local",
        value: formatDateForInput(opts.date),
        ...opts
    }
    return inputTag(dateOptions);
}

export function nestedListId(parent, index, prop) {
    return [parent, index, prop].join("-");
}

export function nestedListName(parent, index, prop) {
    return `${parent}[${index}].${prop}`;
}
