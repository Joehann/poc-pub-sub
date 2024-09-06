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

    unsubscribe(topic: string, listenerToRemove: Callback): void {
        const listeners = this.topics.get(topic);
        if (listeners) {
            this.topics.set(
                topic,
                listeners.filter((listener) => listener !== listenerToRemove)
            );
        }
    }
}

export default EventEmitter;
