import EventEmitter from './PubSub/EventEmitter';
import Subscriber from './PubSub/Subscriber';
import Publisher from './PubSub/Publisher';
import { NotificationTopic } from './PubSub/types/NotificationTopic';

const eventEmitter = new EventEmitter();

const mario = new Subscriber(eventEmitter, 'Mario');
const luigi = new Subscriber(eventEmitter, 'Luigi');
const peach = new Subscriber(eventEmitter, 'Peach');
const toad = new Subscriber(eventEmitter, 'Toad');

mario.subscribeTo(NotificationTopic.Anniversaires);
luigi.subscribeTo(NotificationTopic.Promotions);
peach.subscribeTo(NotificationTopic.Evenements);
luigi.subscribeTo(NotificationTopic.Evenements);
toad.subscribeTo(NotificationTopic.Promotions);
toad.subscribeTo(NotificationTopic.Evenements);

const publisher = new Publisher(eventEmitter);

publisher.publish(NotificationTopic.Anniversaires, { message: "C'est l'anniversaire de Bowser aujourd'hui !" });
publisher.publish(NotificationTopic.Promotions, { offre: "50% de réduction sur les champignons !" });
publisher.publish(NotificationTopic.Evenements, { event: "Piscine à boules Party !!!" });



