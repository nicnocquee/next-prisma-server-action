"use server";

import { prisma } from "database";

export const getFlavourDetail = async (_prevState: any, formData: FormData) => {
  const name = formData.get("name") as string;
  if (!name) {
    return {
      error: "Flavour required",
      data: null,
    };
  }
  const flavour = await prisma.flavors.findFirst({
    where: {
      name,
    },
  });

  return {
    error: null,
    data: flavour,
  };
};
