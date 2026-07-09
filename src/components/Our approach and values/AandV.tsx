export default function AandV() {
  const valueIcons = [
    // 1. Heart (Passionate/Care)
    [
      [8, 4],
      [10, 4],
      [14, 4],
      [16, 4],
      [6, 6],
      [8, 6],
      [10, 6],
      [12, 6],
      [14, 6],
      [16, 6],
      [18, 6],
      [4, 8],
      [6, 8],
      [8, 8],
      [10, 8],
      [12, 8],
      [14, 8],
      [16, 8],
      [18, 8],
      [20, 8],
      [4, 10],
      [6, 10],
      [8, 10],
      [10, 10],
      [12, 10],
      [14, 10],
      [16, 10],
      [18, 10],
      [20, 10],
      [6, 12],
      [8, 12],
      [10, 12],
      [12, 12],
      [14, 12],
      [16, 12],
      [18, 12],
      [8, 14],
      [10, 14],
      [12, 14],
      [14, 14],
      [16, 14],
      [10, 16],
      [12, 16],
      [14, 16],
      [12, 18],
    ],
    // 2. Bracket X (Collaboration)
    [
      [4, 4],
      [6, 4],
      [18, 4],
      [20, 4],
      [4, 6],
      [20, 6],
      [8, 8],
      [16, 8],
      [10, 10],
      [14, 10],
      [12, 12],
      [10, 14],
      [14, 14],
      [8, 16],
      [16, 16],
      [4, 18],
      [20, 18],
      [4, 20],
      [6, 20],
      [18, 20],
      [20, 20],
    ],
    // 3. Coffee (Energy & Dedication)
    [
      [10, 3],
      [14, 3],
      [9, 5],
      [13, 5],
      [6, 8],
      [8, 8],
      [10, 8],
      [12, 8],
      [14, 8],
      [16, 8],
      [6, 10],
      [8, 10],
      [10, 10],
      [12, 10],
      [14, 10],
      [16, 10],
      [18, 10],
      [6, 12],
      [8, 12],
      [10, 12],
      [12, 12],
      [14, 12],
      [16, 12],
      [18, 12],
      [6, 14],
      [8, 14],
      [10, 14],
      [12, 14],
      [14, 14],
      [16, 14],
      [8, 16],
      [10, 16],
      [12, 16],
      [14, 16],
    ],
    // 4. Square Grid (Process)
    [
      [6, 6],
      [8, 6],
      [10, 6],
      [14, 6],
      [16, 6],
      [18, 6],
      [6, 8],
      [18, 8],
      [6, 10],
      [10, 10],
      [14, 10],
      [18, 10],
      [6, 14],
      [10, 14],
      [14, 14],
      [18, 14],
      [6, 16],
      [18, 16],
      [6, 18],
      [8, 18],
      [10, 18],
      [14, 18],
      [16, 18],
      [18, 18],
    ],
    // 5. House (Community & Base)
    [
      [12, 4],
      [10, 6],
      [14, 6],
      [8, 8],
      [16, 8],
      [6, 10],
      [18, 10],
      [6, 12],
      [8, 12],
      [16, 12],
      [18, 12],
      [6, 14],
      [8, 14],
      [16, 14],
      [18, 14],
      [6, 16],
      [8, 16],
      [16, 16],
      [18, 16],
      [6, 18],
      [8, 18],
      [10, 18],
      [12, 18],
      [14, 18],
      [16, 18],
      [18, 18],
    ],
    // 6. Briefcase (Detail & Quality)
    [
      [10, 4],
      [12, 4],
      [14, 4],
      [10, 6],
      [14, 6],
      [6, 8],
      [8, 8],
      [10, 8],
      [12, 8],
      [14, 8],
      [16, 8],
      [18, 8],
      [6, 10],
      [8, 10],
      [16, 10],
      [18, 10],
      [6, 12],
      [8, 12],
      [12, 12],
      [16, 12],
      [18, 12],
      [6, 14],
      [8, 14],
      [16, 14],
      [18, 14],
      [6, 16],
      [8, 16],
      [10, 16],
      [12, 16],
      [14, 16],
      [16, 16],
      [18, 16],
    ],
  ];
  return (
    <div className="grid grid-cols-12 gap-8 py-20 px-25 bg-theme-light">
      <div className="col-span-4">
        <h1 className="text-base uppercase text-section-title font-medium font-neue tracking-widest">
          Our Approach and Values
        </h1>
      </div>
      <div className="col-span-8">
        <p className="text-[2.8vw] font-medium leading-tight tracking-tight text-black dark:text-white font-neue">
          <span> We combine creativity, strategic ideas and technology </span>
          <span className="text-section-title">
            to create bespoke solutions that drive your success.
          </span>
        </p>
      </div>
      <div className="col-span-12 flex justify-between items-center pt-24 text-zinc-300 dark:text-zinc-700/80">
        {valueIcons.map((dots, index) => (
          <svg
            key={index}
            className="w-[7.8vw] h-[7.8vw] text-zinc-300/60 dark:text-zinc-700/60"
            viewBox="0 0 24 24"
          >
            {dots.map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="1" fill="currentColor" />
            ))}
          </svg>
        ))}
      </div>
    </div>
  );
}
