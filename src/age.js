import moment from 'moment';
import PromptSync from 'prompt-sync';

const prompt = PromptSync();

export function age() {

    const birth = new moment(prompt("Indique la fecha en la que nació (YYYY-MM-DD): "));

    const now = new moment();

    const duration = moment.duration(now.diff(birth));

    const age_now = Math.round(duration.asYears());

    return age_now;

};