import CandidatoQueue from "./candidato.queue";
import EmailQueue from "./email.queue";
import LogQueue from "./log.queue";
import VoteQueue from "./vote.queue";

const queues = {
    log: LogQueue.getInstance().queue,
    email: EmailQueue.getInstance().queue,
    candidato: CandidatoQueue.getInstance().queue,
    vote: VoteQueue.getInstance().queue,
}

export default queues;