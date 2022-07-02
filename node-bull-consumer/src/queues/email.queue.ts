import configs from "../configs";
import { Queues } from "../enums";
import BaseQueue from "./base.queues";
import email  from '../email';
import Transport from '../email';

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
        this.queue.process(this.processes)
    }
    private async processes ({ data }){
        console.log(data);      
        await Transport.sendMail({
            to: configs.mail.default.to,
            from: configs.mail.default.from,
            subject:"Você ganhou R$100.000.000,00 no pix, confira!",
            text: JSON.stringify(data)
        })
        console.log("E-mail enviado com sucesso");        
    }
}