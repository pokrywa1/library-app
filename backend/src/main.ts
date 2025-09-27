import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from './prisma-client-exception/prisma-client-exception.filter';
import { BadRequestException, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors) => {
        const message = errors
          .map((err) => Object.values(err.constraints || {}))
          .flat()
          .join(', ');
        return new BadRequestException(message);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
