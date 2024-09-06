import EventEmitter from './PubSub/EventEmitter';
import Subscriber from './PubSub/Subscriber';
import Publisher from './PubSub/Publisher';
import { NotificationTopic } from './PubSub/types/NotificationTopic';

const eventEmitter = new EventEmitter();

const mario = new Subscriber(eventEmitter, 'Mario');
const luigi = new Subscriber(eventEmitter, 'Luigi');
const peach = new Subscriber(eventEmitter, 'Peach');

mario.subscribeTo(NotificationTopic.Anniversaires);
luigi.subscribeTo(NotificationTopic.Promotions);
peach.subscribeTo(NotificationTopic.Evenements);
luigi.subscribeTo(NotificationTopic.Evenements);

const publisher = new Publisher(eventEmitter);

publisher.publish(NotificationTopic.Anniversaires, { message: "C'est l'anniversaire de Marie aujourd'hui !" });
publisher.publish(NotificationTopic.Promotions, { offre: "50% de réduction sur les chaussures !" });
publisher.publish(NotificationTopic.Evenements, { event: "Concert ce week-end au parc." });
