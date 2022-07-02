import { Queues } from "../enums";
import BaseQueue from "./base.queues";

export default class CandidatoQueue extends BaseQueue{
    private static instance: CandidatoQueue;
    public static getInstance(): CandidatoQueue{
        if(!CandidatoQueue.instance){
            CandidatoQueue.instance = new CandidatoQueue();
        }
        return CandidatoQueue.instance;
    }

    private constructor(){
        super(Queues.candidato);
    }
}