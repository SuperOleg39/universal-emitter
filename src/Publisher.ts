export type subscriber = (...args) => void;

export class Publisher {
    protected subscribers: subscriber[] = [];

    public subscribe(cb: subscriber) {
        this.subscribers = this.subscribers.concat(cb);
    }

    public unsubscribe(cb: subscriber) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== cb);
    }

    public notify(...args) {
        this.subscribers.forEach(subscriber => subscriber(...args));
    }
}