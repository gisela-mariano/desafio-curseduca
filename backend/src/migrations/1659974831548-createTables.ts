import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1659974831548 implements MigrationInterface {
    name = 'createTables1659974831548'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_f616dfd002c93ab051dd9b75b52"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_f616dfd002c93ab051dd9b75b52" FOREIGN KEY ("idUserId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_f616dfd002c93ab051dd9b75b52"`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_f616dfd002c93ab051dd9b75b52" FOREIGN KEY ("idUserId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
