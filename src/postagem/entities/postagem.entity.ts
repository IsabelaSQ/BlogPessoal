import { IsNotEmpty } from 'class-validator';
import { Tema } from '../../tema/entities/tema.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagem' })
export class Postagem {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo!: string;

  @IsNotEmpty()
  @Column({ length: 1000, nullable: false })
  texto!: string;

  @UpdateDateColumn()
  data!: Date;

  // Verifique se na entidade Tema a variável não se chama 'postagens' (no plural)
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })
  tema!: Tema; // <-- Adicionado o '!' aqui para evitar o erro do TypeScript
}
