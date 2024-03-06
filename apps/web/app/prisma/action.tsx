"use server";

import { prisma } from "database";

export const getFlavourDetail = async (name: string) => {
  const flavour = await prisma.flavors.findFirst({
    where: {
      name,
    },
  });

  return flavour;
};
