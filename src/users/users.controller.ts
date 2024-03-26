import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() //GET /users
    findAll(@Query('role') role?:'admin'){
        return []
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string) {
        return {id}
    }

    @Post() //POST /users
    create(@Body() users:{}){
        return users
    }

    @Patch(':id')  //PATCH users/:id
    update(@Param('id') id:{}, @Body() userUpdate: {}) {
        return {id, ...userUpdate}
    }               

    @Delete (':id') //DELETE users/:id
    delete(@Param('id') id: {}, @Body() userDelete: {}) {
        return {id, ...userDelete}
    }
}
