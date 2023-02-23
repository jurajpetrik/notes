import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @Column({ type: 'text' })
  body: string;

  @Column({ type: 'text' })
  headline: string;

  @CreateDateColumn()
  createdAt: Date;
}
