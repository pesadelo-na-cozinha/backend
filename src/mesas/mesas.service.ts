import { Injectable } from '@nestjs/common';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { UpdateMesaDto } from './dto/update-mesa.dto';

@Injectable()
export class MesasService {
  private mesas: CreateMesaDto[] = [];

  create(createMesaDto: CreateMesaDto) {
    return this.mesas.push(createMesaDto);
  }

  findAll() {
    return this.mesas;
  }

  findOne(id: number) {
    return this.mesas[id];
  }

  update(id: number, updateMesaDto: UpdateMesaDto) {
    this.mesas[id] = { ...this.mesas[id], ...updateMesaDto };
    return this.mesas[id];
  }

  remove(id: number) {
    return this.mesas.splice(id, 1);
  }
}
