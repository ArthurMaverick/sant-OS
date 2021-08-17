import {Entity, PrimaryColumn, CreateDateColumn, Column} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryColumn({type: 'varchar'})
  slug!: string

  @Column({type: 'varchar'})
  title!: string

  @Column({type: 'text'})
  body!: string

  @Column('text', {array: true})
  images!: string[]

  @Column('text', {array: true})
  categories!: string[]

  @CreateDateColumn({default: 'now()'})
  createdAt!: Date
}
