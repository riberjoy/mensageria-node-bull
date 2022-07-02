import { Candidate } from 'src/entity/candidate.entity';
import MySql from '../mysql';

export const candidateRepository = MySql.getRepository(Candidate);