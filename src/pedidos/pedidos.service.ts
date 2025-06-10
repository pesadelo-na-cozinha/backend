import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';

@Injectable()
export class PedidosService {
  private pedidos: CreatePedidoDto[] = [];

  create(createPedidoDto: CreatePedidoDto) {
    return this.pedidos.push(createPedidoDto);
  }

  findAll() {
    return this.pedidos;
  }

  findOne(id: number) {
    return this.pedidos[id];
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return (this.pedidos[id] = { ...this.pedidos[id], ...updatePedidoDto });
  }

  remove(id: number) {
    return this.pedidos.splice(id, 1);
  }
}
