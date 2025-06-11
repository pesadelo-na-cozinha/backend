import { Injectable } from '@nestjs/common';
import { CreateItenDto } from './dto/create-iten.dto';
import { UpdateItenDto } from './dto/update-iten.dto';

@Injectable()
export class ItensService {
  private itens: CreateItenDto[] = [];

  create(createItenDto: CreateItenDto) {
    return this.itens.push(createItenDto);
  }

  findAll() {
    return this.itens;
  }

  findOne(id: number) {
    return this.itens[id];
  }

  update(id: number, updateItenDto: UpdateItenDto) {
    return (this.itens[id] = { ...this.itens[id], ...updateItenDto });
  }

  remove(id: number) {
    return this.itens.splice(id, 1);
  }
}
