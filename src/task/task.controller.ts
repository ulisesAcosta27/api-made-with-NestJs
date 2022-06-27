import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";
import { TaskService } from "./task.service";

@Controller("api/v1/task")
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  method(@Body() taskDTO: TaskDTO) {
    // throw new BadRequestException('Error en Peticion')
    // throw new HttpException('Error en Peticion', HttpStatus.BAD_REQUEST)
    return new Promise((resolve, reject) => {
      setTimeout(() => reject("Something was wrong!"), 15000);
    });
    // return this.TaskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.TaskService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.TaskService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() taskDTO: TaskDTO) {
    return this.TaskService.update(id, taskDTO);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.TaskService.delete(id);
  }
}
