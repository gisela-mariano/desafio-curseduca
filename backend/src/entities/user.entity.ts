import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Post } from './post.entity';

@Entity()
export class User {
  @PrimaryColumn('uuid')
  readonly id: string;

  @Column({type: "varchar", length:255})
  name: string;

  @Column({type: "varchar", length:255, unique: true})
  email: string;

  @Column({type: "varchar", length:255})
  password: string;

  @OneToMany(() => Post, (post) => post.id_user, {onDelete: 'CASCADE'})
  posts: Post[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
