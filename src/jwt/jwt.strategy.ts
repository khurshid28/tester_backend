// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY || 'SECRET_KEY', // .env dan olishingiz mumkin
    });
  }

  async validate(payload: any) {
    // payload bu token ichidagi user ma’lumotlari
    return { id: payload.id, login: payload.login };
  }
}



// auth/jwt-auth.guard.ts
