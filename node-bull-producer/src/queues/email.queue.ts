import { Queues } from "../enums";
import BaseQueue from "./base.queues";

export default class EmailQueue extends BaseQueue{
    private static instance: EmailQueue;
    public static getInstance(): EmailQueue{
        if(!EmailQueue.instance){
            EmailQueue.instance = new EmailQueue();
        }
        return EmailQueue.instance;
    }

    private constructor(){
        super(Queues.email);
    }
}