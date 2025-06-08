import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MesasModule } from './mesas/mesas.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [MesasModule],
})
export class AppModule {}
