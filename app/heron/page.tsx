type SearchParams = {
  a?: string;
  b?: string;
  c?: string;
};

export default async function PageWithSearchParams({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const p = await searchParams;
  const a: number = Number(p.a) || 3;
  const b: number = Number(p.b) || 4;
  const c: number = Number(p.c) || 5;

  const szerkeszthető: boolean = a + b > c && a + c > b && b + c > a;

  const kerület: number = a + b + c;
  const s: number = kerület / 2;
  const terület: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col rounded-lg bg-white p-3 shadow-xl">
        <form className="flex flex-col gap-4">
          <p className="text-center text-xl font-semibold">Háromszög területe és kerülete</p>
          <div>
            <label htmlFor="a">a = </label>
            <input
              className="input input-primary"
              defaultValue={a}
              id="a"
              name="a"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="b">b = </label>
            <input
              className="input input-primary"
              defaultValue={b}
              id="b"
              name="b"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="c">c = </label>
            <input
              className="input input-primary"
              defaultValue={c}
              id="c"
              name="c"
              required
              type="text"
            />
          </div>
          <div className="flex justify-center">
            <input className="btn btn-primary" type="submit" value="Számol" />
          </div>
          {szerkeszthető ? (
            <div className="flex justify-around">
              <p>T = {terület.toFixed(3)}</p>
              <p>K = {kerület.toFixed(3)}</p>
            </div>
          ) : (
            <div>Ezekkel az adatokkal nem lehet háromszöget szerkeszteni!</div>
          )}
        </form>
      </div>
    </div>
  );
}
