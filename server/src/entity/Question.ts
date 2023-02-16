import { Entity, Column } from "typeorm";

@Entity()
export class Question {
  @Column()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  author: string;

  @Column()
  timeStamp: number;

  @Column()
  answers: number;

  @Column()
  questions: number;
}
