export default class Producer {

    constructor(onData) {
        this.onData = onData;
        window.producer = this;
    }

    newData(data) {
        this.onData(data);
    }

    randomArray(length, max) {
        return [...new Array(length)]
            .map(() => Math.round(Math.random() * max))
    }
}