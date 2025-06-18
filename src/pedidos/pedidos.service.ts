import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './entities/pedido.entity';
import { Mesa } from '../mesas/entities/mesa.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  async create(createPedidoDto: CreatePedidoDto): Promise<Pedido> {
    const mesa = await this.mesaRepository.findOne({
      where: { id: createPedidoDto.mesa_id },
    });

    if (!mesa) {
      throw new Error('Mesa não encontrada');
    }

    const pedido = this.pedidoRepository.create({
      data_hora: createPedidoDto.data_hora,
      mesa_id: createPedidoDto.mesa_id,
      mesa: mesa,
    });

    return await this.pedidoRepository.save(pedido);
  }

  async findAll(): Promise<Pedido[]> {
    return await this.pedidoRepository.find({
      relations: ['mesa', 'itens'],
    });
  }

  async findOne(id: number): Promise<Pedido | null> {
    return await this.pedidoRepository.findOne({
      where: { id },
      relations: ['mesa', 'itens'],
    });
  }

  async update(
    id: number,
    updatePedidoDto: UpdatePedidoDto,
  ): Promise<Pedido | null> {
    await this.pedidoRepository.update(id, updatePedidoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.pedidoRepository.delete(id);
  }
}
