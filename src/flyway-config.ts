// flyway-config.ts
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config();

export class FlywayConfig {
  url: string;
  user: string;
  password: string;
  locations: string;
  baselineVersion?: string;
  placeholderReplacement?: boolean;

  constructor() {
    this.url = `jdbc:postgresql://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
    this.user = process.env.DB_USERNAME || '';
    this.password = process.env.DB_PASSWORD || '';
    this.locations = process.env.FLYWAY_LOCATIONS || 'filesystem:/src/db/migration';
    this.baselineVersion = process.env.FLYWAY_BASELINE_VERSION;
    this.placeholderReplacement = process.env.FLYWAY_PLACEHOLDER_REPLACEMENT ? process.env.FLYWAY_PLACEHOLDER_REPLACEMENT === 'true' : undefined;
  }

  writeConfigFile(configFilePath: string) {
    const configContent = `
flyway.url=${this.url}
flyway.user=${this.user}
flyway.password=${this.password}
flyway.locations=${this.locations}
flyway.baselineVersion=${this.baselineVersion}
flyway.placeholderReplacement=${this.placeholderReplacement}
    `.trim();

    fs.writeFileSync(configFilePath, configContent);
  }
}

// Generate the Flyway configuration file
const flywayConfig = new FlywayConfig();
const configFilePath = path.resolve(__dirname, 'flyway.conf');
flywayConfig.writeConfigFile(configFilePath);

export default flywayConfig;
