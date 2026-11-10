const fillBox = "[transform-box:fill-box]";

const SKIN = "#6b4430";
const SKIN_SHADE = "#4f3122";
const HAIR = "#15110f";
const SHIRT = "#8f96a0";
const SHIRT_SHADE = "#7a818b";
const WHITE = "#f5f6f8";
const FRAME = "#c29a5b";

// One row of keys on the keyboard, narrowing towards the back
function keysForRow(y) {
  const left = 104 - (y - 352) * 0.5;
  const pitch = (400 - 2 * left) / 13;
  return Array.from({ length: 13 }, (_, i) => ({
    x: left + i * pitch,
    y,
    width: pitch - 3,
  }));
}

const keyRows = [360, 372, 384].map(keysForRow);

// Keys that light up while typing: [row, key, delay in seconds]
const flashingKeys = [
  [0, 2, 0],
  [1, 4, 0.5],
  [2, 3, 0.9],
  [0, 10, 0.3],
  [1, 9, 0.8],
  [2, 10, 1.2],
];

const codeLines = [
  { x: 288, y: 82, width: 52, color: "#60a5fa" },
  { x: 298, y: 96, width: 66, color: "#a78bfa" },
  { x: 298, y: 110, width: 40, color: "#34d399" },
  { x: 308, y: 124, width: 54, color: "#60a5fa" },
  { x: 298, y: 138, width: 30, color: "#fbbf24" },
  { x: 288, y: 152, width: 44, color: "#a78bfa" },
];

const networkNodes = [
  { cx: 48, cy: 92 },
  { cx: 48, cy: 128 },
  { cx: 74, cy: 80 },
  { cx: 74, cy: 110 },
  { cx: 74, cy: 140 },
  { cx: 100, cy: 110 },
];

const networkLinks = [
  [0, 2],
  [0, 3],
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 5],
  [4, 5],
];

export default function HeroAvatar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 420"
      role="img"
      aria-label="Illustration of Adeboss wearing glasses, typing on a keyboard"
      className={`bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-slate-800 dark:to-indigo-950 ${className}`}
    >
      <defs>
        <clipPath id="avatar-lenses">
          <circle cx="176" cy="150" r="20" />
          <circle cx="224" cy="150" r="20" />
        </clipPath>
      </defs>

      <circle cx="200" cy="190" r="150" className="fill-white/50 dark:fill-white/5" />

      {/* Small neural network */}
      <g className={`${fillBox} motion-safe:animate-avatar-float [animation-delay:-2.5s]`}>
        <rect x="28" y="62" width="92" height="96" rx="14" className="fill-white/90 dark:fill-slate-900/90" />
        {networkLinks.map(([from, to]) => (
          <line
            key={`${from}-${to}`}
            x1={networkNodes[from].cx}
            y1={networkNodes[from].cy}
            x2={networkNodes[to].cx}
            y2={networkNodes[to].cy}
            strokeWidth="1.5"
            className="stroke-indigo-300 dark:stroke-indigo-500/60"
          />
        ))}
        {networkNodes.map((node, i) => (
          <circle
            key={i}
            {...node}
            r="6"
            style={{ animationDelay: `${i * 0.3}s` }}
            className={`fill-blue-500 origin-center ${fillBox} motion-safe:animate-avatar-pulse`}
          />
        ))}
      </g>

      {/* Code window */}
      <g className={`${fillBox} motion-safe:animate-avatar-float [animation-delay:-1s]`}>
        <rect x="274" y="48" width="106" height="124" rx="14" fill="#0f172a" />
        <circle cx="288" cy="62" r="3.5" fill="#f87171" />
        <circle cx="300" cy="62" r="3.5" fill="#fbbf24" />
        <circle cx="312" cy="62" r="3.5" fill="#34d399" />
        {codeLines.map((line, i) => (
          <rect
            key={line.y}
            x={line.x}
            y={line.y}
            width={line.width}
            height="6"
            rx="3"
            fill={line.color}
            style={{ animationDelay: `${i * 0.35}s` }}
            className={`origin-left ${fillBox} motion-safe:animate-avatar-code`}
          />
        ))}
      </g>

      <g className="motion-safe:animate-avatar-float">
        {/* Body */}
        <rect x="181" y="200" width="38" height="58" rx="14" fill={SKIN_SHADE} />
        <path
          d="M112 372C112 302 124 264 168 249L232 249C276 264 288 302 288 372Z"
          fill={SHIRT}
        />
        <rect x="192" y="256" width="16" height="120" fill={WHITE} />
        <circle cx="200" cy="284" r="3" fill="#1f2937" />
        <circle cx="200" cy="314" r="3" fill="#1f2937" />
        <circle cx="200" cy="344" r="3" fill="#1f2937" />
        <path d="M182 228L160 247L178 279L200 256Z" fill={WHITE} />
        <path d="M218 228L240 247L222 279L200 256Z" fill={WHITE} />
        <path d="M182 228L200 256L218 228Z" fill={SKIN_SHADE} />

        {/* Head */}
        <g className={`origin-bottom ${fillBox} motion-safe:animate-avatar-nod`}>
          <circle cx="148" cy="156" r="10" fill={SKIN} />
          <circle cx="252" cy="156" r="10" fill={SKIN} />
          <ellipse cx="200" cy="150" rx="52" ry="63" fill={SKIN} />
          <path
            d="M147 146C141 94 174 76 200 76C228 76 259 94 253 146C250 126 241 113 226 108C208 102 186 103 172 109C158 115 150 128 147 146Z"
            fill={HAIR}
          />

          <path d="M161 125Q175 117 189 124" stroke={HAIR} strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M211 124Q225 117 239 125" stroke={HAIR} strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* Eyes */}
          <g className={`origin-center ${fillBox} motion-safe:animate-avatar-blink`}>
            <ellipse cx="176" cy="151" rx="10" ry="7" fill={WHITE} />
            <ellipse cx="224" cy="151" rx="10" ry="7" fill={WHITE} />
            <g className="motion-safe:animate-avatar-glance">
              <circle cx="176" cy="151" r="5.5" fill="#1a120d" />
              <circle cx="224" cy="151" r="5.5" fill="#1a120d" />
              <circle cx="178" cy="149" r="1.6" fill="#ffffff" />
              <circle cx="226" cy="149" r="1.6" fill="#ffffff" />
            </g>
          </g>

          <path d="M193 178Q200 185 207 178" stroke={SKIN_SHADE} strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M182 192Q200 207 218 192" stroke="#2c1910" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Glasses */}
          <circle cx="176" cy="150" r="20" fill="#ffffff" fillOpacity="0.12" stroke={FRAME} strokeWidth="3" />
          <circle cx="224" cy="150" r="20" fill="#ffffff" fillOpacity="0.12" stroke={FRAME} strokeWidth="3" />
          <path d="M196 147Q200 142 204 147" stroke={FRAME} strokeWidth="3" fill="none" />
          <path d="M156 148L146 146M244 148L254 146" stroke={FRAME} strokeWidth="3" strokeLinecap="round" />
          <g clipPath="url(#avatar-lenses)">
            <polygon
              points="126,185 140,185 164,115 150,115"
              fill="#ffffff"
              fillOpacity="0.75"
              className="motion-safe:animate-avatar-glint"
            />
          </g>
        </g>

        {/* Keyboard */}
        <path d="M96 352H304L330 404H70Z" className="fill-slate-300 dark:fill-slate-600" />
        <rect x="70" y="404" width="260" height="7" rx="3.5" className="fill-slate-400 dark:fill-slate-700" />
        {keyRows.map((row, r) =>
          row.map((key, k) => (
            <rect key={`${r}-${k}`} {...key} height="8" rx="2" className="fill-slate-100 dark:fill-slate-800" />
          ))
        )}
        {flashingKeys.map(([r, k, delay]) => (
          <rect
            key={`flash-${r}-${k}`}
            {...keyRows[r][k]}
            height="8"
            rx="2"
            fill="#60a5fa"
            opacity="0"
            style={{ animationDelay: `${delay}s` }}
            className="motion-safe:animate-avatar-key"
          />
        ))}

        {/* Arms and hands */}
        <path d="M130 288C108 322 116 356 150 364" stroke={SHIRT_SHADE} strokeWidth="34" strokeLinecap="round" fill="none" />
        <path d="M270 288C292 322 284 356 250 364" stroke={SHIRT_SHADE} strokeWidth="34" strokeLinecap="round" fill="none" />
        <g className="motion-safe:animate-avatar-tap">
          <ellipse cx="164" cy="370" rx="21" ry="12" fill={SKIN} />
          <path d="M154 378V384M164 379V386M174 378V384" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
        </g>
        <g className="motion-safe:animate-avatar-tap [animation-delay:-0.35s]">
          <ellipse cx="236" cy="370" rx="21" ry="12" fill={SKIN} />
          <path d="M226 378V384M236 379V386M246 378V384" stroke={SKIN} strokeWidth="5" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}
