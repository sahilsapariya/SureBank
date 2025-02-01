type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const logLevels: Record<string, LogLevel> = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error',
};

class Logger {
  // Store the current log level
  private readonly currentLevel: LogLevel;

  constructor() {
    // Set the current log level from the config or default to "debug"
    this.currentLevel = (process.env.LOGGER_LEVEL as LogLevel) || logLevels.DEBUG;
  }

  /**
   * Checks if a given log level is allowed based on the current log level.
   * @param level - The log level to check
   * @returns Whether the log level is allowed based on the current level
   */
  private canLog(level: LogLevel): boolean {
    const levels: LogLevel[] = ['debug', 'info', 'warn', 'error'];
    return levels.indexOf(level) >= levels.indexOf(this.currentLevel);
  }

  /**
   * Logs the message based on the provided log level.
   * @param level - The log level to use
   * @param message - The message to log
   * @param args - Additional arguments to log
   */
  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    // If the log level allows this message to be logged, print it to the console
    if (this.canLog(level)) {
      switch (level) {
        case logLevels.DEBUG:
          console.debug(message, ...args);
          break;
        case logLevels.INFO:
          console.info(message, ...args);
          break;
        case logLevels.WARN:
          console.warn(message, ...args);
          break;
        case logLevels.ERROR:
          console.error(message, ...args);
          break;
        default:
          console.log(message, ...args);
      }
    }
  }

  // Public methods for logging at different levels
  debug(message: string, ...args: unknown[]): void {
    this.log(logLevels.DEBUG, message, ...args);
  }

  info(message: string, ...args: unknown[]): void {
    this.log(logLevels.INFO, message, ...args);
  }

  warn(message: string, ...args: unknown[]): void {
    this.log(logLevels.WARN, message, ...args);
  }

  error(message: string, ...args: unknown[]): void {
    this.log(logLevels.ERROR, message, ...args);
  }
}

const logger = new Logger();

export default logger;
