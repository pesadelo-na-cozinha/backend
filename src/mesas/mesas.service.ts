import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mesa } from './entities/mesa.entity';

@Injectable()
export class MesasService {
  constructor(
    @InjectRepository(Mesa)
    private readonly mesaRepository: Repository<Mesa>,
  ) {}

  async create(createMesaDto: CreateMesaDto): Promise<Mesa> {
    const mesa = this.mesaRepository.create(createMesaDto);
    return await this.mesaRepository.save(mesa);
  }

  async findAll(): Promise<Mesa[]> {
    return await this.mesaRepository.find({ relations: ['pedidos'] });
  }

  async findOne(id: number): Promise<Mesa | null> {
    return await this.mesaRepository.findOne({
      where: { id },
      relations: ['pedidos'],
    });
  }

  async update(id: number, updateMesaDto: UpdateMesaDto): Promise<Mesa | null> {
    await this.mesaRepository.update(id, updateMesaDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.mesaRepository.delete(id);
  }
}
