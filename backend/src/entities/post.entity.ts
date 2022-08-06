import { v4 as uuid } from 'uuid';
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';


@Entity()
export class Post{

  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({type: "varchar", length:300})
  post: string;

  @ManyToOne(() => User, (user) => user.posts)
  id_user: User;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}