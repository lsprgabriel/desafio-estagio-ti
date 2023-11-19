import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.user({ email: email });
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };
        return {
            message: 'Login bem sucedido!',
            data: {
                ...payload,
                access_token: this.jwtService.sign(payload),
            }
        };
    }

    async signup(user: any) {
        const newUser = await this.usersService.createUser(user);
        const payload = {
            id: user.id,
            email: user.email,
            isAdmin: user.isAdmin,
        };
        return {
            message: 'Usuário criado com sucesso!',
            data: {
                ...payload,
                access_token: this.jwtService.sign(payload),
            }
        };
    }

    // /api/users payload
    async getUsers() {
        const users = await this.usersService.users({});
        return {
            message: 'Usuários encontrados com sucesso!',
            data: users,
        };
    }

    // /api/users/:id payload
    async getUser(id: any) {
        const user = await this.usersService.user({ id: id });
        return {
            message: 'Usuário encontrado com sucesso!',
            data: user,
        };
    }

    async updateUser(id: any, user: any) {
        const updatedUser = await this.usersService.updateUser({ where: id , data: user });
        return {
            message: 'Usuário atualizado com sucesso!',
            data: updatedUser,
        };
    }

    async deleteUser(id: any) {
        const deletedUser = await this.usersService.deleteUser(id);
        return {
            message: 'Usuário deletado com sucesso!',
            data: deletedUser,
        };
    }
}

