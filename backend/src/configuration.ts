import { MongooseModuleOptions } from '@nestjs/mongoose';

export class Configuration {
  public static HTTP_PORT = process.env.HTTP_PORT;

  public static getMongoDBConfig(): {
    uri: string;
    options: MongooseModuleOptions;
  } {
    const {
      MONGO_HOST,
      MONGO_PORT,
      MONGO_USERNAME,
      MONGO_PASSWORD,
      MONGO_INITDB_DATABASE,
    } = process.env;

    const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_INITDB_DATABASE}?authSource=${MONGO_INITDB_DATABASE}&readPreference=primary`;

    return {
      uri,
      options: {},
    };
  }
}
