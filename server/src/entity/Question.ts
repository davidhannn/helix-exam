import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
