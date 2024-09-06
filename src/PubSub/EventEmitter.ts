type Callback = (data: any) => void;

class EventEmitter {
    private topics: Map<string, Callback[]>;

    constructor() {
        this.topics = new Map();
    }

    subscribe(topic: string, listener: Callback): void {
        if (!this.topics.has(topic)) {
            this.topics.set(topic, []);
        }
        this.topics.get(topic)?.push(listener);
    }

    publish(topic: string, data: any): void {
        const listeners = this.topics.get(topic);
        if (listeners) {
            listeners.forEach((listener) => listener(data));
        }
    }
}

export default EventEmitter;
