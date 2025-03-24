export default function taskBlock(trueOrFalse) {
    const task = false;
    const task2 = true;

    if (trueOrFalse) {
        try {
            let task = true;
            let task2 = false;
        } catch (err) {
            ;
        }

    }

    return [task, task2];
}
