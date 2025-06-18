import { Module } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Mesa } from '../mesas/entities/mesa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido, Mesa])],
  controllers: [PedidosController],
  providers: [PedidosService],
})
export class PedidosModule {}
