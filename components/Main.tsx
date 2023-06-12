import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function Main(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div>
      <h1 class="font-medium">Something went wrong...</h1>
    </div>
  );
}
