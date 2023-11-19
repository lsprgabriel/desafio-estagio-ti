import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AdminOnly } from './auth/is-admin.decorator';
import { AdminGuard } from './auth/is-admin.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) { }

  @Get('/')
  async index() {
    return {
      message: 'API desenvolvida por @lsprgabriel',
      data: {
        version: '1.0.0',
      },
    };
  }

  @Post('api/signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('api/users')
  async users(@Request() req) {
    return this.usersService.users({});
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('api/user/:id')
  async user(@Request() req) {
    return this.usersService.user({ id: req.params.id });
  }
}
