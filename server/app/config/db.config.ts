import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { ConfigService } from "@nestjs/config";

export const createTypeOrmProdConfig = (configService: ConfigService): TypeOrmModuleOptions => {
	return ({
		type: configService.get('TYPE'),
		host: configService.get('HOST'),
		port: configService.get('PORT'),
		username: 'root',
		password: 'root',
		database: 'test',
		entities: [],
		synchronize: true,
	})
}