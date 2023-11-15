import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Phone book')
    .setDescription('ApiRestful Swagger for a phone book')
    .setVersion('1.0')
    .addBasicAuth({
      type: 'apiKey',
      name: 'api-key',
      in: 'header',
    })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(8080);
}
bootstrap();
