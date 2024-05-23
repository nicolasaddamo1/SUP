import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Sumar {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  prop1;

  @Column()
  prop2;

  @Column()
  resultado;
}

export class Restar {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  prop1;

  @Column()
  prop2;

  @Column()
  resultado;
}

export class Multiplicar {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  prop1;

  @Column()
  prop2;

  @Column()
  resultado;
}

export class Dividir {
  @PrimaryGeneratedColumn()
  id;

  @Column()
  prop1;

  @Column()
  prop2;

  @Column()
  resultado;
}
