import { ArgumentsHost, Catch, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaClientExceptionFilter extends BaseExceptionFilter {
  catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = exception.message.replace(/\n/g, '');

    switch (exception.code) {
      case 'P2002': // Unique constraint failed
        response.status(HttpStatus.CONFLICT).json({
          statusCode: HttpStatus.CONFLICT,
          message: `Unique constraint failed: ${message}`,
          error: 'Conflict',
        });
        break;
      case 'P2003': // Foreign key violation
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Foreign key constraint failed: ${message}`,
          error: 'Bad Request',
        });
        break;
      case 'P2000': // Value too long
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Value too long for column: ${message}`,
          error: 'Bad Request',
        });
        break;
      case 'P2025': // Record not found
        response.status(HttpStatus.NOT_FOUND).json({
          statusCode: HttpStatus.NOT_FOUND,
          message: `Record not found: ${message}`,
          error: 'Not Found',
        });
        break;
      case 'P2004': // Constraint violation
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Constraint violation: ${message}`,
          error: 'Bad Request',
        });
        break;
      case 'P2014': // Violation of required relation
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Required relation violation: ${message}`,
          error: 'Bad Request',
        });
        break;
      case 'P2010': // Raw query failed
        response.status(HttpStatus.BAD_REQUEST).json({
          statusCode: HttpStatus.BAD_REQUEST,
          message: `Raw query failed: ${message}`,
          error: 'Bad Request',
        });
        break;
      default:
        super.catch(exception, host);
        break;
    }
  }
}
