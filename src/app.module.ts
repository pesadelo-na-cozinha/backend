import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MesasModule } from './mesas/mesas.module';
import { PedidosModule } from './pedidos/pedidos.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MesasModule, PedidosModule],
})
export class AppModule {}
