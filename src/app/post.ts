export class Post {
    public name: string = "";
    public topic: string = "";
    public message: string = "";
    public date: number;

    constructor(name, topic, message) {
        this.name = name;
        this.topic = topic;
        this.message = message;
        this.date = Date.now();
    }
}
