import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Iten {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column('decimal')
  preco: number;
}
