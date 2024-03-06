import { prisma } from "database";
import PrismaContent from "./content";

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
      <PrismaContent flavours={flavours} />
    </div>
  );
}
