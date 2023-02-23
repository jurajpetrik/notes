import { IsString, IsNotEmpty } from "class-validator";

export class CreateNoteDto {
  @IsString()
  headline: string;

  @IsString()
  body: string;
}
