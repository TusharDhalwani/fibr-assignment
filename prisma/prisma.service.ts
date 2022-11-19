import { to } from 'await-to-js';
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
  }
  getDocumentDbError;

  async onModuleInit() {
    //this.logger.info('prisma connection try');
    const [error] = await to(this.$connect());
    if (error) {
      //this.logger.error(error);
    } else {
      //this.logger.info('prisma connected');
      this.$use(async (params, next) => {
        const startTime = process.hrtime.bigint();
        const [error, result] = await to(next(params));
        //this.logger.info({
        //   model: params.model,
        //   action: params.action,
        //   runInTransaction: params.runInTransaction,
        //   responseTime: Number(process.hrtime.bigint() - startTime) / 1000000,
        // });
        // if (error) {
        //   this.logger.error(error);

        //   throw this.getDocumentDbError({ error }); // eslint-disable-line
        // }
        return result;
      });
    }
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      //this.logger.info('prisma closed');
      await app.close();
    });
  }
}
