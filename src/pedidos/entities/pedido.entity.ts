import { Iten } from 'src/itens/entities/iten.entity';
import { Mesa } from 'src/mesas/entities/mesa.entity';
import {
  Column,
  Entity,
  JoinColumn,
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

  @Column()
  mesa_id: number;

  @ManyToOne(() => Mesa, (mesa) => mesa.pedidos)
  @JoinColumn({ name: 'mesa_id' })
  mesa: Mesa;

  @ManyToMany(() => Iten)
  @JoinTable()
  itens: Iten[];
}
