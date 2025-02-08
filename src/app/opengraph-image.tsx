import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

/*
this Image is rendered using vercel/satori.

Satori supports a limited subset of HTML and CSS features, due to its special use cases. In general, only these static and visible elements and properties that are implemented.
For example, the <input> HTML element, the cursor CSS property are not in consideration. And you can't use <style> tags or external resources via <link> or <script>.
Also, Satori does not guarantee that the SVG will 100% match the browser-rendered HTML output since Satori implements its own layout engine based on the SVG 1.1 spec.
*/
export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-red-600">
        <h1 tw="text-6xl text-center text-white font-bold mb-4">MineField AI</h1>
        <h3 tw="text-3xl text-gray-100 text-center">AI-Powered Landmine Detection System</h3>
        <div tw="absolute bottom-8 right-8 text-xl text-gray-200">⚡️ Safety Through Innovation</div>
      </div>
    ),
    {
      ...size,
    }
  );
}
