"use client";
import { getFlavourDetail } from "./action";

export default function FlavourComponent({
  name,
  id,
}: {
  name: string;
  id: string;
}) {
  return (
    <button
      style={{ fontSize: 20, marginBottom: 20 }}
      onClick={async () => {
        const detail = await getFlavourDetail(name);
        console.log(detail);
      }}
      key={id}
    >
      {name}
    </button>
  );
}
