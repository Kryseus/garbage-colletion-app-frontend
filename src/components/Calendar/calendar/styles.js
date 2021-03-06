function isSelected(day, value) {
    return value.isSame(day, "day");
};

function beforeToday(day) {
    return day.isBefore(new Date(), "month");
};

/*function afterToday(day) {
    return day.isAfter(new Date(), "month");
};*/

function isToday(day) {
    return day.isSame(new Date(), "day");
};

const dayStyles = (day, value) => {
    if (beforeToday(day)) return "before";
    if (isSelected(day, value)) return "selected";
    if (isToday(day)) return "today";
    //if (afterToday(day)) return "after"
    return "";
};

export default dayStyles;