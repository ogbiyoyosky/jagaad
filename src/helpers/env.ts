import * as dotenv from 'dotenv';

dotenv.config();

class Env {
  nodeEnv = this.get('NODE_ENV');

  get(variable: string): string {
    return process.env[variable];
  }
}

export default new Env();
