import { Publisher, subscriber } from './Publisher';

export class EventEmitter {
    protected events: Map<string, Publisher> = new Map();

    public add(event: string, cb: subscriber) {
        if (!this.events.has(event)) {
            this.events.set(event, new Publisher());
        }
        this.events.get(event).subscribe(cb);
    }

    public remove(event: string, cb: subscriber) {
        if (this.events.has(event)) {
            this.events.get(event).unsubscribe(cb);
        }
    }

    public emit(event: string, ...args) {
        if (this.events.has(event)) {
            this.events.get(event).notify(...args);
        }
    }
}