import { AppDataSource } from "../config/data-source.js";
const RestaRepository = AppDataSource.getRepository(Resta);

const restaController = async (req, res) => {
  //inicializamos la base de datos
  const queryRunner = AppDataSource.createQueryRunner();
  //conectamos la base de datos
  await queryRunner.connect();
  //destructuramos el body
  const { num1, num2 } = req.body;
  //aplicamos la logica de la funcion
  let resultado = num1 - num2;
  try {
    //iniciamos la transaccion con la base de datos y guardamos
    await queryRunner.startTransaction();
    const nuevaResta = RestaRepository.create({
      prop1: num1,
      prop2: num2,
      resultado: resultado,
    });
    await queryRunner.manager.save(nuevaResta);
    await queryRunner.commitTransaction();
    //si se realizo correcto devolvemos el resultado
    res.status(200).json(resultado);
  } catch (error) {
    //en caso de error retrotraemos el guardado, imprimimos el error en consola y enviamos al usuario
    await queryRunner.rollbackTransaction();
    console.log(error);
    res.status(500).json(error);
  } finally {
    //en cualquier caso liberamos la base de datos
    await queryRunner.release();
  }
};

export default restaController;
