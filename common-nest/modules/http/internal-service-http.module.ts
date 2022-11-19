import { HttpModule, HttpModuleOptions } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

export interface InternalServiceHttpModuleOptions extends HttpModuleOptions {
  readonly extras: {
    readonly isInternalService: true;
  };
}

export const httpModule = <T>({ endpointKey }: { readonly endpointKey: keyof T }) =>
  HttpModule.registerAsync({
    imports: [ConfigModule],
    useFactory: (config: ConfigService): InternalServiceHttpModuleOptions => ({
      baseURL: config.get<string>(endpointKey as string),
      responseType: 'json',
      extras: {
        isInternalService: true,
      },
    }),
    inject: [ConfigService],
  });
