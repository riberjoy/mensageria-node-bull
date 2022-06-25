import * as Bull from 'bull';
import { Queues } from '../enums';
import configs from '../configs/index';

export default class BaseQueue {
    queue: Bull.Queue<any>;

    constructor(queue: Queues) {
        this.queue = new Bull(queue, {
            redis: configs.redis,
            prefix: 'bull',
            settings: {
                retryProcessDelay: 500,
            }
        })

        this.queue.on('failed', this.failed);
        this.queue.on('completed', this.completed);
        this.queue.on('error', error => {
            console.error(`Falha nos testes verifique suas configurações: ${error}`);
        });
    }

    protected failed(job, err) {
        console.error(`Queue ${job.queue.nome} failed, ${job.id} - ${job.failedReason}`);
        console.error(err);

    }
    protected completed(job) {
        console.error(`Queue ${job.queue.nome} failed, ${job.id}`);
    }

    add(body: any, opts?: Bull.JobOptions) {
        return this.queue.add(
            body,
            opts || {
                attempts: 5,
                delay: 2000,
                removeOnFail: false,
                backoff: 5000,
            }
        )
    }

}

