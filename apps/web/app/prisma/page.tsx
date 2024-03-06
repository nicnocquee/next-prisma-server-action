import { prisma } from "database";
import FlavourComponent from "./flavour";

export default async function Page() {
  const flavours = await prisma.flavors.findMany({});

  return (
    <div
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {flavours.map((f) => {
        return <FlavourComponent key={f.id} name={f.name} id={f.id} />;
      })}
    </div>
  );
}
