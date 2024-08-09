import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UsersService } from './users/users.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const usersService = app.get(UsersService);

  const email = "contato@alandiniz.com.br";
  const username = "admin";
  const password = "Acelot270290";

  // Verifica se o usuário já existe
  const existingUser = await usersService.findByEmail(email);
  if (existingUser) {
    console.log('User already exists');
  } else {
    // Cria o usuário
    const user = await usersService.create(username, email, password);
    console.log('User admin created successfully', user);
  }

  await app.close();
}

bootstrap().catch(err => {
  console.error('Seed script failed', err);
  process.exit(1);
});
