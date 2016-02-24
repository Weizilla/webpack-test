import moment from "moment"

class DateTime {
    toString() {
        return "The time is " + moment().format();
    }
}

export default DateTime;