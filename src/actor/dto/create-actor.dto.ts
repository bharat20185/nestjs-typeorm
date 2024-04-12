import { IsNotEmpty, IsString } from "class-validator";

export class CreateActorDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;
}