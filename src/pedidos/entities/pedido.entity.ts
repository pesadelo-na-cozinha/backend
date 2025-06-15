import { Iten } from 'src/itens/entities/iten.entity';
import { Mesa } from 'src/mesas/entities/mesa.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_hora: Date;

  @ManyToOne(() => Mesa, (mesa) => mesa.pedidos)
  mesa: Mesa;

  @ManyToMany(() => Iten)
  @JoinTable()
  itens: Iten[];
}
