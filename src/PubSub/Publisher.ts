
import { NotificationTopic } from './types/NotificationTopic';
import EventEmitter from './EventEmitter';

class Publisher {
    constructor(private eventEmitter: EventEmitter) {}

    publish(topic: NotificationTopic, data: any): void {
        console.log(`📣 Publication sur le topic "${topic}":`, data);
        this.eventEmitter.publish(topic, data);
    }
}

export default Publisher;
