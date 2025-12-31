import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStockFavoritesTable1760926160362 implements MigrationInterface {
    name = 'CreateStockFavoritesTable1760926160362'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\``);
        await queryRunner.query(`CREATE TABLE \`stock_favorites\` (\`id\` int NOT NULL AUTO_INCREMENT, \`user_id\` int NOT NULL, \`symbol\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_c8d5b1be283748c45bcb895dab\` (\`user_id\`, \`symbol\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`stock_favorites\` ADD CONSTRAINT \`FK_39bcbd170bff89cdcebceb3cdad\` FOREIGN KEY (\`user_id\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`stock_favorites\` DROP FOREIGN KEY \`FK_39bcbd170bff89cdcebceb3cdad\``);
        await queryRunner.query(`DROP INDEX \`IDX_c8d5b1be283748c45bcb895dab\` ON \`stock_favorites\``);
        await queryRunner.query(`DROP TABLE \`stock_favorites\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_fe0bb3f6520ee0469504521e71\` ON \`users\` (\`username\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\` (\`email\`)`);
    }

}
