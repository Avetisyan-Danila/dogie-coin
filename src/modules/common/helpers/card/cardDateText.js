import moment from "moment";
import monthsInRussian from "../../enums/monthsInRussian";

export const cardDateText = (date) => {
    const day = moment(date).format('DD');
    const month = monthsInRussian[moment(date).format('MMMM')];
    const year = moment(date).format('YYYY');
    return `${day} ${month} ${year}`
}
