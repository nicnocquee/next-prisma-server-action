"use client";

import { useFormState } from "react-dom";
import { getFlavourDetail } from "./action";
import { flavors } from "database";
import FlavourComponent from "./flavour";

export default function PrismaContent({ flavours }: { flavours: flavors[] }) {
  const [response, formAction] = useFormState(getFlavourDetail, null);

  return (
    <>
      {flavours.map((f) => {
        return (
          <FlavourComponent
            key={f.id}
            name={f.name}
            id={f.id}
            formAction={formAction}
          />
        );
      })}
      <div>
        {response && response.data ? (
          <>
            <p>Result: {response.data.id}</p>
          </>
        ) : null}
      </div>
    </>
  );
}
