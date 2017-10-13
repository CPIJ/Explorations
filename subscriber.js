export default class Subscriber {

    constructor(id) {
        this.id = id;
        this.data - [];
    }

    onChange(data) {
        this.data = data;
    }

    toString() {
        return `Subscriber: ${this.id} ${this.data}`;
    }
}