import { useProduct } from "../hooks/useProduct";
import style from "../styles/styles.module.css";

export const ProductCard = () => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={style.productCard}>
      <img
        className={style.productImg}
        src="./coffee-mug.png"
        alt="coffe-mug"
      />
      <span>Coffe Mug</span>
      <div className={style.buttonsContainer}>
        <button onClick={() => increaseBy(-1)} className={style.buttonMinus}>
          {" "}
          -{" "}
        </button>
        <div className={style.countLabel}> {counter} </div>
        <button onClick={() => increaseBy(+1)} className={style.buttonAdd}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};
