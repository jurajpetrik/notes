import { Controller, Post, Get, ParseIntPipe, Param, Body, UseGuards, Request } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note as INote } from './interfaces/note.interface';
import { CreateNoteDto } from './dto/create-note.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) { }

  @Post()
  async create(
    @Body() createNoteDto: CreateNoteDto,
    @Request() req
  ) {
    return this.notesService.create(createNoteDto, req.user.userId);
  }

  @Get(':id')
  async findOne(
    @Param('id', new ParseIntPipe()) id: number,
    @Request() req
  ): Promise<INote> {
    return this.notesService.findOne(id, req.user.userId);
  }

  @Get()
  async findAll(@Request() req): Promise<INote[]> {
    return this.notesService.findAll(req.user.userId);
  }


}
