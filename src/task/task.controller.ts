import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { TaskDTO } from "./dto/task.dto";
import { TaskService } from './task.service';

@Controller("api/v1/task")
export class TaskController {
  constructor(private readonly TaskService: TaskService) {}

  @Post()
  method(@Body() taskDTO: TaskDTO) {
    return this.TaskService.create(taskDTO);
  }

  @Get()
  findAll() {
    return this.TaskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.TaskService.findOne(id)
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.TaskService.update(id, taskDTO)
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.TaskService.delete(id)
  }
}
