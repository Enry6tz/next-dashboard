
import { CounterCart } from "@/app/shopping-cart/components/CounterCart";

export const metadata = {
  title: "Shopping cart",
  description: "Carrito",
};

export default function CounterPage() {

  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CounterCart value={5} />
    </div>
  );
}