"use client";

// objektum típus:
type LinkType = {
  href: string;
  label: string;
};

export const pi: number = 3.14;

// string típusú tömb:
export const napok: string[] = ["Hétfő", "Kedd", "szerda"];

// Saját objektum típusú tömb
const links: LinkType[] = [
  { href: "/alapok", label: "Alapok" },
  { href: "/heron", label: "Háromszög K-T by Heron" },
  { href: "/teglalap", label: "Téhlalap K-T" },
];

export default function AlapokPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-200">
      <div className="flex w-80 flex-col items-center rounded-lg bg-white p-5 shadow-xl">
        <p>alma</p>
      </div>
    </div>
  );
}
