import { Injectable } from '@nestjs/common';
import { CreateItenDto } from './dto/create-iten.dto';
import { UpdateItenDto } from './dto/update-iten.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Iten } from './entities/iten.entity';

@Injectable()
export class ItensService {
  constructor(
    @InjectRepository(Iten)
    private readonly itenRepository: Repository<Iten>,
  ) {}

  async create(createItenDto: CreateItenDto): Promise<Iten> {
    const iten = this.itenRepository.create(createItenDto);
    return await this.itenRepository.save(iten);
  }

  async findAll(): Promise<Iten[]> {
    return await this.itenRepository.find();
  }

  async findOne(id: number): Promise<Iten | null> {
    return await this.itenRepository.findOne({ where: { id } });
  }

  async update(id: number, updateItenDto: UpdateItenDto): Promise<Iten | null> {
    await this.itenRepository.update(id, updateItenDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.itenRepository.delete(id);
  }
}
