import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 300,
  })
  title: string;

  @Column({
    length: 2000,
  })
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
