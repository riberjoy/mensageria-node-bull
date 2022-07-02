import { Vote } from "src/entity/vote.entity";
import MySql from '../mysql';

export const voteRepository = MySql.getRepository(Vote);