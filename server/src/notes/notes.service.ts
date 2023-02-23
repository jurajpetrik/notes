import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Note } from './note.entity';
import { Note as INote } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private notesRepository: Repository<Note>
  ) { }

  async create(@Body() createNoteDto: CreateNoteDto, userId: number) {
    const inserted = await this.notesRepository.insert({ ...createNoteDto, userId });
    const { id } = inserted.raw[0]
    return { id };
  }

  async findAll(userId: number): Promise<INote[]> {
    return this.notesRepository.findBy({ userId });
  }

  async findOne(id, userId: number): Promise<INote> {
    return this.notesRepository.findOneBy({ id, userId });
  }
}
