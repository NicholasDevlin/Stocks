import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ description: 'Unique username', example: 'john_doe' })
  username: string;

  @ApiProperty({ description: 'User email address', example: 'john@example.com', format: 'email' })
  email: string;

  @ApiProperty({ description: 'Strong user password', example: 'P@ssw0rd123', format: 'password' })
  password: string;
}
