type SearchParams = {
  a?: string;
  b?: string;
};

export default async function LNKOkivonasosPage({ searchParams }: { searchParams: SearchParams }) {
  const params: SearchParams = await searchParams;
  // Létezés és konvertálhatóság ellőnrzése:
  let a: number = Number(params.a) || 12;
  let b: number = Number(params.b) || 8;
  // a és b változók egész értékeket tartalmaznak?
  a = Math.floor(a) !== a ? 12 : a;
  b = Math.floor(b) !== b ? 8 : b;

  let segédA: number = a;
  let segédB: number = b;

  // Kivonásos algoritmus:
  while (segédA != segédB) {
    if (segédA > segédB) {
      segédA = segédA - segédB;
    } else {
      segédB = segédB - segédA;
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="w-150 rounded-xl bg-white p-5 font-mono shadow-xl">
        <h1 className="text-center text-2xl font-semibold mb-5">LNKO kivonásos algoritmusa</h1>
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
