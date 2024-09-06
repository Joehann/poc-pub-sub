
import { NotificationTopic } from './types/NotificationTopic';
import EventEmitter from './EventEmitter';

class Subscriber {
    constructor(private eventEmitter: EventEmitter, private name: string) {}

    subscribeTo(topic: NotificationTopic): void {
        this.eventEmitter.subscribe(topic, this.handleEvent.bind(this));
        console.log(`🟢 ${this.name} s'est abonné au topic "${topic}".`);
    }

    handleEvent(data: any): void {
        console.log(`👂 ${this.name} a reçu une notification:`, data);
    }
}

export default Subscriber;
