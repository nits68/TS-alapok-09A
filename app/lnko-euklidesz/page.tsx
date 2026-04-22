type SearchParams = {
  a?: string;
  b?: string;
};

export default async function LNKOeuklideszPage({ searchParams }: { searchParams: SearchParams }) {
  const params: SearchParams = await searchParams;
  // Létezés és konvertálhatóság ellőnrzése:
  let a: number = Number(params.a) || 12;
  let b: number = Number(params.b) || 8;
  // a és b változók egész értékeket tartalmaznak?
  a = Math.floor(a) !== a ? 12 : a;
  b = Math.floor(b) !== b ? 8 : b;

  let segédA: number = a;
  let segédB: number = b;

  // Euklideszi algoritmus (hátultesztelő ciklus: do-while)
  let m: number;
  do {
    // 1. lépés: két szám osztásának a maradéka:
    m = segédA % segédB;
    // 2. lépés: a = b, valójában az előző "kör" maradéka kerül az "a" változóba
    segédA = segédB;
    // 3. lépés:  b = m, az aktuális "kör" maradéka kerül a "b" vátozóba
    segédB = m;
  } while( m != 0)

    // Euklidesz megállapítála: Az utolsó, nem nulla maradék lesz az LNKO (segédA)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="w-150 rounded-xl bg-white p-5 font-mono shadow-xl">
        <h1 className="text-center text-2xl font-semibold mb-5">LNKO Euklideszi algoritmusa</h1>
        <form className="space-y-2">
          <div>
            <label className="mr-4">a =</label>
            <input className="input input-primary" defaultValue={a} name="a" type="text" />
          </div>
          <div>
            <label className="mr-4">b =</label>
            <input className="input input-primary" defaultValue={b} name="b" type="text" />
          </div>
          <div className="mt-4">
            <p className="text-center text-2xl font-semibold">
              LNKO({a}, {b}) = {segédA}
            </p>
          </div>
          <button className="hidden" type="submit"></button>
        </form>
      </div>
    </div>
  );
}
