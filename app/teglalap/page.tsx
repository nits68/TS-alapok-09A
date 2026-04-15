type SearchParams = {
  a?: string; // ? -> opcionális mezők, mert a query stringben nem biztos, hogy minden paraméter jelen lesz
  b?: string;
};

// A Next.js mindig két kulccsal adja át a paraméter objektumokat a page komponensednek:
// params → a dinamikus útvonal szegmensek: app/teglalap/[id]/page.tsx
// searchParams → a query stringből kinyert értékek: http://localhost:8080/teglalap?p1=5&p2=8

export default async function PageWithSearchParams({searchParams}: {searchParams: Promise<SearchParams>;}) {
  const sps = await searchParams;
  const a: number = Number(sps.a) || 3;
  const b: number = Number(sps.b) || 4;
  const terület =  a * b;
  const kerület = 2 * (a + b);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-100 flex-col rounded-lg bg-white p-3 shadow-xl">
        <form className="flex flex-col gap-4">
          <p className="text-xl text-center font-semibold">Téglalap területe és kerülete</p>
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
          <div className="flex justify-center">
            <input className="btn btn-primary" type="submit" value="Számol" />
          </div>
          <div className="flex justify-around">
            <p>T = {terület.toFixed(3)}</p>
            <p>K = {kerület.toFixed(3)}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
