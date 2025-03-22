import * as winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import { Context, MiddlewareFn } from 'telegraf'

const fileTransport = new DailyRotateFile({
    level: 'info',
    datePattern: 'DD-MM-YY',
    auditFile: 'logrotation.config.json',
    dirname: process.env.LOGFOLDERPATH,
    filename: 'telegram-chatbot-%DATE%',
    extension: '.log',
    utc: true,
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        winston.format.printf((info) => {
            return `[${info.timestamp}] payload: ${JSON.stringify(info.message)}`
        })
    ),
    handleExceptions: true
})

const consoleTransport = new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
        winston.format.printf((info) => {
            return `[${info.timestamp}] payload: ${JSON.stringify(info.message)}`
        })
    )
})

const loggerConfig = {
    level: 'info',
    transports: [fileTransport, consoleTransport]
}

export const logger = winston.createLogger(loggerConfig)

export const winstonLogger = (): MiddlewareFn<Context> => {
    return (ctx, next) => {
        logger.info(ctx.update)
        next()
    }
}
