// import { NextRequest, NextResponse } from "next/server";
// import puppeteer from "puppeteer";

// export async function POST(req: NextRequest): Promise<NextResponse> {
//   try {
//     const { name } = await req.json();
//     if (!name || typeof name !== "string") {
//       return NextResponse.json(
//         { error: "Nome é obrigatório e deve ser uma string" },
//         { status: 400 }
//       );
//     }

//     const browser = await puppeteer.launch({
//       headless: false,
//       args: ["--no-sandbox", "--disable-setuid-sandbox", "--window-size=1920,1080"], 
//     });

//     const page = await browser.newPage();

//     await page.setViewport({
//       width: 1920,
//       height: 1080,
//     });

    
//     await page.goto("https://www.sofascore.com", { timeout: 60000 });

//     await page.waitForSelector('#search-input', { timeout: 5000 });
//     await page.type("#search-input", name);

//     const response = await page.waitForResponse((res) =>
//       res.url().includes(`/api/v1/search/all?q=${name}&page=0`)
//     );

//     const data = await response.json();

//     await browser.close();

//     return NextResponse.json({ data });
//   } catch (error) {
//     console.error("Erro no Puppeteer:", error);
//     return NextResponse.json(
//       { error: "Erro ao processar a solicitação" },
//       { status: 500 }
//     );
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest): Promise<NextResponse> {
        console.log("aqui");
   try {
    /*    
    const { name } = await req.json();
    console.log(name);
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { error: "Nome é obrigatório e deve ser uma string" },
        { status: 400 }
      );
    }
   */
   console.log("Recebendo requisição POST...");
    const body = await req.json();
    console.log("Corpo da requisição:", body);

    const { name } = body;
    console.log("Nome extraído:", name);

    if (!name || typeof name !== "string") {
      console.log("Erro: Nome inválido ou ausente.");
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


    //await page.goto("https://www.sofascore.com", { timeout: 120000 });
     await page.goto("https://www.sofascore.com", { waitUntil: "networkidle2", timeout: 120000 });

     const searchInput = await page.waitForSelector('#search-input', { timeout: 10000 });
    if (!searchInput) {
        throw new Error("O seletor #search-input não foi encontrado na página.");
    }
    //await page.type("#search-input", name);
    await searchInput.type(name);

    const response = await page.waitForResponse((res) =>
      res.url().includes(`/api/v1/search/all?q=${name}&page=0`)
    );

    const data = await response.json();

    await browser.close();

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Erro no Puppeteer:", error);
    return NextResponse.json(
      { error: "Erro ao processar a solicitação", "Erro no Puppeteer:": error },
      { status: 500 }
    );
  }
}