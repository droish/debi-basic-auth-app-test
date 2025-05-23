import { Injectable } from '@nestjs/common';

export interface User {
  username: string;
  password: string;
}