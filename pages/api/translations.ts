import type { NextApiRequest, NextApiResponse } from "next";

import translatablesAR from "../../public/locales/ar/translatable.json";
import translatablesEN from "../../public/locales/en/translatable.json";

async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { lng, ns } = req.query;

  const languages = (lng as string)?.split("+") as string[] | undefined;
  const namespaces = Array.from(new Set((ns as string)?.split("+")?.map((n) => n.split("=")[0]))) as
    | string[]
    | undefined;

  if (!languages || !namespaces) {
    return res.status(200).json({
      data: {
        ar: translatablesAR,
        en: translatablesEN
      }
    });
  }
  const defaultTranslatables = {
    ar: translatablesAR,
    en: translatablesEN
  };

  return res.status(200).json({
    data: defaultTranslatables
  });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return await GET(req, res);
  }

  return res.status(405).json({
    message: "Method not allowed"
  });
}
