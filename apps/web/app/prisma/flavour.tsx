"use client";
import { getFlavourDetail } from "./action";

export default function FlavourComponent({
  name,
  id,
  formAction,
}: {
  name: string;
  id: string;
  formAction: any;
}) {
  return (
    <form action={formAction} id={id}>
      <input type="hidden" name="name" value={name} />
      <button type="submit" style={{ fontSize: 20, marginBottom: 20 }} key={id}>
        {name}
      </button>
    </form>
  );
}
