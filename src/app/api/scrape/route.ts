
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
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    // Configurar User-Agent
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36");

    // Aumentar timeout e garantir carregamento completo
    await page.goto("https://www.sofascore.com", { waitUntil: "networkidle2", timeout: 120000 });

    // Verificar se o elemento existe
    const searchInput = await page.$("#search-input");
    if (!searchInput) {
      throw new Error("O seletor #search-input não foi encontrado na página.");
    }
    await searchInput.type(name);

    // Capturar resposta
    const response = await page.waitForResponse(
      (res) => res.url().includes(`/api/v1/search/all?q=${name}&page=0`),
      { timeout: 10000 }
    );

    const data = await response.json();

    await browser.close();
    return NextResponse.json({ data });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro no Puppeteer:", error.message, error.stack);
      return NextResponse.json(
        { error: "Erro ao processar a solicitação", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("Erro desconhecido no Puppeteer:", error);
      return NextResponse.json(
        { error: "Erro ao processar a solicitação", details: "Erro desconhecido" },
        { status: 500 }
      );
    }
  }
}
