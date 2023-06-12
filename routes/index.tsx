import {Head} from "$fresh/runtime.ts";
import {PageProps} from '$fresh/server.ts';
import {IProduct} from "../utils/types.ts";
import Navigation from "../components/Navigation.tsx";
import ProductCard from "../islands/ProductCard.tsx";

export const handler: Handlers<IProduct[] | null> = {
  async GET(_, ctx: unknown) {
    const res = await fetch('https://fakestoreapi.com/products')
    const products = (await res.json()) as IProduct[]
    if (!products) {
      return ctx.render(null)
    }
    return ctx.render(products)
  },
}

export default function Home({data: products}: PageProps<IProduct[] | null>) {
  const appName = Deno.env.get('APP_NAME')

  return (
    <>
      <Head>
        <title>{appName}</title>
        <script src="https://telegram.org/js/telegram-web-app.js"></script>
      </Head>
      <Navigation title={appName} active={false}/>
      <div class="p-4 mx-auto max-w-screen-md mt-[50px]">
        <div>
          {products && products.map((prod) => (
            <ProductCard key={prod.id} product={prod}/>
          ))}
        </div>
      </div>
    </>
  )
}

/*
todo
1) История запросов к нейросетям
2) Выбор тарифа
3) Выбор и настройка нейросетей
*/