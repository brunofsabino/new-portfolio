import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name } = await req.json();

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Nome é obrigatório e deve ser uma string" },
        { status: 400 }
      );
    }

    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1920,1080"], 
    });

    const page = await browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    
    await page.goto("https://www.sofascore.com", { timeout: 600000 });

    
    await page.type("#search-input", name);

    const response = await page.waitForResponse((res) =>
      res.url().includes(`/api/v1/search/all?q=${name}&page=0`)
    );

    const data = await response.json();

    await browser.close();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Erro no Puppeteer:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação" },
      { status: 500 }
    );
  }
}
