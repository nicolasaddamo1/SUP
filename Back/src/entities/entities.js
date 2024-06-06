import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "Suma"})

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


@Entity({name: "Resta"})

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


@Entity({name: "Multiplicacion"})

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


@Entity({name: "Division"})
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
