import { NestFactory } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { ValidationPipe } from './pipes/validation.pipe';

async function bootstrap() {
   const PORT = process.env.PORT || 5000;
   const app = await NestFactory.create(AppModule);

   const config = new DocumentBuilder()
      .setTitle('Backend Node.js for a construction equipment rental website')
      .setDescription('documentation Rest')
      .setVersion('1.0.0')
      .addTag('My')
      .build();

   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('/api/docs', app, document);
   // let jwtService;
   // app.useGlobalGuards(new JwtAuthGuard(jwtService))
   app.useGlobalPipes(new ValidationPipe())

   await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
