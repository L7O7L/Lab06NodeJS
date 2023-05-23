import moment from 'moment';

export function days_to_christmas() {

    const now = new moment();
    const year = moment().format('YYYY');

    const end = new Date('Dec 25 ' + year);

    const christmas = new moment(end);

    const duration = moment.duration(christmas.diff(now));

    const days_to_christmas = Math.round(duration.asDays());

    return days_to_christmas;

};

