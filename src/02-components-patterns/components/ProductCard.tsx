import { useProduct } from "../hooks/useProduct";
import style from "../styles/styles.module.css";
import noImg from "../assets/no-image.jpg";

interface Props {
  product: Product;
}

interface Product {
  id: string;
  title: string;
  img?: string;
}

export const ProductCard = ({ product }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <div className={style.productCard}>
      <img
        className={style.productImg}
        src={product.img ? product.img : noImg}
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
