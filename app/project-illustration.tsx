type ProjectArtwork = "pos" | "booking" | "commerce";

const backgrounds = {
  pos: "bg-[#142b24] text-[#8de3c0]",
  booking: "bg-[#152730] text-[#7fc5db]",
  commerce: "bg-[#2c231b] text-[#d9b389]",
};

export function ProjectIllustration({ kind }: { kind: ProjectArtwork }) {
  return (
    <div aria-hidden="true" className={"relative isolate w-full overflow-hidden " + backgrounds[kind]}>
      <div className="project-grid absolute inset-0" />
      <svg
        viewBox={kind === "pos" ? "0 0 600 400" : "0 0 360 174"}
        className="relative block h-auto w-full"
        fill="none"
        fontFamily="ui-monospace, monospace"
      >

        {kind === "pos" && (
          <>
            <path d="M31 112h539M31 293h539M114 25v349M494 25v349" stroke="#5d967d" strokeDasharray="2 6" opacity=".25" />
            <rect x="60" y="61" width="502" height="298" rx="12" fill="#080f0c" opacity=".38" />
            <rect x="45" y="46" width="502" height="298" rx="12" fill="#1a2b24" stroke="#466653" />
            <path d="M46 89h500" stroke="#36513f" />
            <rect x="63" y="60" width="22" height="22" rx="6" fill="#8de3c0" />
            <text x="74" y="77" textAnchor="middle" fill="#173a2b" fontSize="18" fontWeight="700">t</text>
            <text x="94" y="76" fill="#dceee3" fontSize="15" fontWeight="700" letterSpacing="-.5">tindatala</text>
            <path d="M500 68h24" stroke="#6b947c" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 8" />
            <path d="M46 90h101v253H57a11 11 0 0 1-11-11z" fill="#14211b" />
            <rect x="57" y="106" width="78" height="25" rx="5" fill="#2e4c3b" />
            <g fontSize="8.5" fill="#91b39d">
              <text x="74" y="122" fill="#bce6cc">Overview</text>
              <text x="74" y="157">Sales</text>
              <text x="74" y="190">Inventory</text>
              <text x="74" y="223">Customers</text>
            </g>
            <g fill="none" stroke="#6d9c7d" strokeWidth="1.25" strokeLinejoin="round">
              <rect x="62" y="115" width="6" height="6" rx="1" />
              <path d="m62 155 2-3 2 2 3-5m-7 37h7v7h-7zm1 34a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-1 5c0-4 7-4 7 0" />
            </g>
            <text x="167" y="119" fill="#e5f1e8" fontSize="17" fontWeight="600" letterSpacing="-.3">Your store, organized.</text>
            <text x="168" y="136" fill="#89a996" fontSize="8.5">Less paperwork. More time for your tindahan.</text>
            <rect x="167" y="152" width="109" height="62" rx="7" fill="#243e2f" stroke="#365641" />
            <rect x="285" y="152" width="109" height="62" rx="7" fill="#24342b" stroke="#3b5141" />
            <rect x="403" y="152" width="124" height="62" rx="7" fill="#2d392b" stroke="#46543d" />
            <g fontSize="8.5" fill="#b9d1bd">
              <text x="179" y="170">Sales</text>
              <text x="297" y="170">Inventory</text>
              <text x="415" y="170">Customer credit</text>
            </g>
            <path d="m180 197 13-9 13 4 13-11 14 3 27-6" stroke="#8de3c0" strokeWidth="2" strokeLinecap="round" />
            <path d="M299 198h76m-76-8h54" stroke="#6c9b77" strokeWidth="5" strokeLinecap="round" />
            <path d="M419 190h87" stroke="#41543c" strokeWidth="8" strokeLinecap="round" />
            <path d="M419 190h55" stroke="#a9c88e" strokeWidth="8" strokeLinecap="round" />
            <text x="168" y="240" fill="#b9d1bd" fontSize="10" fontWeight="600">Everyday essentials</text>
            <rect x="167" y="253" width="109" height="72" rx="6" fill="#20362a" stroke="#344e3c" />
            <rect x="285" y="253" width="109" height="72" rx="6" fill="#30372b" stroke="#4a503c" />
            <rect x="403" y="253" width="124" height="72" rx="6" fill="#223a34" stroke="#36584c" />
            <g fill="none" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M214 270h17l5 33h-27zm2 5 12 24m-12-6 12-12" stroke="#8fbca0" />
              <path d="M334 272h14v30h-14zm0 4h14m-14 22h14m-10-20 6 4-6 5" stroke="#c8bf95" />
              <path d="M460 268h10v7l3 5v23h-16v-23l3-5zm-3 16h16m-16 12h16" stroke="#90bfb0" />
            </g>
          </>
        )}
        {kind === "booking" && (
          <>
            <circle cx="273" cy="45" r="36" stroke="#5692a8" opacity=".33" />
            <path d="M58 110v16m-8-8h16m226-25v12m-6-6h12" stroke="#5692a8" />
            <rect x="73" y="36" width="222" height="109" rx="12" fill="#050f14" opacity=".13" />
            <rect x="67" y="30" width="222" height="109" rx="12" fill="#172a34" stroke="#376072" />
            <path d="M68 53h220" stroke="#315564" />
            <path d="M81 42h19" stroke="#6eabbe" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 8" />
            <text x="276" y="44" textAnchor="end" fontSize="8" fontWeight="700" letterSpacing="1.3" fill="#96d4e6">RESERVATIONS</text>
            <text x="85" y="77" fontSize="11" fontWeight="700" fill="#c4e6f0">Pick a date</text>
            <path d="M86 89h72m-72 8h53" stroke="#426c7a" strokeWidth="3" strokeLinecap="round" />
            <rect x="85" y="110" width="44" height="13" rx="4" fill="#70bccf" />
            <rect x="179" y="63" width="94" height="63" rx="7" fill="#203e4b" stroke="#355b6b" />
            {Array.from({ length: 28 }, (_, i) => (
              <rect key={i} x={187 + (i % 7) * 11.5} y={71 + Math.floor(i / 7) * 12.2}
                width="8.5" height="8.5" rx="2" fill={i === 17 ? "#a8ddeb" : i % 4 === 0 ? "#426e80" : "#2a4d5b"} />
            ))}
          </>
        )}
        {kind === "commerce" && (
          <>
            <path d="M62 98v16m-8-8h16m222-50v14m-7-7h14" stroke="#b1855c" opacity=".62" />
            <circle cx="180" cy="88" r="69" stroke="#bf8e63" strokeDasharray="3 5" opacity=".48" />
            <rect x="77" y="35" width="213" height="113" rx="12" fill="#9b663d" opacity=".14" />
            <rect x="71" y="29" width="213" height="113" rx="12" fill="#342a21" stroke="#796149" />
            <path d="M72 54h211" stroke="#574434" />
            <path d="M85 42h19" stroke="#a68565" strokeWidth="4" strokeLinecap="round" strokeDasharray="1 8" />
            <text x="272" y="44" textAnchor="end" fontSize="8" fontWeight="700" letterSpacing="1.4" fill="#dec1a3">LOCAL SHOP</text>
            <rect x="86" y="66" width="54" height="50" rx="6" fill="#493627" />
            <rect x="150" y="66" width="54" height="50" rx="6" fill="#43313e" />
            <rect x="214" y="66" width="54" height="50" rx="6" fill="#303e2d" />
            <g fill="none" strokeWidth="1.45" strokeLinejoin="round">
              <path d="M105 86h16l2 19h-20zm4 1v-4a4 4 0 0 1 8 0v4" stroke="#dfb385" />
              <path d="m170 81-7 5 4 5 4-2v16h12V89l4 2 4-5-7-5c-4 5-10 5-14 0Z" stroke="#d8afce" />
              <path d="M233 87h15l2 18h-19zm4 1v-4a4 4 0 0 1 8 0v4" stroke="#b8cf9d" />
            </g>
            <path d="M89 125h26m38 0h27m37 0h25" stroke="#977e66" strokeWidth="3.2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
}
