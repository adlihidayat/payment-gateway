"use client";
import { checkout } from "../checkout";

export default function Home() {
  return (
    <main className="">
      <h2 className=" text-2xl">buy below fast</h2>
      <button
        className=" bg-slate-200 p-1 border border-black hover:bg-slate-100"
        onClick={() => {
          checkout({
            lineItems: [
              {
                price: "price_1NTHrMFNdU6DayXcwfbfOCC4 ",
                quantity: 1,
              },
            ],
          });
        }}
      >
        BUY!
      </button>
    </main>
  );
}
