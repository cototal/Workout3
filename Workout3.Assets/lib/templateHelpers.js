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
