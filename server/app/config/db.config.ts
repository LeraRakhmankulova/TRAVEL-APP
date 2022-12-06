import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from "@nestjs/config";

export const createTypeOrmProdConfig = (configService: ConfigService): TypeOrmModuleOptions => {
	return ({
		type: 'postgres',
		username: 'postgres',
		password: configService.get('PASSWORD'),
		database: configService.get('DATABASE'),
		synchronize: true,
		logging: true,
		logger: 'advanced-console'
	})
}