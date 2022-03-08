import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Configuration } from './configuration';
import { EmployeesModule } from './employees/employees.module';

const mongoDBConfig = Configuration.getMongoDBConfig();

@Module({
  imports: [
    MongooseModule.forRoot(mongoDBConfig.uri, mongoDBConfig.options),
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
