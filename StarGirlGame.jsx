import { useState, useEffect, useRef, useCallback } from "react";

// ══════════════════════════════════════════════════════════════
//  SVG CHARACTERS — corpo completo animado
// ══════════════════════════════════════════════════════════════

function CharStellaRose({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .sr-hairBack{animation:srHB 2.2s ease-in-out infinite;transform-origin:60px 28px}
        .sr-dress{animation:srDr 2.4s ease-in-out infinite;transform-origin:60px 130px}
        .sr-torso{animation:srBr 3s ease-in-out infinite;transform-origin:60px 95px}
        .sr-aL{animation:srAL ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:44px 88px}
        .sr-aR{animation:srAR ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:76px 88px}
        .sr-lL{animation:srLL ${walk?"0.46s":"0s"} ease-in-out infinite;transform-origin:51px 148px}
        .sr-lR{animation:srLR ${walk?"0.46s":"0s"} ease-in-out infinite;transform-origin:69px 148px}
        .sr-crown{animation:srCr 2s ease-in-out infinite;transform-origin:60px 18px}
        .sr-sparkle{animation:srSp 1.4s ease-in-out infinite alternate}
        @keyframes srHB{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
        @keyframes srDr{0%,100%{transform:skewX(-2deg)scaleX(1)}50%{transform:skewX(2deg)scaleX(1.02)}}
        @keyframes srBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.03)translateY(-1px)}}
        @keyframes srAL{0%,100%{transform:rotate(${walk?"-28deg":"-6deg"})}50%{transform:rotate(${walk?"28deg":"6deg"})}}
        @keyframes srAR{0%,100%{transform:rotate(${walk?"28deg":"6deg"})}50%{transform:rotate(${walk?"-28deg":"-6deg"})}}
        @keyframes srLL{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}
        @keyframes srLR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-22deg)}}
        @keyframes srCr{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
        @keyframes srSp{0%{opacity:.5;transform:scale(.8)rotate(0deg)}100%{opacity:1;transform:scale(1.3)rotate(25deg)}}
      `}</style></defs>
      {/* === CABELO TRASEIRO === */}
      <g className="sr-hairBack">
        <path d="M34 35 Q26 70 30 110" stroke="#e91e8c" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M86 35 Q94 70 90 110" stroke="#e91e8c" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M42 30 Q46 70 44 100" stroke="#f06ab0" strokeWidth="6" fill="none" strokeLinecap="round"/>
        <path d="M78 30 Q74 70 76 100" stroke="#f06ab0" strokeWidth="6" fill="none" strokeLinecap="round"/>
      </g>
      {/* === SAIA === */}
      <g className="sr-dress">
        <path d="M38 118 Q30 155 24 178 Q60 186 96 178 Q90 155 82 118Z" fill="#ff69b4"/>
        <path d="M40 125 Q32 158 27 178 Q60 184 93 178 Q88 158 80 125Z" fill="#ff85c8" opacity=".6"/>
        <path d="M36 140 Q60 150 84 140" stroke="#ffc0de" strokeWidth="1.5" fill="none"/>
        <path d="M30 160 Q60 170 90 160" stroke="#ffc0de" strokeWidth="1.5" fill="none" opacity=".7"/>
        {/* coração na saia */}
        <path d="M56 148 Q60 143 64 148 Q68 143 72 148 Q72 154 60 162 Q48 154 48 148 Q52 143 56 148Z" fill="#ff4da6" opacity=".8"/>
      </g>
      {/* === TORSO / VESTIDO TOPO === */}
      <g className="sr-torso">
        <rect x="43" y="82" width="34" height="40" rx="9" fill="#ff9ecf"/>
        <rect x="47" y="86" width="26" height="7" rx="4" fill="#ff69b4" opacity=".6"/>
        {/* laço no centro */}
        <path d="M54 115 L58 110 L60 115 L62 110 L66 115" stroke="#ff4da6" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
        <circle cx="60" cy="115" r="2.5" fill="#ff4da6"/>
      </g>
      {/* === BRAÇOS === */}
      <g className="sr-aL">
        <path d="M43 90 Q28 98 22 110" stroke="#ffcce8" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="113" r="6" fill="#ffcce8"/>
        {/* luva */}
        <path d="M14 110 Q20 120 26 113" stroke="#ff9ecf" strokeWidth="3" fill="none" strokeLinecap="round"/>
      </g>
      <g className="sr-aR">
        <path d="M77 90 Q92 98 98 110" stroke="#ffcce8" strokeWidth="10" strokeLinecap="round" fill="none"/>
        <circle cx="100" cy="113" r="6" fill="#ffcce8"/>
        <path d="M94 110 Q100 120 106 113" stroke="#ff9ecf" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* varinha com estrela */}
        <line x1="100" y1="108" x2="112" y2="82" stroke="#ffd166" strokeWidth="3" strokeLinecap="round"/>
        <g className="sr-sparkle"><circle cx="113" cy="79" r="8" fill="#ffd166" opacity=".85"/><path d="M113 71 L114.5 77 L120 76 L115.5 80 L117 86 L113 82 L109 86 L110.5 80 L106 76 L111.5 77Z" fill="#fff" opacity=".9"/></g>
      </g>
      {/* === PERNAS === */}
      <g className="sr-lL">
        <rect x="47" y="174" width="12" height="26" rx="6" fill="#ffcce8"/>
        <rect x="45" y="196" width="16" height="6" rx="3" fill="#ff69b4"/>
      </g>
      <g className="sr-lR">
        <rect x="61" y="174" width="12" height="26" rx="6" fill="#ffcce8"/>
        <rect x="59" y="196" width="16" height="6" rx="3" fill="#ff69b4"/>
      </g>
      {/* === CABEÇA === */}
      <ellipse cx="60" cy="52" rx="23" ry="25" fill="#ffe0ef"/>
      {/* === CABELO FRENTE === */}
      <g className="sr-hairBack">
        <path d="M37 40 Q38 18 60 14 Q82 18 83 40 Q74 16 60 15 Q46 16 37 40Z" fill="#e91e8c"/>
        <path d="M37 40 Q32 52 34 64" stroke="#e91e8c" strokeWidth="9" fill="none" strokeLinecap="round"/>
        <path d="M83 40 Q88 52 86 64" stroke="#e91e8c" strokeWidth="9" fill="none" strokeLinecap="round"/>
        {/* mechas */}
        <path d="M44 18 Q50 14 58 14" stroke="#f590c4" strokeWidth="3" fill="none" opacity=".7"/>
      </g>
      {/* === COROA === */}
      <g className="sr-crown">
        <path d="M44 24 L46 14 L52 22 L60 10 L68 22 L74 14 L76 24" fill="#ffd166" stroke="#ffc400" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="60" cy="10" r="4" fill="#ff69b4"/>
        <circle cx="46" cy="14" r="2.5" fill="#ff85c8"/>
        <circle cx="74" cy="14" r="2.5" fill="#ff85c8"/>
        <path d="M44 24 L76 24" stroke="#ffc400" strokeWidth="2" strokeLinecap="round"/>
      </g>
      {/* === ROSTO === */}
      <circle cx="51" cy="55" r="4" fill="#2d1020"/>
      <circle cx="69" cy="55" r="4" fill="#2d1020"/>
      <circle cx="52.5" cy="53" r="1.5" fill="white"/>
      <circle cx="70.5" cy="53" r="1.5" fill="white"/>
      <path d="M53 66 Q60 72 67 66" stroke="#e91e8c" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="62" rx="6" ry="3.5" fill="#ff9ecf" opacity=".6"/>
      <ellipse cx="73" cy="62" rx="6" ry="3.5" fill="#ff9ecf" opacity=".6"/>
      {/* cílios */}
      <path d="M47 52 Q49 48 51 52" stroke="#2d1020" strokeWidth="1.5" fill="none"/>
      <path d="M65 52 Q67 48 69 52" stroke="#2d1020" strokeWidth="1.5" fill="none"/>
      {/* sparkles flutuantes */}
      <text className="sr-sparkle" x="8" y="35" fontSize="13">✨</text>
      <text className="sr-sparkle" x="102" y="48" fontSize="11" style={{animationDelay:".7s"}}>⭐</text>
    </svg>
  );
}

function CharLunaWitch({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .lw-hat{animation:lwH 2.5s ease-in-out infinite;transform-origin:60px 12px}
        .lw-robe{animation:lwR 2s ease-in-out infinite;transform-origin:60px 135px}
        .lw-torso{animation:lwBr 3.5s ease-in-out infinite;transform-origin:60px 95px}
        .lw-aL{animation:lwAL ${walk?"0.5s":"4s"} ease-in-out infinite;transform-origin:43px 88px}
        .lw-aR{animation:lwAR ${walk?"0.5s":"4s"} ease-in-out infinite;transform-origin:77px 88px}
        .lw-lL{animation:lwLL ${walk?"0.48s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .lw-lR{animation:lwLR ${walk?"0.48s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .lw-moon{animation:lwMn 2s ease-in-out infinite;transform-origin:110px 80px}
        .lw-star{animation:lwSt 1.2s ease-in-out infinite alternate}
        .lw-hair{animation:lwHr 2.5s ease-in-out infinite;transform-origin:60px 25px}
        @keyframes lwH{0%,100%{transform:rotate(-5deg)}50%{transform:rotate(5deg)}}
        @keyframes lwR{0%,100%{transform:skewX(-3deg)scaleX(1)}50%{transform:skewX(3deg)scaleX(1.03)}}
        @keyframes lwBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.02)}}
        @keyframes lwAL{0%,100%{transform:rotate(${walk?"-32deg":"-10deg"})}50%{transform:rotate(${walk?"32deg":"10deg"})}}
        @keyframes lwAR{0%,100%{transform:rotate(${walk?"32deg":"10deg"})}50%{transform:rotate(${walk?"-32deg":"-10deg"})}}
        @keyframes lwLL{0%,100%{transform:rotate(-24deg)}50%{transform:rotate(24deg)}}
        @keyframes lwLR{0%,100%{transform:rotate(24deg)}50%{transform:rotate(-24deg)}}
        @keyframes lwMn{0%,100%{transform:rotate(-18deg)scale(1)}50%{transform:rotate(18deg)scale(1.12)}}
        @keyframes lwSt{0%{opacity:.3;transform:scale(.7)}100%{opacity:1;transform:scale(1.2)}}
        @keyframes lwHr{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
      `}</style></defs>
      {/* CABELO TRASEIRO comprido */}
      <g className="lw-hair">
        <path d="M36 38 Q28 80 32 130" stroke="#1a0a2e" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M84 38 Q92 80 88 130" stroke="#1a0a2e" strokeWidth="12" fill="none" strokeLinecap="round"/>
        <path d="M40 36 Q34 75 36 115" stroke="#2e1060" strokeWidth="6" fill="none" strokeLinecap="round" opacity=".7"/>
      </g>
      {/* ROBE */}
      <g className="lw-robe">
        <path d="M34 112 Q26 150 20 178 Q60 186 100 178 Q94 150 86 112Z" fill="#4c1d95"/>
        <path d="M37 115 Q30 150 24 178 Q60 184 96 178 Q90 150 83 115Z" fill="#7c3aed" opacity=".4"/>
        {/* estrelas no robe */}
        <text x="34" y="140" fontSize="10" fill="#c4b5fd" opacity=".9">✦</text>
        <text x="74" y="155" fontSize="9" fill="#c4b5fd" opacity=".7">✦</text>
        <text x="52" y="168" fontSize="8" fill="#c4b5fd" opacity=".8">✦</text>
        <text x="65" y="138" fontSize="7" fill="#c4b5fd" opacity=".6">✦</text>
      </g>
      {/* TORSO */}
      <g className="lw-torso">
        <rect x="43" y="80" width="34" height="36" rx="9" fill="#5b21b6"/>
        <rect x="47" y="84" width="26" height="6" rx="3" fill="#7c3aed" opacity=".7"/>
        {/* fivela / broche */}
        <circle cx="60" cy="100" r="7" fill="#7c3aed"/>
        <path d="M56 100 Q60 95 64 100 Q60 105 56 100Z" fill="#c4b5fd"/>
      </g>
      {/* BRAÇOS */}
      <g className="lw-aL">
        <path d="M43 88 Q28 98 22 112" stroke="#ddd6fe" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="115" r="6.5" fill="#ddd6fe"/>
      </g>
      <g className="lw-aR">
        <path d="M77 88 Q92 98 98 112" stroke="#ddd6fe" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <circle cx="100" cy="115" r="6.5" fill="#ddd6fe"/>
        {/* varinha com lua */}
        <line x1="100" y1="110" x2="112" y2="78" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round"/>
        <g className="lw-moon">
          <path d="M115 72 Q124 62 114 52 Q126 58 124 72 Q126 86 114 90 Q124 82 115 72Z" fill="#fbbf24"/>
          <circle className="lw-star" cx="120" cy="60" r="3" fill="#fff" opacity=".9"/>
        </g>
      </g>
      {/* PERNAS */}
      <g className="lw-lL">
        <rect x="47" y="174" width="12" height="26" rx="6" fill="#5b21b6"/>
        <rect x="45" y="196" width="16" height="6" rx="3" fill="#2e1060"/>
      </g>
      <g className="lw-lR">
        <rect x="61" y="174" width="12" height="26" rx="6" fill="#5b21b6"/>
        <rect x="59" y="196" width="16" height="6" rx="3" fill="#2e1060"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="24" fill="#f3e8ff"/>
      {/* CHAPÉU */}
      <g className="lw-hat">
        <path d="M28 34 Q60 -8 92 34 L80 34 Q60 4 40 34Z" fill="#1a0a2e"/>
        <path d="M22 34 L98 34 Q96 44 88 44 L32 44 Q24 44 22 34Z" fill="#4c1d95"/>
        <path d="M30 39 L90 39" stroke="#7c3aed" strokeWidth="2"/>
        <circle cx="60" cy="34" r="4" fill="#fbbf24"/>
        <text className="lw-star" x="52" y="24" fontSize="10">⭐</text>
        <text className="lw-star" x="64" y="16" fontSize="8" style={{animationDelay:".5s"}}>✨</text>
      </g>
      {/* ROSTO */}
      <circle cx="51" cy="54" r="4" fill="#1a0a2e"/>
      <circle cx="69" cy="54" r="4" fill="#1a0a2e"/>
      <circle cx="52.5" cy="52" r="1.5" fill="white"/>
      <circle cx="70.5" cy="52" r="1.5" fill="white"/>
      <path d="M53 65 Q60 71 67 65" stroke="#a855f7" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="61" rx="6" ry="3.5" fill="#c084fc" opacity=".5"/>
      <ellipse cx="73" cy="61" rx="6" ry="3.5" fill="#c084fc" opacity=".5"/>
      {/* cílios */}
      <path d="M47 51 Q49 47 51 51" stroke="#1a0a2e" strokeWidth="1.5" fill="none"/>
      <path d="M65 51 Q67 47 69 51" stroke="#1a0a2e" strokeWidth="1.5" fill="none"/>
      <text className="lw-star" x="6" y="75" fontSize="14" style={{animationDelay:".3s"}}>🌙</text>
      <text className="lw-star" x="102" y="58" fontSize="11" style={{animationDelay:".9s"}}>✨</text>
    </svg>
  );
}

function CharAriaWings({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .aw-wL{animation:awWL 1.1s ease-in-out infinite;transform-origin:48px 88px}
        .aw-wR{animation:awWR 1.1s ease-in-out infinite;transform-origin:72px 88px}
        .aw-float{animation:awFl 2.6s ease-in-out infinite;transform-origin:60px 100px}
        .aw-dress{animation:awDr 2s ease-in-out infinite;transform-origin:60px 130px}
        .aw-torso{animation:awBr 2.6s ease-in-out infinite;transform-origin:60px 92px}
        .aw-aL{animation:awAL ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:43px 88px}
        .aw-aR{animation:awAR ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:77px 88px}
        .aw-lL{animation:awLL ${walk?"0.45s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .aw-lR{animation:awLR ${walk?"0.45s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .aw-hair{animation:awHr 2s ease-in-out infinite;transform-origin:60px 25px}
        .aw-dust{animation:awDs 1.8s ease-in-out infinite}
        @keyframes awWL{0%,100%{transform:rotate(-22deg)scaleX(.88)}50%{transform:rotate(12deg)scaleX(1.02)}}
        @keyframes awWR{0%,100%{transform:rotate(22deg)scaleX(.88)}50%{transform:rotate(-12deg)scaleX(1.02)}}
        @keyframes awFl{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        @keyframes awDr{0%,100%{transform:skewX(-2deg)}50%{transform:skewX(2deg)}}
        @keyframes awBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.03)}}
        @keyframes awAL{0%,100%{transform:rotate(${walk?"-26deg":"-5deg"})}50%{transform:rotate(${walk?"26deg":"5deg"})}}
        @keyframes awAR{0%,100%{transform:rotate(${walk?"26deg":"5deg"})}50%{transform:rotate(${walk?"-26deg":"-5deg"})}}
        @keyframes awLL{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}
        @keyframes awLR{0%,100%{transform:rotate(20deg)}50%{transform:rotate(-20deg)}}
        @keyframes awHr{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
        @keyframes awDs{0%,100%{opacity:0;transform:translateY(0)scale(.5)}50%{opacity:.9;transform:translateY(-18px)scale(1)}}
      `}</style></defs>
      {/* ASAS */}
      <g className="aw-wL">
        <path d="M48 88 Q12 62 8 95 Q14 118 48 105Z" fill="#bfdbfe" opacity=".85"/>
        <path d="M48 88 Q20 72 18 96 Q24 112 48 105Z" fill="#93c5fd" opacity=".7"/>
        <path d="M48 88 Q16 68 14 86" stroke="#60a5fa" strokeWidth="1.5" fill="none" opacity=".8"/>
        <path d="M48 92 Q18 80 16 96" stroke="#60a5fa" strokeWidth="1" fill="none" opacity=".5"/>
      </g>
      <g className="aw-wR">
        <path d="M72 88 Q108 62 112 95 Q106 118 72 105Z" fill="#bfdbfe" opacity=".85"/>
        <path d="M72 88 Q100 72 102 96 Q96 112 72 105Z" fill="#93c5fd" opacity=".7"/>
        <path d="M72 88 Q104 68 106 86" stroke="#60a5fa" strokeWidth="1.5" fill="none" opacity=".8"/>
        <path d="M72 92 Q102 80 104 96" stroke="#60a5fa" strokeWidth="1" fill="none" opacity=".5"/>
      </g>
      {/* tudo flutua */}
      <g className="aw-float">
        {/* SAIA */}
        <g className="aw-dress">
          <path d="M38 112 Q30 150 24 175 Q60 183 96 175 Q90 150 82 112Z" fill="#7dd3fc"/>
          <path d="M40 118 Q32 152 27 175 Q60 181 93 175 Q88 152 80 118Z" fill="#bae6fd" opacity=".5"/>
          <text x="40" y="142" fontSize="10" fill="white" opacity=".7">✦</text>
          <text x="70" y="158" fontSize="9" fill="white" opacity=".6">✦</text>
        </g>
        {/* TORSO */}
        <g className="aw-torso">
          <rect x="43" y="80" width="34" height="36" rx="9" fill="#38bdf8"/>
          <rect x="47" y="84" width="26" height="6" rx="3" fill="#7dd3fc" opacity=".6"/>
          {/* borboleta no peito */}
          <path d="M54 98 Q60 93 66 98 Q60 103 54 98Z" fill="#bae6fd" opacity=".9"/>
          <path d="M54 98 Q60 103 66 98 Q60 108 54 98Z" fill="#e0f2fe" opacity=".7"/>
          {/* pontos de fixação das asas */}
          <circle cx="46" cy="86" r="4" fill="#7dd3fc"/>
          <circle cx="74" cy="86" r="4" fill="#7dd3fc"/>
        </g>
        {/* BRAÇOS */}
        <g className="aw-aL">
          <path d="M43 88 Q28 96 22 108" stroke="#bae6fd" strokeWidth="10" strokeLinecap="round" fill="none"/>
          <circle cx="20" cy="111" r="6" fill="#bae6fd"/>
        </g>
        <g className="aw-aR">
          <path d="M77 88 Q92 96 98 108" stroke="#bae6fd" strokeWidth="10" strokeLinecap="round" fill="none"/>
          <circle cx="100" cy="111" r="6" fill="#bae6fd"/>
        </g>
        {/* PERNAS */}
        <g className="aw-lL">
          <rect x="47" y="172" width="12" height="26" rx="6" fill="#38bdf8"/>
          <rect x="45" y="194" width="16" height="6" rx="3" fill="#0284c7"/>
        </g>
        <g className="aw-lR">
          <rect x="61" y="172" width="12" height="26" rx="6" fill="#38bdf8"/>
          <rect x="59" y="194" width="16" height="6" rx="3" fill="#0284c7"/>
        </g>
        {/* CABEÇA */}
        <ellipse cx="60" cy="52" rx="22" ry="24" fill="#e0f2fe"/>
        {/* CABELO AZUL CLARO */}
        <g className="aw-hair">
          <path d="M38 40 Q36 18 60 13 Q84 18 82 40 Q74 16 60 15 Q46 16 38 40Z" fill="#38bdf8"/>
          <path d="M38 40 Q32 54 34 68" stroke="#38bdf8" strokeWidth="9" fill="none" strokeLinecap="round"/>
          <path d="M82 40 Q86 52 84 64" stroke="#38bdf8" strokeWidth="8" fill="none" strokeLinecap="round"/>
          <path d="M46 17 Q52 13 60 13" stroke="#7dd3fc" strokeWidth="2.5" fill="none" opacity=".8"/>
          {/* antenas */}
          <line x1="54" y1="26" x2="47" y2="10" stroke="#38bdf8" strokeWidth="2.5"/>
          <circle cx="46" cy="8" r="5" fill="#ffd166"/>
          <line x1="66" y1="26" x2="73" y2="10" stroke="#38bdf8" strokeWidth="2.5"/>
          <circle cx="74" cy="8" r="5" fill="#ffd166"/>
        </g>
        {/* ROSTO */}
        <circle cx="51" cy="53" r="4" fill="#0c4a6e"/>
        <circle cx="69" cy="53" r="4" fill="#0c4a6e"/>
        <circle cx="52.5" cy="51" r="1.5" fill="white"/>
        <circle cx="70.5" cy="51" r="1.5" fill="white"/>
        <path d="M53 64 Q60 70 67 64" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <ellipse cx="47" cy="60" rx="6" ry="3.5" fill="#93c5fd" opacity=".6"/>
        <ellipse cx="73" cy="60" rx="6" ry="3.5" fill="#93c5fd" opacity=".6"/>
        <path d="M47 50 Q49 46 51 50" stroke="#0c4a6e" strokeWidth="1.5" fill="none"/>
        <path d="M65 50 Q67 46 69 50" stroke="#0c4a6e" strokeWidth="1.5" fill="none"/>
      </g>
      {/* POEIRA MÁGICA */}
      <text className="aw-dust" x="8" y="70" fontSize="12" style={{animationDelay:"0s"}}>✨</text>
      <text className="aw-dust" x="100" y="80" fontSize="10" style={{animationDelay:".6s"}}>💙</text>
      <text className="aw-dust" x="5" y="105" fontSize="8" style={{animationDelay:"1.1s"}}>⭐</text>
    </svg>
  );
}

function CharNovaHero({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .nh-cape{animation:nhCp 1.4s ease-in-out infinite;transform-origin:60px 90px}
        .nh-torso{animation:nhBr 2.8s ease-in-out infinite;transform-origin:60px 95px}
        .nh-aL{animation:nhAL ${walk?"0.44s":"2.8s"} ease-in-out infinite;transform-origin:42px 88px}
        .nh-aR{animation:nhAR ${walk?"0.44s":"2.8s"} ease-in-out infinite;transform-origin:78px 88px}
        .nh-lL{animation:nhLL ${walk?"0.44s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .nh-lR{animation:nhLR ${walk?"0.44s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .nh-star{animation:nhSt .8s ease-in-out infinite alternate}
        .nh-hair{animation:nhHr 2s ease-in-out infinite;transform-origin:60px 25px}
        .nh-boost{animation:nhBo 2s ease-in-out infinite}
        @keyframes nhCp{0%,100%{transform:skewX(-6deg)scaleX(1)}50%{transform:skewX(9deg)scaleX(1.07)}}
        @keyframes nhBr{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
        @keyframes nhAL{0%,100%{transform:rotate(${walk?"-36deg":"-10deg"})}50%{transform:rotate(${walk?"36deg":"10deg"})}}
        @keyframes nhAR{0%,100%{transform:rotate(${walk?"36deg":"10deg"})}50%{transform:rotate(${walk?"-36deg":"-10deg"})}}
        @keyframes nhLL{0%,100%{transform:rotate(-28deg)}50%{transform:rotate(28deg)}}
        @keyframes nhLR{0%,100%{transform:rotate(28deg)}50%{transform:rotate(-28deg)}}
        @keyframes nhSt{0%{opacity:.5;transform:scale(.8)rotate(0deg)}100%{opacity:1;transform:scale(1.3)rotate(30deg)}}
        @keyframes nhHr{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
        @keyframes nhBo{0%,100%{opacity:.3}50%{opacity:.8}}
      `}</style></defs>
      {/* CAPA */}
      <g className="nh-cape">
        <path d="M42 88 Q18 120 16 162 Q38 172 60 174 Q82 172 104 162 Q102 120 78 88Z" fill="#dc2626"/>
        <path d="M44 90 Q22 122 20 162 Q42 170 60 172 Q78 170 100 162 Q98 122 76 90Z" fill="#ef4444" opacity=".4"/>
        <path d="M32 110 Q28 140 26 162" stroke="#b91c1c" strokeWidth="2" fill="none" opacity=".6"/>
      </g>
      {/* TRAJE */}
      <g className="nh-torso">
        <rect x="42" y="80" width="36" height="42" rx="9" fill="#1d4ed8"/>
        <rect x="46" y="84" width="28" height="7" rx="4" fill="#3b82f6" opacity=".7"/>
        {/* ESTRELA NO PEITO */}
        <g className="nh-star">
          <path d="M60 92 L62 98 L68 98 L63 102 L65 108 L60 104 L55 108 L57 102 L52 98 L58 98Z" fill="#fbbf24"/>
        </g>
        {/* CINTO */}
        <rect x="42" y="116" width="36" height="7" rx="3.5" fill="#fbbf24"/>
        <rect x="56" y="115" width="8" height="9" rx="3" fill="#fcd34d"/>
      </g>
      {/* BRAÇOS */}
      <g className="nh-aL">
        <path d="M42 90 Q25 100 19 114" stroke="#1d4ed8" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <circle cx="17" cy="117" r="7" fill="#fbbf24"/>
        <circle cx="17" cy="117" r="5" fill="#fcd34d"/>
      </g>
      <g className="nh-aR">
        <path d="M78 90 Q95 100 101 114" stroke="#1d4ed8" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <circle cx="103" cy="117" r="7" fill="#fbbf24"/>
        <circle cx="103" cy="117" r="5" fill="#fcd34d"/>
      </g>
      {/* PERNAS */}
      <g className="nh-lL">
        <rect x="46" y="172" width="13" height="26" rx="6.5" fill="#1d4ed8"/>
        <rect x="44" y="194" width="17" height="6" rx="3" fill="#fbbf24"/>
      </g>
      <g className="nh-lR">
        <rect x="61" y="172" width="13" height="26" rx="6.5" fill="#1d4ed8"/>
        <rect x="59" y="194" width="17" height="6" rx="3" fill="#fbbf24"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="25" fill="#fddcb0"/>
      {/* CABELO CASTANHO */}
      <g className="nh-hair">
        <path d="M38 40 Q36 16 60 12 Q84 16 82 40 Q74 14 60 13 Q46 14 38 40Z" fill="#92400e"/>
        <path d="M38 40 Q32 55 34 70" stroke="#92400e" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M82 40 Q86 52 84 64" stroke="#92400e" strokeWidth="8" fill="none" strokeLinecap="round"/>
        {/* rabo de cavalo */}
        <path d="M82 32 Q98 22 100 44 Q98 56 84 52" stroke="#92400e" strokeWidth="9" fill="none" strokeLinecap="round"/>
        {/* máscara */}
        <path d="M40 50 Q42 44 50 44 Q54 44 56 48 L64 48 Q66 44 70 44 Q78 44 80 50" stroke="#1d4ed8" strokeWidth="3.5" fill="#1d4ed8" strokeLinecap="round"/>
      </g>
      {/* ROSTO */}
      <circle cx="51" cy="55" r="4" fill="#1a0a00"/>
      <circle cx="69" cy="55" r="4" fill="#1a0a00"/>
      <circle cx="52.5" cy="53" r="1.5" fill="white"/>
      <circle cx="70.5" cy="53" r="1.5" fill="white"/>
      <path d="M53 66 Q60 72 67 66" stroke="#e05a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="62" rx="6" ry="3.5" fill="#fca5a5" opacity=".5"/>
      <ellipse cx="73" cy="62" rx="6" ry="3.5" fill="#fca5a5" opacity=".5"/>
      <text className="nh-star" x="6" y="60" fontSize="15">💫</text>
      <text className="nh-star" x="100" y="46" fontSize="12" style={{animationDelay:".4s"}}>⭐</text>
    </svg>
  );
}

function CharCrystalDoll({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .cd-hair{animation:cdHr 2.5s ease-in-out infinite;transform-origin:60px 25px}
        .cd-dress{animation:cdDr 2.2s ease-in-out infinite;transform-origin:60px 135px}
        .cd-torso{animation:cdBr 3s ease-in-out infinite;transform-origin:60px 95px}
        .cd-aL{animation:cdAL ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:43px 88px}
        .cd-aR{animation:cdAR ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:77px 88px}
        .cd-lL{animation:cdLL ${walk?"0.5s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .cd-lR{animation:cdLR ${walk?"0.5s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .cd-gem{animation:cdGm 1.4s ease-in-out infinite alternate}
        .cd-shine{animation:cdSh 2.2s linear infinite}
        @keyframes cdHr{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
        @keyframes cdDr{0%,100%{transform:skewX(-2deg)}50%{transform:skewX(2deg)}}
        @keyframes cdBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.03)}}
        @keyframes cdAL{0%,100%{transform:rotate(${walk?"-26deg":"-5deg"})}50%{transform:rotate(${walk?"26deg":"5deg"})}}
        @keyframes cdAR{0%,100%{transform:rotate(${walk?"26deg":"5deg"})}50%{transform:rotate(${walk?"-26deg":"-5deg"})}}
        @keyframes cdLL{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}
        @keyframes cdLR{0%,100%{transform:rotate(20deg)}50%{transform:rotate(-20deg)}}
        @keyframes cdGm{0%{opacity:.6;transform:scale(.9)}100%{opacity:1;transform:scale(1.15)}}
        @keyframes cdSh{0%{transform:translateX(-120%)skewX(-20deg)}100%{transform:translateX(350%)skewX(-20deg)}}
      `}</style></defs>
      {/* SAIA */}
      <g className="cd-dress">
        <path d="M36 112 Q26 152 20 178 Q60 186 100 178 Q94 152 84 112Z" fill="#6ee7b7"/>
        <path d="M39 116 Q30 154 24 178 Q60 184 96 178 Q90 154 81 116Z" fill="#a7f3d0" opacity=".5"/>
        {/* brilho que passa */}
        <clipPath id="cdskirt"><path d="M36 112 Q26 152 20 178 Q60 186 100 178 Q94 152 84 112Z"/></clipPath>
        <rect className="cd-shine" x="28" y="112" width="18" height="70" fill="white" opacity=".25" rx="6" clipPath="url(#cdskirt)"/>
        <text x="36" y="140" fontSize="11" fill="white" opacity=".8">💎</text>
        <text x="72" y="157" fontSize="9" fill="white" opacity=".7">✦</text>
        <text x="52" y="170" fontSize="8" fill="white" opacity=".6">✦</text>
      </g>
      {/* TORSO */}
      <g className="cd-torso">
        <rect x="43" y="80" width="34" height="36" rx="9" fill="#10b981"/>
        <rect x="47" y="84" width="26" height="6" rx="3" fill="#6ee7b7" opacity=".6"/>
        {/* gema no peito */}
        <g className="cd-gem">
          <path d="M56 97 L60 90 L64 97 L60 104Z" fill="#34d399" opacity=".9"/>
          <circle cx="60" cy="97" r="6" fill="#a7f3d0" opacity=".7"/>
          <circle cx="60" cy="97" r="3" fill="white" opacity=".6"/>
        </g>
        {/* pulseiras */}
        <rect x="26" y="101" width="5" height="4" rx="2" fill="#fbbf24"/>
        <rect x="89" y="101" width="5" height="4" rx="2" fill="#fbbf24"/>
      </g>
      {/* BRAÇOS */}
      <g className="cd-aL">
        <path d="M43 88 Q28 97 22 110" stroke="#a7f3d0" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="113" r="6.5" fill="#a7f3d0"/>
      </g>
      <g className="cd-aR">
        <path d="M77 88 Q92 97 98 110" stroke="#a7f3d0" strokeWidth="11" strokeLinecap="round" fill="none"/>
        <circle cx="100" cy="113" r="6.5" fill="#a7f3d0"/>
      </g>
      {/* PERNAS */}
      <g className="cd-lL">
        <rect x="47" y="174" width="12" height="26" rx="6" fill="#10b981"/>
        <rect x="45" y="196" width="16" height="6" rx="3" fill="#065f46"/>
      </g>
      <g className="cd-lR">
        <rect x="61" y="174" width="12" height="26" rx="6" fill="#10b981"/>
        <rect x="59" y="196" width="16" height="6" rx="3" fill="#065f46"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="24" fill="#fef9f0"/>
      {/* CABELO LOIRO LONGO */}
      <g className="cd-hair">
        <path d="M38 38 Q32 72 36 120" stroke="#fcd34d" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M82 38 Q88 72 84 120" stroke="#fcd34d" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M38 38 Q36 16 60 11 Q84 16 82 38 Q74 14 60 13 Q46 14 38 38Z" fill="#fcd34d"/>
        <path d="M46 16 Q52 12 60 11" stroke="white" strokeWidth="2.5" fill="none" opacity=".7"/>
        {/* tiara de gema */}
        <rect x="36" y="35" width="48" height="6" rx="3" fill="#10b981" opacity=".9"/>
        <g className="cd-gem">
          <path d="M57 34 L60 27 L63 34 L60 41Z" fill="#34d399"/>
          <circle cx="60" cy="34" r="5" fill="#a7f3d0" opacity=".8"/>
        </g>
      </g>
      {/* ROSTO */}
      <circle cx="51" cy="54" r="4" fill="#1a0a00"/>
      <circle cx="69" cy="54" r="4" fill="#1a0a00"/>
      <circle cx="52.5" cy="52" r="1.5" fill="white"/>
      <circle cx="70.5" cy="52" r="1.5" fill="white"/>
      {/* piscadela */}
      <path d="M48 54 L54 54" stroke="#1a0a00" strokeWidth="3" strokeLinecap="round"/>
      <path d="M53 65 Q60 71 67 65" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="61" rx="6" ry="3.5" fill="#6ee7b7" opacity=".5"/>
      <ellipse cx="73" cy="61" rx="6" ry="3.5" fill="#6ee7b7" opacity=".5"/>
      <path d="M47 51 Q49 47 51 51" stroke="#1a0a00" strokeWidth="1.5" fill="none"/>
      <path d="M65 51 Q67 47 69 51" stroke="#1a0a00" strokeWidth="1.5" fill="none"/>
      <text className="cd-gem" x="5" y="64" fontSize="14">💎</text>
      <text className="cd-gem" x="101" y="58" fontSize="12" style={{animationDelay:".6s"}}>✨</text>
    </svg>
  );
}

function CharSakuraMage({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .sm-pt{animation:smPt 3s ease-in-out infinite}
        .sm-hair{animation:smHr 2.5s ease-in-out infinite;transform-origin:60px 25px}
        .sm-kim{animation:smKm 2s ease-in-out infinite;transform-origin:60px 130px}
        .sm-torso{animation:smBr 3s ease-in-out infinite;transform-origin:60px 95px}
        .sm-aL{animation:smAL ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:43px 88px}
        .sm-aR{animation:smAR ${walk?"0.5s":"3s"} ease-in-out infinite;transform-origin:77px 88px}
        .sm-lL{animation:smLL ${walk?"0.5s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .sm-lR{animation:smLR ${walk?"0.5s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        @keyframes smPt{0%,100%{transform:rotate(-12deg)scale(1)translateY(0)}50%{transform:rotate(12deg)scale(1.12)translateY(-5px)}}
        @keyframes smHr{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
        @keyframes smKm{0%,100%{transform:skewX(-2deg)}50%{transform:skewX(2deg)}}
        @keyframes smBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.02)}}
        @keyframes smAL{0%,100%{transform:rotate(${walk?"-26deg":"-6deg"})}50%{transform:rotate(${walk?"26deg":"6deg"})}}
        @keyframes smAR{0%,100%{transform:rotate(${walk?"26deg":"6deg"})}50%{transform:rotate(${walk?"-26deg":"-6deg"})}}
        @keyframes smLL{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}
        @keyframes smLR{0%,100%{transform:rotate(20deg)}50%{transform:rotate(-20deg)}}
      `}</style></defs>
      {/* KIMONO */}
      <g className="sm-kim">
        <path d="M34 112 Q24 152 18 178 Q60 186 102 178 Q96 152 86 112Z" fill="#fce7f3"/>
        <path d="M36 115 Q27 154 22 178 Q60 184 98 178 Q93 154 84 115Z" fill="#f9a8d4" opacity=".45"/>
        {/* padrão floral */}
        <text x="32" y="138" fontSize="11">🌸</text>
        <text x="66" y="152" fontSize="10">🌸</text>
        <text x="48" y="168" fontSize="9">🌸</text>
        {/* OBI (faixa) */}
        <rect x="38" y="112" width="44" height="12" rx="5" fill="#e879f9"/>
        <rect x="54" y="108" width="12" height="20" rx="6" fill="#f0abfc"/>
        {/* nó do obi */}
        <path d="M50 112 Q60 107 70 112 Q60 118 50 112Z" fill="#f0abfc"/>
      </g>
      {/* TORSO */}
      <g className="sm-torso">
        <rect x="43" y="80" width="34" height="35" rx="9" fill="#fce7f3"/>
        <rect x="43" y="80" width="34" height="35" rx="9" fill="#f9a8d4" opacity=".4"/>
        <rect x="47" y="84" width="26" height="6" rx="3" fill="#f9a8d4" opacity=".6"/>
      </g>
      {/* BRAÇOS (mangas largas) */}
      <g className="sm-aL">
        <path d="M43 88 Q26 98 20 112" stroke="#fce7f3" strokeWidth="13" strokeLinecap="round" fill="none"/>
        <path d="M26 95 Q16 108 14 118" stroke="#f9a8d4" strokeWidth="7" strokeLinecap="round" fill="none" opacity=".7"/>
        <circle cx="18" cy="115" r="6.5" fill="#fce7f3"/>
      </g>
      <g className="sm-aR">
        <path d="M77 88 Q94 98 100 112" stroke="#fce7f3" strokeWidth="13" strokeLinecap="round" fill="none"/>
        <path d="M94 95 Q104 108 106 118" stroke="#f9a8d4" strokeWidth="7" strokeLinecap="round" fill="none" opacity=".7"/>
        <circle cx="102" cy="115" r="6.5" fill="#fce7f3"/>
      </g>
      {/* PERNAS */}
      <g className="sm-lL">
        <rect x="47" y="176" width="12" height="24" rx="6" fill="#fce7f3"/>
        <rect x="45" y="196" width="16" height="6" rx="3" fill="#e879f9"/>
      </g>
      <g className="sm-lR">
        <rect x="61" y="176" width="12" height="24" rx="6" fill="#fce7f3"/>
        <rect x="59" y="196" width="16" height="6" rx="3" fill="#e879f9"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="24" fill="#fff0f7"/>
      {/* CABELO PRETO */}
      <g className="sm-hair">
        <path d="M38 38 Q32 70 36 112" stroke="#1a0a1a" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M82 38 Q88 70 84 112" stroke="#1a0a1a" strokeWidth="13" fill="none" strokeLinecap="round"/>
        <path d="M38 38 Q36 15 60 11 Q84 15 82 38 Q74 14 60 13 Q46 14 38 38Z" fill="#1a0a1a"/>
        {/* brilho no cabelo */}
        <path d="M44 17 Q50 13 58 12" stroke="#4a0a4a" strokeWidth="3" fill="none" opacity=".7"/>
        {/* ornamentos */}
        <line x1="47" y1="22" x2="42" y2="8" stroke="#e879f9" strokeWidth="2"/>
        <text className="sm-pt" x="38" y="9" fontSize="11">🌸</text>
        <line x1="73" y1="22" x2="78" y2="8" stroke="#e879f9" strokeWidth="2"/>
        <text className="sm-pt" x="74" y="9" fontSize="11" style={{animationDelay:"1s"}}>🌸</text>
      </g>
      {/* ROSTO */}
      <circle cx="51" cy="54" r="4" fill="#1a0a1a"/>
      <circle cx="69" cy="54" r="4" fill="#1a0a1a"/>
      <circle cx="52.5" cy="52" r="1.5" fill="white"/>
      <circle cx="70.5" cy="52" r="1.5" fill="white"/>
      <path d="M53 65 Q60 72 67 65" stroke="#e879f9" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="61" rx="6" ry="3.5" fill="#f9a8d4" opacity=".7"/>
      <ellipse cx="73" cy="61" rx="6" ry="3.5" fill="#f9a8d4" opacity=".7"/>
      <path d="M47 51 Q49 47 51 51" stroke="#1a0a1a" strokeWidth="1.5" fill="none"/>
      <path d="M65 51 Q67 47 69 51" stroke="#1a0a1a" strokeWidth="1.5" fill="none"/>
      <text className="sm-pt" x="4" y="68" fontSize="14" style={{animationDelay:".5s"}}>🌸</text>
      <text className="sm-pt" x="102" y="78" fontSize="12" style={{animationDelay:"1.3s"}}>🌸</text>
      <text className="sm-pt" x="6" y="105" fontSize="10" style={{animationDelay:".9s"}}>🌸</text>
    </svg>
  );
}

function CharVioletTech({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .vt-visor{animation:vtVi 2s ease-in-out infinite}
        .vt-suit{animation:vtSu 2.5s ease-in-out infinite;transform-origin:60px 100px}
        .vt-aL{animation:vtAL ${walk?"0.45s":"3s"} ease-in-out infinite;transform-origin:42px 88px}
        .vt-aR{animation:vtAR ${walk?"0.45s":"3s"} ease-in-out infinite;transform-origin:78px 88px}
        .vt-lL{animation:vtLL ${walk?"0.45s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .vt-lR{animation:vtLR ${walk?"0.45s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .vt-cir{animation:vtCi 3s linear infinite}
        .vt-scan{animation:vtSc 2s linear infinite}
        .vt-hair{animation:vtHr 2s ease-in-out infinite;transform-origin:60px 25px}
        .vt-pulse{animation:vtPu 1.5s ease-in-out infinite}
        @keyframes vtVi{0%,100%{fill:#7c3aed}50%{fill:#a78bfa}}
        @keyframes vtSu{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.02)}}
        @keyframes vtAL{0%,100%{transform:rotate(${walk?"-28deg":"-6deg"})}50%{transform:rotate(${walk?"28deg":"6deg"})}}
        @keyframes vtAR{0%,100%{transform:rotate(${walk?"28deg":"6deg"})}50%{transform:rotate(${walk?"-28deg":"-6deg"})}}
        @keyframes vtLL{0%,100%{transform:rotate(-22deg)}50%{transform:rotate(22deg)}}
        @keyframes vtLR{0%,100%{transform:rotate(22deg)}50%{transform:rotate(-22deg)}}
        @keyframes vtCi{0%{stroke-dashoffset:100}100%{stroke-dashoffset:0}}
        @keyframes vtSc{0%,100%{transform:translateY(-9px);opacity:0}50%{transform:translateY(9px);opacity:.9}}
        @keyframes vtHr{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
        @keyframes vtPu{0%,100%{opacity:.5;r:5}50%{opacity:1;r:7}}
      `}</style></defs>
      {/* SAIA TECH */}
      <g className="vt-suit">
        <path d="M38 118 Q30 152 24 178 Q60 186 96 178 Q90 152 82 118Z" fill="#312e81"/>
        <path d="M40 122 Q32 155 26 178 Q60 184 94 178 Q88 155 80 122Z" fill="#4c1d95" opacity=".5"/>
        <path className="vt-cir" d="M36 136 Q60 143 84 136" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeDasharray="8" opacity=".8"/>
        <path className="vt-cir" d="M30 158 Q60 165 90 158" stroke="#a78bfa" strokeWidth="1" fill="none" strokeDasharray="6" opacity=".5"/>
      </g>
      {/* TORSO */}
      <g className="vt-suit">
        <rect x="40" y="80" width="40" height="42" rx="9" fill="#1e1b4b"/>
        {/* PAINÉIS */}
        <rect x="44" y="84" width="14" height="11" rx="4" fill="#312e81"/>
        <rect x="62" y="84" width="14" height="11" rx="4" fill="#312e81"/>
        {/* REATOR NO PEITO */}
        <circle cx="60" cy="100" r="8" fill="#7c3aed"/>
        <circle cx="60" cy="100" r="5.5" fill="#a78bfa"/>
        <circle className="vt-pulse" cx="60" cy="100" r="3" fill="white" opacity=".9"/>
        {/* CIRCUITOS */}
        <path className="vt-cir" d="M44 98 L51 98" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeDasharray="7" opacity=".9"/>
        <path className="vt-cir" d="M69 98 L76 98" stroke="#a78bfa" strokeWidth="1.5" fill="none" strokeDasharray="7" opacity=".9"/>
        <line x1="51" y1="98" x2="51" y2="90" stroke="#a78bfa" strokeWidth="1" opacity=".6"/>
        <line x1="69" y1="98" x2="69" y2="90" stroke="#a78bfa" strokeWidth="1" opacity=".6"/>
      </g>
      {/* BRAÇOS TECH */}
      <g className="vt-aL">
        <path d="M40 90 Q24 100 18 114" stroke="#1e1b4b" strokeWidth="13" strokeLinecap="round" fill="none"/>
        <circle cx="16" cy="117" r="7" fill="#1e1b4b"/>
        <rect x="24" y="95" width="11" height="5" rx="2.5" fill="#7c3aed" opacity=".9"/>
        <circle cx="16" cy="117" r="5.5" fill="#a78bfa"/>
      </g>
      <g className="vt-aR">
        <path d="M80 90 Q96 100 102 114" stroke="#1e1b4b" strokeWidth="13" strokeLinecap="round" fill="none"/>
        <circle cx="104" cy="117" r="7" fill="#1e1b4b"/>
        <rect x="85" y="95" width="11" height="5" rx="2.5" fill="#7c3aed" opacity=".9"/>
        <circle cx="104" cy="117" r="5.5" fill="#a78bfa"/>
      </g>
      {/* PERNAS */}
      <g className="vt-lL">
        <rect x="46" y="174" width="13" height="26" rx="6.5" fill="#1e1b4b"/>
        <rect x="46" y="184" width="13" height="5" rx="2.5" fill="#7c3aed"/>
        <rect x="44" y="196" width="17" height="6" rx="3" fill="#0e0c3a"/>
      </g>
      <g className="vt-lR">
        <rect x="61" y="174" width="13" height="26" rx="6.5" fill="#1e1b4b"/>
        <rect x="61" y="184" width="13" height="5" rx="2.5" fill="#7c3aed"/>
        <rect x="59" y="196" width="17" height="6" rx="3" fill="#0e0c3a"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="24" fill="#e0e7ff"/>
      {/* CABELO TECH */}
      <g className="vt-hair">
        <path d="M38 40 Q36 16 60 12 Q84 16 82 40 Q74 14 60 13 Q46 14 38 40Z" fill="#312e81"/>
        <path d="M38 40 Q32 55 34 70" stroke="#312e81" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M82 40 Q86 50 84 60" stroke="#312e81" strokeWidth="7" fill="none" strokeLinecap="round"/>
        <path d="M46 17 Q54 13 62 12" stroke="#a78bfa" strokeWidth="2.5" fill="none" opacity=".8"/>
        <circle cx="40" cy="36" r="4" fill="#7c3aed" opacity=".9"/>
      </g>
      {/* VISOR */}
      <path d="M38 46 Q38 56 60 57 Q82 56 82 46 Q82 37 60 37 Q38 37 38 46Z" fill="#1e1b4b" opacity=".92"/>
      <path className="vt-visor" d="M40 46 Q40 54 60 55 Q80 54 80 46 Q80 39 60 39 Q40 39 40 46Z"/>
      <rect className="vt-scan" x="40" y="46" width="40" height="2.5" fill="#a78bfa" rx="1.5"/>
      <path d="M44 43 Q50 40 56 42" stroke="white" strokeWidth="2" fill="none" opacity=".5"/>
      {/* boca */}
      <path d="M50 64 Q60 70 70 64" stroke="#1e1b4b" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <text x="4" y="62" fontSize="14" fill="#a78bfa">⚡</text>
      <text x="101" y="50" fontSize="11" fill="#a78bfa" opacity=".9">💜</text>
    </svg>
  );
}

function CharRubyFlame({ anim="idle", size=120 }) {
  const walk = anim==="walk";
  return (
    <svg width={size} height={size*1.6} viewBox="0 0 120 192" style={{overflow:"visible"}}>
      <defs><style>{`
        .rf-fire{animation:rfFi .75s ease-in-out infinite alternate;transform-origin:60px 90px}
        .rf-hair{animation:rfHr 1s ease-in-out infinite alternate;transform-origin:60px 25px}
        .rf-torso{animation:rfBr 2s ease-in-out infinite;transform-origin:60px 95px}
        .rf-aL{animation:rfAL ${walk?"0.42s":"2.2s"} ease-in-out infinite;transform-origin:42px 88px}
        .rf-aR{animation:rfAR ${walk?"0.42s":"2.2s"} ease-in-out infinite;transform-origin:78px 88px}
        .rf-lL{animation:rfLL ${walk?"0.42s":"0s"} ease-in-out infinite;transform-origin:51px 150px}
        .rf-lR{animation:rfLR ${walk?"0.42s":"0s"} ease-in-out infinite;transform-origin:69px 150px}
        .rf-ember{animation:rfEm 1.4s ease-in-out infinite}
        .rf-skirt{animation:rfSk 1.8s ease-in-out infinite;transform-origin:60px 135px}
        @keyframes rfFi{0%{transform:scaleY(1)skewX(-6deg)}100%{transform:scaleY(1.18)skewX(6deg)}}
        @keyframes rfHr{0%{transform:rotate(-7deg)skewX(-3deg)}100%{transform:rotate(7deg)skewX(3deg)}}
        @keyframes rfBr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.02)}}
        @keyframes rfAL{0%,100%{transform:rotate(${walk?"-32deg":"-9deg"})}50%{transform:rotate(${walk?"32deg":"9deg"})}}
        @keyframes rfAR{0%,100%{transform:rotate(${walk?"32deg":"9deg"})}50%{transform:rotate(${walk?"-32deg":"-9deg"})}}
        @keyframes rfLL{0%,100%{transform:rotate(-26deg)}50%{transform:rotate(26deg)}}
        @keyframes rfLR{0%,100%{transform:rotate(26deg)}50%{transform:rotate(-26deg)}}
        @keyframes rfEm{0%,100%{opacity:0;transform:translateY(0)scale(.4)}50%{opacity:1;transform:translateY(-22px)scale(1)}}
        @keyframes rfSk{0%,100%{transform:skewX(-3deg)}50%{transform:skewX(3deg)}}
      `}</style></defs>
      {/* AURA DE FOGO */}
      <g className="rf-fire" opacity=".75">
        <path d="M36 140 Q24 105 36 72 Q48 94 43 118 Q54 84 60 62 Q66 84 77 118 Q72 94 84 72 Q96 105 84 140Z" fill="#fbbf24" opacity=".55"/>
        <path d="M40 136 Q30 105 40 78 Q50 98 46 118 Q56 88 60 70 Q64 88 74 118 Q70 98 80 78 Q90 105 80 136Z" fill="#f97316" opacity=".65"/>
        <path d="M44 130 Q36 108 44 85 Q52 102 50 118 Q56 94 60 78 Q64 94 70 118 Q68 102 76 85 Q84 108 76 130Z" fill="#ef4444" opacity=".4"/>
      </g>
      {/* SAIA */}
      <g className="rf-skirt">
        <path d="M36 116 Q28 150 22 178 Q60 186 98 178 Q92 150 84 116Z" fill="#7f1d1d"/>
        <path d="M38 120 Q30 153 24 178 Q60 184 96 178 Q90 153 82 120Z" fill="#dc2626" opacity=".35"/>
        {/* bordas flamejantes */}
        <path d="M38 132 Q50 124 60 132 Q70 124 82 132" stroke="#fbbf24" strokeWidth="2" fill="none" opacity=".9"/>
        <path d="M32 155 Q46 145 60 155 Q74 145 88 155" stroke="#f97316" strokeWidth="1.5" fill="none" opacity=".7"/>
      </g>
      {/* TORSO */}
      <g className="rf-torso">
        <rect x="42" y="80" width="36" height="40" rx="9" fill="#991b1b"/>
        <rect x="46" y="84" width="28" height="7" rx="4" fill="#dc2626" opacity=".7"/>
        {/* símbolo de fogo */}
        <path d="M52 102 Q60 92 68 102 Q64 95 60 88 Q56 95 52 102Z" fill="#fbbf24" opacity=".9"/>
        <circle cx="60" cy="98" r="4" fill="#fcd34d"/>
        {/* CINTO */}
        <rect x="42" y="116" width="36" height="6" rx="3" fill="#7f1d1d"/>
      </g>
      {/* BRAÇOS */}
      <g className="rf-aL">
        <path d="M42 90 Q26 100 20 114" stroke="#991b1b" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <circle cx="18" cy="117" r="7" fill="#991b1b"/>
        <circle cx="18" cy="117" r="5" fill="#fbbf24" opacity=".9"/>
      </g>
      <g className="rf-aR">
        <path d="M78 90 Q94 100 100 114" stroke="#991b1b" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <circle cx="102" cy="117" r="7" fill="#fbbf24"/>
        <circle cx="102" cy="117" r="5" fill="#fcd34d"/>
      </g>
      {/* PERNAS */}
      <g className="rf-lL">
        <rect x="46" y="174" width="13" height="26" rx="6.5" fill="#991b1b"/>
        <rect x="44" y="196" width="17" height="6" rx="3" fill="#7f1d1d"/>
      </g>
      <g className="rf-lR">
        <rect x="61" y="174" width="13" height="26" rx="6.5" fill="#991b1b"/>
        <rect x="59" y="196" width="17" height="6" rx="3" fill="#7f1d1d"/>
      </g>
      {/* CABEÇA */}
      <ellipse cx="60" cy="52" rx="22" ry="24" fill="#fddcb0"/>
      {/* CABELO DE CHAMA */}
      <g className="rf-hair">
        <path d="M38 42 Q24 16 44 5 Q40 22 52 18 Q42 8 62 4 Q56 18 68 14 Q78 6 76 22 Q90 10 82 34 Q78 22 80 42Z" fill="#dc2626"/>
        <path d="M38 42 Q32 58 34 72" stroke="#dc2626" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <path d="M80 42 Q82 55 80 66" stroke="#b91c1c" strokeWidth="7" fill="none" strokeLinecap="round"/>
        {/* pontas de chama */}
        <path d="M46 8 Q42 0 50 -2 Q50 4 46 8Z" fill="#fbbf24"/>
        <path d="M62 5 Q60 -2 66 0 Q64 5 62 5Z" fill="#fbbf24"/>
        <path d="M78 16 Q80 8 84 13 Q80 17 78 16Z" fill="#fbbf24"/>
        <path d="M50 22 Q46 14 52 12 Q52 18 50 22Z" fill="#f97316"/>
      </g>
      {/* ROSTO */}
      <circle cx="51" cy="54" r="4" fill="#1a0000"/>
      <circle cx="69" cy="54" r="4" fill="#1a0000"/>
      <circle cx="52.5" cy="52" r="1.5" fill="white"/>
      <circle cx="70.5" cy="52" r="1.5" fill="white"/>
      <path d="M53 65 Q60 71 67 65" stroke="#dc2626" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <ellipse cx="47" cy="61" rx="6" ry="3.5" fill="#fca5a5" opacity=".6"/>
      <ellipse cx="73" cy="61" rx="6" ry="3.5" fill="#fca5a5" opacity=".6"/>
      <path d="M47 51 Q49 47 51 51" stroke="#1a0000" strokeWidth="1.5" fill="none"/>
      <path d="M65 51 Q67 47 69 51" stroke="#1a0000" strokeWidth="1.5" fill="none"/>
      <text className="rf-ember" x="6" y="64" fontSize="14" style={{animationDelay:"0s"}}>🔥</text>
      <text className="rf-ember" x="102" y="54" fontSize="12" style={{animationDelay:".5s"}}>✨</text>
      <text className="rf-ember" x="4" y="95" fontSize="10" style={{animationDelay:"1s"}}>🔥</text>
    </svg>
  );
}


// ══════════════════════════════════════════════════════════════
//  SVG MONSTERS — animados com HP multi-dano
// ══════════════════════════════════════════════════════════════

function MonsterSlime({ hp, maxHp, frozen, attacking, size=56 }) {
  const hurt = hp < maxHp;
  return (
    <svg width={size*1.4} height={size} viewBox="0 0 80 60" style={{overflow:"visible"}}>
      <defs><style>{`
        .sl-body{animation:slBo 1.2s ease-in-out infinite;transform-origin:40px 38px}
        .sl-eye{animation:slEy 3s ease-in-out infinite}
        .sl-drip{animation:slDr 2s ease-in-out infinite}
        .sl-hurt{animation:slHt .15s ease-in-out infinite}
        .sl-atk{animation:slAt .3s ease-in-out infinite}
        @keyframes slBo{0%,100%{transform:scaleY(1)scaleX(1)}50%{transform:scaleY(1.1)scaleX(.92)}}
        @keyframes slEy{0%,80%,100%{transform:scaleY(1)}85%{transform:scaleY(.1)}}
        @keyframes slDr{0%,100%{transform:translateY(0)scaleY(1)}50%{transform:translateY(5px)scaleY(1.2)}}
        @keyframes slHt{0%,100%{fill:#b57bee}50%{fill:white}}
        @keyframes slAt{0%,100%{transform:translateX(0)}50%{transform:translateX(6px)}}
      `}</style></defs>
      <g className={attacking?"sl-atk":""} style={{filter:frozen?"hue-rotate(180deg) brightness(1.4)":"hurt"?`brightness(1.6)`:undefined}}>
        {/* corpo gelatinoso */}
        <g className="sl-body">
          <ellipse cx="40" cy="38" rx="26" ry="20" fill={frozen?"#93c5fd":hurt?"#d4a0ee":"#b57bee"}/>
          <ellipse cx="40" cy="32" rx="20" ry="14" fill={frozen?"#bfdbfe":hurt?"#e8c8ff":"#c894f7"}/>
          {/* brilho */}
          <ellipse cx="32" cy="28" rx="7" ry="4" fill="white" opacity=".35"/>
          {/* drips */}
          <g className="sl-drip">
            <ellipse cx="28" cy="54" rx="4" ry="6" fill={frozen?"#93c5fd":"#b57bee"} opacity=".8"/>
            <ellipse cx="52" cy="56" rx="3" ry="5" fill={frozen?"#93c5fd":"#b57bee"} opacity=".8"/>
          </g>
        </g>
        {/* olhos */}
        <g className="sl-eye">
          <circle cx="33" cy="33" r="5" fill="white"/>
          <circle cx="47" cy="33" r="5" fill="white"/>
          <circle cx="34" cy="33" r="3" fill={attacking?"#dc2626":"#1a0a2e"}/>
          <circle cx="48" cy="33" r="3" fill={attacking?"#dc2626":"#1a0a2e"}/>
          <circle cx="35" cy="32" r="1" fill="white"/>
          <circle cx="49" cy="32" r="1" fill="white"/>
        </g>
        {/* boca */}
        <path d={attacking?"M33 42 Q40 50 47 42":"M34 44 Q40 47 46 44"} stroke={attacking?"#dc2626":"#6b21a8"} strokeWidth="2" fill="none" strokeLinecap="round"/>
        {attacking&&<><text x="44" y="24" fontSize="12">😡</text></>}
        {frozen&&<text x="30" y="18" fontSize="10">❄️</text>}
      </g>
    </svg>
  );
}

function MonsterGhost({ hp, maxHp, frozen, attacking, size=56 }) {
  const hurt = hp < maxHp;
  return (
    <svg width={size*1.3} height={size*1.2} viewBox="0 0 76 72" style={{overflow:"visible"}}>
      <defs><style>{`
        .gh-body{animation:ghBo 2s ease-in-out infinite;transform-origin:38px 35px}
        .gh-tail{animation:ghTl 1.5s ease-in-out infinite;transform-origin:38px 55px}
        .gh-eye{animation:ghEy 4s ease-in-out infinite}
        .gh-float{animation:ghFl 2.2s ease-in-out infinite;transform-origin:38px 36px}
        @keyframes ghBo{0%,100%{transform:translateY(0)scaleX(1)}50%{transform:translateY(-7px)scaleX(1.05)}}
        @keyframes ghTl{0%,100%{transform:skewX(-8deg)}50%{transform:skewX(8deg)}}
        @keyframes ghEy{0%,75%,100%{transform:scaleY(1)}80%{transform:scaleY(.08)}}
        @keyframes ghFl{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}
      `}</style></defs>
      <g className="gh-float" style={{filter:frozen?"hue-rotate(40deg) brightness(1.5)":undefined}}>
        <g className="gh-body">
          {/* corpo */}
          <path d="M12 38 Q12 10 38 8 Q64 10 64 38 L64 60 Q56 54 50 60 Q44 54 38 60 Q32 54 26 60 Q20 54 14 60 Q12 60 12 38Z" fill={frozen?"#93c5fd":hurt?"#d4ecff":"#c5d8f7"} opacity=".92"/>
          {/* sombra interior */}
          <path d="M18 38 Q18 14 38 12 Q58 14 58 38 L58 58 Q52 53 48 58 Q44 53 38 58 Q32 53 28 58 Q24 53 20 58Z" fill={frozen?"#bfdbfe":hurt?"#e0f0ff":"#dde9ff"} opacity=".7"/>
          {/* brilho */}
          <ellipse cx="30" cy="22" rx="9" ry="6" fill="white" opacity=".3"/>
          {/* cauda */}
          <g className="gh-tail">
            <path d="M14 60 Q20 68 26 60" stroke={frozen?"#93c5fd":hurt?"#b0cbee":"#a0b8e8"} strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M26 60 Q32 68 38 60" stroke={frozen?"#93c5fd":hurt?"#b0cbee":"#a0b8e8"} strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M38 60 Q44 68 50 60" stroke={frozen?"#93c5fd":hurt?"#b0cbee":"#a0b8e8"} strokeWidth="3" fill="none" strokeLinecap="round"/>
            <path d="M50 60 Q56 68 64 60" stroke={frozen?"#93c5fd":hurt?"#b0cbee":"#a0b8e8"} strokeWidth="3" fill="none" strokeLinecap="round"/>
          </g>
        </g>
        {/* olhos */}
        <g className="gh-eye">
          <circle cx="30" cy="34" r="6" fill="white"/>
          <circle cx="46" cy="34" r="6" fill="white"/>
          <circle cx="31" cy="35" r="3.5" fill={attacking?"#dc2626":"#1a1a5e"}/>
          <circle cx="47" cy="35" r="3.5" fill={attacking?"#dc2626":"#1a1a5e"}/>
          <circle cx="32" cy="34" r="1.2" fill="white"/>
          <circle cx="48" cy="34" r="1.2" fill="white"/>
        </g>
        {/* boca */}
        <path d={attacking?"M30 46 Q38 54 46 46":"M31 46 Q38 50 45 46"} stroke={attacking?"#dc2626":"#4a5eb0"} strokeWidth="2" fill="none" strokeLinecap="round"/>
        {attacking&&<text x="52" y="20" fontSize="12">👻</text>}
        {frozen&&<text x="28" y="14" fontSize="10">❄️</text>}
      </g>
    </svg>
  );
}

function MonsterBat({ hp, maxHp, frozen, attacking, size=56 }) {
  const hurt = hp < maxHp;
  return (
    <svg width={size*2} height={size} viewBox="0 0 110 60" style={{overflow:"visible"}}>
      <defs><style>{`
        .bt-wL{animation:btWL 0.6s ease-in-out infinite;transform-origin:42px 26px}
        .bt-wR{animation:btWR 0.6s ease-in-out infinite;transform-origin:68px 26px}
        .bt-body{animation:btBo 2s ease-in-out infinite;transform-origin:55px 32px}
        .bt-ear{animation:btEr 1.5s ease-in-out infinite;transform-origin:55px 16px}
        @keyframes btWL{0%,100%{transform:rotate(-30deg)scaleY(.7)}50%{transform:rotate(15deg)scaleY(1)}}
        @keyframes btWR{0%,100%{transform:rotate(30deg)scaleY(.7)}50%{transform:rotate(-15deg)scaleY(1)}}
        @keyframes btBo{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
        @keyframes btEr{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.1)}}
      `}</style></defs>
      <g className="bt-body" style={{filter:frozen?"hue-rotate(200deg) brightness(1.4)":undefined}}>
        {/* asa esquerda */}
        <g className="bt-wL">
          <path d="M42 26 Q20 8 4 20 Q10 36 26 36 Q34 36 42 30Z" fill={frozen?"#93c5fd":hurt?"#d8c0f0":"#8b5cf6"} opacity=".85"/>
          <path d="M42 28 Q22 18 8 26" stroke={frozen?"#60a5fa":hurt?"#c090e0":"#7c3aed"} strokeWidth="1.5" fill="none" opacity=".6"/>
          <path d="M42 30 Q24 28 12 34" stroke={frozen?"#60a5fa":hurt?"#c090e0":"#7c3aed"} strokeWidth="1" fill="none" opacity=".5"/>
        </g>
        {/* asa direita */}
        <g className="bt-wR">
          <path d="M68 26 Q90 8 106 20 Q100 36 84 36 Q76 36 68 30Z" fill={frozen?"#93c5fd":hurt?"#d8c0f0":"#8b5cf6"} opacity=".85"/>
          <path d="M68 28 Q88 18 102 26" stroke={frozen?"#60a5fa":hurt?"#c090e0":"#7c3aed"} strokeWidth="1.5" fill="none" opacity=".6"/>
          <path d="M68 30 Q86 28 98 34" stroke={frozen?"#60a5fa":hurt?"#c090e0":"#7c3aed"} strokeWidth="1" fill="none" opacity=".5"/>
        </g>
        {/* orelhas */}
        <g className="bt-ear">
          <path d="M46 18 L50 6 L54 18Z" fill={frozen?"#93c5fd":hurt?"#c8a0e8":"#6d28d9"}/>
          <path d="M56 18 L60 6 L64 18Z" fill={frozen?"#93c5fd":hurt?"#c8a0e8":"#6d28d9"}/>
        </g>
        {/* corpo */}
        <ellipse cx="55" cy="32" rx="16" ry="18" fill={frozen?"#93c5fd":hurt?"#d8c0f0":"#8b5cf6"}/>
        <ellipse cx="55" cy="28" rx="12" ry="12" fill={frozen?"#bfdbfe":hurt?"#e8d8ff":"#a78bfa"} opacity=".7"/>
        {/* olhos */}
        <circle cx="50" cy="26" r="4.5" fill={attacking?"#fbbf24":"#fde68a"}/>
        <circle cx="60" cy="26" r="4.5" fill={attacking?"#fbbf24":"#fde68a"}/>
        <circle cx="50" cy="27" r="2.5" fill={attacking?"#dc2626":"#1a0a00"}/>
        <circle cx="60" cy="27" r="2.5" fill={attacking?"#dc2626":"#1a0a00"}/>
        <circle cx="51" cy="26" r="1" fill="white"/>
        <circle cx="61" cy="26" r="1" fill="white"/>
        {/* presas */}
        <path d="M50 38 L52 44" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 38 L58 44" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        {frozen&&<text x="44" y="12" fontSize="10">❄️</text>}
        {attacking&&<text x="80" y="16" fontSize="12">🦇</text>}
      </g>
    </svg>
  );
}

function MonsterDevil({ hp, maxHp, frozen, attacking, size=56 }) {
  const hurt = hp < maxHp;
  return (
    <svg width={size*1.5} height={size*1.4} viewBox="0 0 88 80" style={{overflow:"visible"}}>
      <defs><style>{`
        .dv-tail{animation:dvTl 1.5s ease-in-out infinite;transform-origin:70px 55px}
        .dv-wing{animation:dvWg 1.2s ease-in-out infinite;transform-origin:44px 32px}
        .dv-body{animation:dvBo 2s ease-in-out infinite;transform-origin:44px 42px}
        .dv-eye{animation:dvEy 3s ease-in-out infinite}
        @keyframes dvTl{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(30deg)}}
        @keyframes dvWg{0%,100%{transform:scaleX(.88)scaleY(.92)}50%{transform:scaleX(1.06)scaleY(1)}}
        @keyframes dvBo{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @keyframes dvEy{0%,70%,100%{transform:scaleY(1)}75%{transform:scaleY(.1)}}
      `}</style></defs>
      <g className="dv-body" style={{filter:frozen?"hue-rotate(200deg)":undefined}}>
        {/* asas */}
        <g className="dv-wing">
          <path d="M22 32 Q4 16 2 34 Q4 48 22 44Z" fill={frozen?"#93c5fd":hurt?"#f0b0b0":"#ef4444"} opacity=".8"/>
          <path d="M66 32 Q84 16 86 34 Q84 48 66 44Z" fill={frozen?"#93c5fd":hurt?"#f0b0b0":"#ef4444"} opacity=".8"/>
          <path d="M22 34 Q8 24 6 38" stroke={hurt?"#f87171":"#b91c1c"} strokeWidth="1.5" fill="none" opacity=".6"/>
          <path d="M66 34 Q80 24 82 38" stroke={hurt?"#f87171":"#b91c1c"} strokeWidth="1.5" fill="none" opacity=".6"/>
        </g>
        {/* corpo */}
        <rect x="28" y="32" width="32" height="36" rx="10" fill={frozen?"#93c5fd":hurt?"#fca5a5":"#ef4444"}/>
        {/* barriga */}
        <ellipse cx="44" cy="48" rx="12" ry="10" fill={frozen?"#bfdbfe":hurt?"#ffc8c8":"#fca5a5"} opacity=".8"/>
        {/* cauda com ponta */}
        <g className="dv-tail">
          <path d="M60 58 Q74 52 76 62 Q78 72 66 72" stroke={hurt?"#f87171":"#b91c1c"} strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          <path d="M66 68 L72 76 L60 72Z" fill={hurt?"#f87171":"#b91c1c"}/>
        </g>
        {/* chifres */}
        <path d="M34 34 L30 18 L38 28Z" fill={hurt?"#fca5a5":"#dc2626"}/>
        <path d="M54 34 L58 18 L50 28Z" fill={hurt?"#fca5a5":"#dc2626"}/>
        {/* cabeça */}
        <ellipse cx="44" cy="28" rx="18" ry="18" fill={frozen?"#93c5fd":hurt?"#fca5a5":"#ef4444"}/>
        <ellipse cx="44" cy="24" rx="14" ry="12" fill={frozen?"#bfdbfe":hurt?"#ffc8c8":"#fca5a5"} opacity=".6"/>
        {/* sobrancelhas raivosas */}
        <path d="M32 22 L42 26" stroke="#1a0000" strokeWidth="3" strokeLinecap="round"/>
        <path d="M56 22 L46 26" stroke="#1a0000" strokeWidth="3" strokeLinecap="round"/>
        {/* olhos */}
        <g className="dv-eye">
          <circle cx="37" cy="28" r="5" fill={attacking?"#fbbf24":"#fde68a"}/>
          <circle cx="51" cy="28" r="5" fill={attacking?"#fbbf24":"#fde68a"}/>
          <circle cx="37" cy="29" r="3" fill="#1a0000"/>
          <circle cx="51" cy="29" r="3" fill="#1a0000"/>
          <circle cx="38" cy="28" r="1" fill="white"/>
          <circle cx="52" cy="28" r="1" fill="white"/>
        </g>
        {/* boca */}
        <path d={attacking?"M36 38 Q44 46 52 38":"M37 38 Q44 43 51 38"} stroke="#1a0000" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M39 38 L41 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M49 38 L47 42" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        {frozen&&<text x="32" y="14" fontSize="10">❄️</text>}
        {attacking&&<text x="60" y="14" fontSize="12">😈</text>}
      </g>
    </svg>
  );
}

function MonsterDragon({ hp, maxHp, frozen, attacking, size=72 }) {
  const hurt = hp < maxHp;
  const angry = attacking || hp <= maxHp * 0.4;
  return (
    <svg width={size*2.4} height={size*1.8} viewBox="0 0 140 110" style={{overflow:"visible"}}>
      <defs><style>{`
        .dr-wL{animation:drWL 1s ease-in-out infinite;transform-origin:46px 38px}
        .dr-wR{animation:drWR 1s ease-in-out infinite;transform-origin:94px 38px}
        .dr-body{animation:drBo 2.2s ease-in-out infinite;transform-origin:70px 55px}
        .dr-tail{animation:drTl 1.8s ease-in-out infinite;transform-origin:108px 68px}
        .dr-fire{animation:drFi 0.6s ease-in-out infinite alternate;transform-origin:26px 46px}
        .dr-eye{animation:drEy 2.5s ease-in-out infinite}
        @keyframes drWL{0%,100%{transform:rotate(-28deg)scaleY(.8)}50%{transform:rotate(18deg)scaleY(1.08)}}
        @keyframes drWR{0%,100%{transform:rotate(28deg)scaleY(.8)}50%{transform:rotate(-18deg)scaleY(1.08)}}
        @keyframes drBo{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes drTl{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(25deg)}}
        @keyframes drFi{0%{transform:scaleX(.7)scaleY(.8)}100%{transform:scaleX(1.2)scaleY(1.3)}}
        @keyframes drEy{0%,80%,100%{transform:scaleY(1)}85%{transform:scaleY(.1)}}
      `}</style></defs>
      <g className="dr-body" style={{filter:frozen?"hue-rotate(190deg) brightness(1.3)":undefined}}>
        {/* asa esquerda */}
        <g className="dr-wL">
          <path d="M46 38 Q10 4 2 28 Q6 56 30 56 Q38 56 46 46Z" fill={frozen?"#93c5fd":angry?"#ff6060":hurt?"#ff8080":"#f97316"} opacity=".85"/>
          <path d="M46 40 Q14 18 6 38" stroke={frozen?"#60a5fa":angry?"#ff3030":"#dc2626"} strokeWidth="2" fill="none" opacity=".6"/>
          <path d="M46 44 Q18 38 10 50" stroke={frozen?"#60a5fa":angry?"#ff3030":"#dc2626"} strokeWidth="1.5" fill="none" opacity=".4"/>
        </g>
        {/* asa direita */}
        <g className="dr-wR">
          <path d="M94 38 Q130 4 138 28 Q134 56 110 56 Q102 56 94 46Z" fill={frozen?"#93c5fd":angry?"#ff6060":hurt?"#ff8080":"#f97316"} opacity=".85"/>
          <path d="M94 40 Q126 18 134 38" stroke={frozen?"#60a5fa":angry?"#ff3030":"#dc2626"} strokeWidth="2" fill="none" opacity=".6"/>
        </g>
        {/* corpo */}
        <ellipse cx="70" cy="62" rx="28" ry="30" fill={frozen?"#93c5fd":angry?"#ff4040":hurt?"#ff7070":"#ea580c"}/>
        {/* barriga */}
        <ellipse cx="70" cy="68" rx="20" ry="22" fill={frozen?"#bfdbfe":angry?"#ff8080":hurt?"#ffb0b0":"#fed7aa"} opacity=".8"/>
        {/* espinhos nas costas */}
        <path d="M55 34 L58 24 L62 34" fill={hurt?"#fca5a5":"#dc2626"} opacity=".9"/>
        <path d="M65 30 L68 18 L72 30" fill={hurt?"#fca5a5":"#dc2626"} opacity=".9"/>
        <path d="M75 32 L78 22 L82 32" fill={hurt?"#fca5a5":"#dc2626"} opacity=".9"/>
        {/* cauda com espinhos */}
        <g className="dr-tail">
          <path d="M94 68 Q112 62 120 75 Q124 88 110 90 Q118 82 112 78 Q106 74 94 74Z" fill={frozen?"#93c5fd":hurt?"#ff8080":"#ea580c"}/>
          <path d="M110 72 L118 68 L114 76Z" fill={hurt?"#fca5a5":"#dc2626"}/>
          <path d="M116 78 L124 74 L120 82Z" fill={hurt?"#fca5a5":"#dc2626"}/>
        </g>
        {/* cabeça */}
        <ellipse cx="44" cy="44" rx="22" ry="20" fill={frozen?"#93c5fd":angry?"#ff4040":hurt?"#ff7070":"#ea580c"}/>
        <ellipse cx="44" cy="40" rx="16" ry="14" fill={frozen?"#bfdbfe":angry?"#ff8080":hurt?"#ffb0b0":"#fed7aa"} opacity=".7"/>
        {/* focinho */}
        <ellipse cx="32" cy="48" rx="10" ry="7" fill={frozen?"#bfdbfe":hurt?"#ffb0b0":"#fdba74"}/>
        {/* narinas */}
        <circle cx="29" cy="46" r="2" fill={angry?"#dc2626":"#92400e"}/>
        <circle cx="35" cy="46" r="2" fill={angry?"#dc2626":"#92400e"}/>
        {/* FOGO pela boca */}
        {angry && <g className="dr-fire">
          <path d="M22 46 Q10 36 2 42 Q6 52 14 50 Q8 54 4 60 Q12 58 16 52 Q12 60 14 66 Q22 60 18 52 Q22 60 26 56 Q24 52 26 46Z" fill="#fbbf24" opacity=".9"/>
          <path d="M22 48 Q12 40 6 46 Q10 54 18 52 Q14 58 10 62 Q18 60 20 54 Q18 60 22 58 Q22 54 22 48Z" fill="#f97316" opacity=".8"/>
          <path d="M22 50 Q14 44 10 50 Q14 56 20 54Z" fill="#ef4444" opacity=".7"/>
        </g>}
        {/* chifres */}
        <path d="M34 30 L28 12 L38 26Z" fill={hurt?"#fca5a5":"#b91c1c"}/>
        <path d="M54 28 L60 10 L50 24Z" fill={hurt?"#fca5a5":"#b91c1c"}/>
        {/* olhos */}
        <g className="dr-eye">
          <circle cx="38" cy="38" r="6" fill={angry?"#fbbf24":"#fde68a"}/>
          <circle cx="52" cy="36" r="6" fill={angry?"#fbbf24":"#fde68a"}/>
          <circle cx="38" cy="39" r="3.5" fill="#1a0000"/>
          <circle cx="52" cy="37" r="3.5" fill="#1a0000"/>
          <circle cx="39" cy="38" r="1.2" fill="white"/>
          <circle cx="53" cy="36" r="1.2" fill="white"/>
        </g>
        {/* boca */}
        <path d="M28 52 Q34 58 40 52" stroke="#1a0000" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* dentes */}
        <path d="M30 52 L28 56" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M36 52 L38 57" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        {/* sobrancelhas furiosas */}
        <path d="M30 34 L40 38" stroke="#1a0000" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M58 32 L48 36" stroke="#1a0000" strokeWidth="3.5" strokeLinecap="round"/>
        {frozen&&<text x="56" y="16" fontSize="12">❄️</text>}
        {angry&&!frozen&&<text x="96" y="20" fontSize="14">🔥</text>}
      </g>
    </svg>
  );
}

const MONSTER_COMPONENTS = {
  slime: MonsterSlime,
  ghost: MonsterGhost,
  bat: MonsterBat,
  devil: MonsterDevil,
  dragon: MonsterDragon,
};
function MonsterBody({type, hp, maxHp, frozen, attacking, size=56}){
  const Comp = MONSTER_COMPONENTS[type];
  if(!Comp) return <span style={{fontSize:size*.6}}>👾</span>;
  return <Comp hp={hp} maxHp={maxHp} frozen={frozen} attacking={attacking} size={size}/>;
}

const CHAR_COMPONENTS = {
  c1: CharStellaRose,
  c2: CharLunaWitch,
  c3: CharAriaWings,
  c4: CharNovaHero,
  c5: CharCrystalDoll,
  c6: CharSakuraMage,
  c7: CharVioletTech,
  c8: CharRubyFlame,
};
function CharBody({ charId, anim="idle", size=120 }){
  const Comp = CHAR_COMPONENTS[charId];
  if (!Comp) return <span style={{ fontSize: size * 0.5 }}>👸</span>;
  return <Comp anim={anim} size={size} />;
}


// ══════════════════════════════════════════════════════════════
//  DATA
// ══════════════════════════════════════════════════════════════
const CHARACTERS = [
  { id:"c1", name:"Stella Rose",   price:0,   rarity:"starter",  color:"#e91e8c", xpBonus:0,
    power:{ name:"Chuva de Rosas", key:"roses",  desc:"Elimina inimigos próximos!", type:"aoe",    cd:12 },
    desc:"Princesa das estrelas. Doce e poderosa." },
  { id:"c2", name:"Luna Witch",    price:120, rarity:"raro",     color:"#7c3aed", xpBonus:15,
    power:{ name:"Lua Negra",       key:"freeze", desc:"Congela tudo por 4s!",      type:"freeze", cd:15 },
    desc:"Feiticeira da lua. Domina magia sombria." },
  { id:"c3", name:"Aria Wings",    price:200, rarity:"épico",    color:"#38bdf8", xpBonus:25,
    power:{ name:"Asa Relâmpago",   key:"dash",   desc:"Velocidade 3x por 5s!",     type:"speed",  cd:10 },
    desc:"Fadinha guerreira que flutua pelos céus." },
  { id:"c4", name:"Nova Hero",     price:350, rarity:"lendário", color:"#fbbf24", xpBonus:40,
    power:{ name:"Explosão Cósmica",key:"bomb",   desc:"Limpa toda a tela!",         type:"clear",  cd:20 },
    desc:"Super-heroína cósmica invencível!" },
  { id:"c5", name:"Crystal Doll",  price:280, rarity:"épico",    color:"#10b981", xpBonus:30,
    power:{ name:"Cristal Duplo",   key:"double", desc:"Moedas valem 2x por 8s!",   type:"double", cd:8  },
    desc:"Boneca fashion de cristal com olho de piscada." },
  { id:"c6", name:"Sakura Mage",   price:180, rarity:"raro",     color:"#e879f9", xpBonus:18,
    power:{ name:"Ventania Sakura", key:"petal",  desc:"Pétalas atraem moedas!",    type:"magnet", cd:11 },
    desc:"Maga japonesa que controla pétalas de cerejeira." },
  { id:"c7", name:"Violet Tech",   price:320, rarity:"épico",    color:"#a78bfa", xpBonus:35,
    power:{ name:"Visor de Scan",   key:"scan",   desc:"Revela moedas ocultas!",    type:"reveal", cd:13 },
    desc:"Cientista genial com traje tecnológico." },
  { id:"c8", name:"Ruby Flame",    price:450, rarity:"lendário", color:"#f97316", xpBonus:45,
    power:{ name:"Chama Infernal",  key:"burn",   desc:"Queima todos os inimigos!", type:"clear",  cd:18 },
    desc:"Guerreira de fogo destruidora de monstros!" },
];

const SHOP_ITEMS = [
  { id:"a1", name:"Laço Rosa",         price:30,  emoji:"🎀", rarity:"comum",    desc:"Laço fofo!" },
  { id:"a2", name:"Coroa Dourada",     price:80,  emoji:"👑", rarity:"raro",     desc:"Coroa real!" },
  { id:"a3", name:"Varinha Mágica",    price:100, emoji:"🪄", rarity:"raro",     desc:"Magia pura!" },
  { id:"i1", name:"Asas Borboleta",    price:180, emoji:"🦋", rarity:"épico",    desc:"Voar com estilo!" },
  { id:"i2", name:"Mochila Unicórnio", price:130, emoji:"🦄", rarity:"raro",     desc:"Mochila mágica!" },
  { id:"i3", name:"Pet Gatinho",       price:220, emoji:"🐱", rarity:"épico",    desc:"Gatinho fofo!" },
  { id:"i4", name:"Pet Unicórnio",     price:400, emoji:"🦄", rarity:"lendário", desc:"Unicórnio!" },
  { id:"i5", name:"Efeito Aurora",     price:160, emoji:"🌈", rarity:"raro",     desc:"Aura aurora!" },
];

const LEVEL_XP=[0,100,250,450,700,1000,1400,1900,2500,3200,4000,5000,6200,7600,9200,11000,13000,15500,18500,22000,26000];
const rarityCol={ starter:"#aaa", comum:"#78d97b", raro:"#60a5fa", épico:"#b57bee", lendário:"#fbbf24" };
const LEVEL_EVENTS={
  10:{ title:"🌟 NÍVEL 10 — BOSS!", desc:"Dragões furiosos surgem!", effect:"boss" },
  20:{ title:"💫 NÍVEL 20 — CHUVA DE OURO!", desc:"Moedas em chuva por 30s!", effect:"rain" },
  30:{ title:"🌈 NÍVEL 30 — ARCO-ÍRIS!", desc:"Velocidade aumentada!", effect:"rainbow" },
};

// ENEMY DEFS com tipo de monstro SVG, HP, ataques visuais
const ENEMY_DEFS = [
  { type:"slime", name:"Gosma Roxa",     spd:0.85, baseHp:3, pts:12, dmg:1, col:"#b57bee", wide:false },
  { type:"ghost", name:"Fantasma",       spd:1.25, baseHp:3, pts:16, dmg:1, col:"#93c5fd", wide:false },
  { type:"bat",   name:"Morcego Sombrio",spd:1.0,  baseHp:4, pts:22, dmg:1, col:"#8b5cf6", wide:true  },
  { type:"devil", name:"Diabinho",       spd:0.95, baseHp:6, pts:38, dmg:2, col:"#ef4444", wide:false },
  { type:"dragon",name:"Dragão Chefe",   spd:0.75, baseHp:14,pts:90, dmg:3, col:"#f97316", wide:true, boss:true },
];

// ── MAP CONFIG — mundo GRANDE ──────────────────────────────
const TILE=48, MAP_W=52, MAP_H=36;

function buildMap(ml){
  const g=[];
  for(let r=0;r<MAP_H;r++){g.push([]);for(let c=0;c<MAP_W;c++){g[r].push(r===0||r===MAP_H-1||c===0||c===MAP_W-1?1:0);}}
  // salas e corredores
  const rooms=[];
  for(let i=0;i<8+ml;i++){
    const rw=4+Math.floor(Math.random()*5),rh=3+Math.floor(Math.random()*4);
    const sr=2+Math.floor(Math.random()*(MAP_H-rh-4));
    const sc=2+Math.floor(Math.random()*(MAP_W-rw-4));
    rooms.push({sr,sc,rw,rh});
    for(let rr=sr;rr<sr+rh;rr++)for(let cc=sc;cc<sc+rw;cc++)g[rr][cc]=0;
  }
  // blocos espalhados
  for(let i=0;i<40+ml*6;i++){
    const r=2+Math.floor(Math.random()*(MAP_H-4)),c=2+Math.floor(Math.random()*(MAP_W-4));
    if(Math.abs(r-3)>2||Math.abs(c-3)>2) g[r][c]=1;
  }
  // garante spawn seguro
  for(let r=2;r<6;r++)for(let c=2;c<6;c++)g[r][c]=0;
  return g;
}

function spawnCoins(grid,count){
  const coins=[];
  for(let i=0;i<count;i++){let r,c,t=0;do{r=1+Math.floor(Math.random()*(MAP_H-2));c=1+Math.floor(Math.random()*(MAP_W-2));t++;}while((grid[r]?.[c]!==0)&&t<300);if(t<300)coins.push({id:`cn_${i}_${Date.now()}`,r,c,val:1+Math.floor(i/10),collected:false});}
  return coins;
}

function spawnEnemies(grid,count,ml){
  const pool=ml>=10?ENEMY_DEFS:[...ENEMY_DEFS.slice(0,4)];
  const enemies=[];
  for(let i=0;i<count;i++){
    let r,c,t=0;do{r=4+Math.floor(Math.random()*(MAP_H-8));c=4+Math.floor(Math.random()*(MAP_W-8));t++;}while((grid[r]?.[c]!==0)&&t<300);
    const def=pool[Math.floor(Math.random()*pool.length)];
    const hp=def.baseHp+Math.floor(ml/2);
    enemies.push({
      id:`en_${i}_${Date.now()}_${Math.random()}`,
      ...def,
      hp, maxHp:hp,
      spd:def.spd*(1+ml*0.05),
      px:c*TILE+TILE/2, py:r*TILE+TILE/2,
      dead:false, frozen:false, attacking:false,
      hitFlash:0, iframes:0,
    });
  }
  return enemies;
}

// ── HELPERS ──────────────────────────────────────────────────
function getLevel(xp){for(let i=LEVEL_XP.length-1;i>=0;i--){if(xp>=LEVEL_XP[i])return i+1;}return 1;}
function xpForNext(xp){const lv=getLevel(xp);const next=LEVEL_XP[lv]??(LEVEL_XP[LEVEL_XP.length-1]+5000);const prev=LEVEL_XP[lv-1]??0;return{current:xp-prev,needed:next-prev};}

// ── PARTICLE / FLOAT ─────────────────────────────────────────
function Particle({x,y,onDone,pool}){
  const em=(pool||["✨","💖","⭐","🌸"])[Math.floor(Math.random()*(pool||["✨","💖","⭐","🌸"]).length)];
  const [st,setSt]=useState({position:"fixed",left:x,top:y,fontSize:20,pointerEvents:"none",zIndex:9999,opacity:1,transform:"translate(-50%,-50%) scale(1)",transition:"all 0.85s ease-out"});
  useEffect(()=>{const dx=(Math.random()-0.5)*130,dy=-(Math.random()*90+30);setTimeout(()=>setSt(s=>({...s,opacity:0,transform:`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px)) scale(0.2)`})),30);const t=setTimeout(onDone,900);return()=>clearTimeout(t);},[]);
  return <span style={st}>{em}</span>;
}
function FloatText({x,y,text,color,onDone}){
  const [st,setSt]=useState({position:"fixed",left:x,top:y,color,fontWeight:900,fontSize:17,pointerEvents:"none",zIndex:9999,opacity:1,transform:"translate(-50%,-50%)",textShadow:"0 2px 6px #0005",transition:"all 0.75s ease-out"});
  useEffect(()=>{setTimeout(()=>setSt(s=>({...s,opacity:0,transform:"translate(-50%,calc(-50% - 55px))"})),30);const t=setTimeout(onDone,800);return()=>clearTimeout(t);},[]);
  return <span style={st}>{text}</span>;
}

// ── JOYSTICK ─────────────────────────────────────────────────
function Joystick({onChange}){
  const base=useRef(null);const active=useRef(false);const center=useRef({x:0,y:0});
  const R=52,KR=22;
  const getPos=e=>{const t=e.touches?e.touches[0]:e;return{x:t.clientX,y:t.clientY};};
  const start=e=>{e.preventDefault();const rect=base.current.getBoundingClientRect();center.current={x:rect.left+rect.width/2,y:rect.top+rect.height/2};active.current=true;move(e);};
  const move=e=>{if(!active.current)return;e.preventDefault();const{x,y}=getPos(e);let dx=x-center.current.x,dy=y-center.current.y;const dist=Math.sqrt(dx*dx+dy*dy);if(dist>R){dx=dx/dist*R;dy=dy/dist*R;}const knob=base.current?.querySelector(".jknob");if(knob){knob.style.transform=`translate(calc(-50% + ${dx}px),calc(-50% + ${dy}px))`;}onChange({x:Math.abs(dx/R)>0.16?dx/R:0,y:Math.abs(dy/R)>0.16?dy/R:0});};
  const end=()=>{active.current=false;const knob=base.current?.querySelector(".jknob");if(knob){knob.style.transform="translate(-50%,-50%)";}onChange({x:0,y:0});};
  return(
    <div ref={base} onTouchStart={start} onTouchMove={move} onTouchEnd={end} onMouseDown={start} onMouseMove={move} onMouseUp={end} onMouseLeave={end}
      style={{width:R*2,height:R*2,borderRadius:"50%",background:"radial-gradient(circle,#ffb3e0cc,#cc80ff44)",border:"3px solid #ffb3e0",position:"relative",cursor:"pointer",userSelect:"none",touchAction:"none",boxShadow:"0 4px 18px #ff85c840",flexShrink:0}}>
      <div className="jknob" style={{width:KR*2,height:KR*2,borderRadius:"50%",background:"linear-gradient(135deg,#ff85c8,#cc80ff)",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",boxShadow:"0 3px 10px #ff85c860",pointerEvents:"none"}}/>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  MAP GAME
// ══════════════════════════════════════════════════════════════
function MapGame({equippedChar,onEarn}){
  const [mapLevel,setMapLevel]=useState(1);
  const [phase,setPhase]=useState("idle");
  const [grid,setGrid]=useState(null);
  const [coins,setCoins]=useState([]);
  const [enemies,setEnemies]=useState([]);
  const [player,setPlayer]=useState({px:TILE*3+TILE/2,py:TILE*3+TILE/2,hp:6,maxHp:6,iframes:0});
  const [score,setScore]=useState(0);
  const [coinsLeft,setCoinsLeft]=useState(0);
  const [powerCd,setPowerCd]=useState(0);
  const [doubleActive,setDoubleActive]=useState(false);
  const [frozen,setFrozen]=useState(false);
  const [speedBoost,setSpeedBoost]=useState(false);
  const [floats,setFloats]=useState([]);
  const [parts,setParts]=useState([]);
  const [viewOfs,setViewOfs]=useState({x:0,y:0});
  const [shake,setShake]=useState(false);
  const [levelEvt,setLevelEvt]=useState(null);
  const [playerAnim,setPlayerAnim]=useState("idle");
  const [playerHurt,setPlayerHurt]=useState(false);

  const fid=useRef(0),pid=useRef(0),joyRef=useRef({x:0,y:0}),rafRef=useRef(null),lastT=useRef(0);
  const playerRef=useRef(player),enemiesRef=useRef(enemies),coinsRef=useRef(coins);
  const gridRef=useRef(grid),phaseRef=useRef(phase);
  const doubleRef=useRef(doubleActive),frozenRef=useRef(frozen),speedRef=useRef(speedBoost);
  const viewRef=useRef(viewOfs),iframesRef=useRef(0),enemyTimerRef=useRef({});

  playerRef.current=player; enemiesRef.current=enemies; coinsRef.current=coins;
  gridRef.current=grid; phaseRef.current=phase; doubleRef.current=doubleActive;
  frozenRef.current=frozen; speedRef.current=speedBoost; viewRef.current=viewOfs;
  iframesRef.current=player.iframes||0;

  const VIEW_W=Math.min(typeof window!=="undefined"?window.innerWidth-28:360,500);
  const VIEW_H=320;

  const addFloat=(x,y,text,color="#ff85c8")=>{const id=++fid.current;setFloats(f=>[...f,{id,x,y,text,color}]);};
  const addParts=(x,y,pool)=>{setParts(p=>[...p,...Array.from({length:6},()=>({id:++pid.current,x:x+(Math.random()-0.5)*60,y:y+(Math.random()-0.5)*60,pool}))]);};
  const doShake=()=>{setShake(true);setTimeout(()=>setShake(false),350);};

  const startMap=useCallback((ml)=>{
    const g=buildMap(ml);
    const c=spawnCoins(g,14+ml*5);
    const e=spawnEnemies(g,3+ml*2,ml);
    setGrid(g);setCoins(c);setEnemies(e);
    setPlayer({px:TILE*3+TILE/2,py:TILE*3+TILE/2,hp:6,maxHp:6,iframes:0});
    setScore(0);setCoinsLeft(c.length);setPowerCd(0);
    setDoubleActive(false);setFrozen(false);setSpeedBoost(false);
    setPhase("playing"); enemyTimerRef.current={};
    if(LEVEL_EVENTS[ml]){setLevelEvt(LEVEL_EVENTS[ml]);setTimeout(()=>setLevelEvt(null),4000);}
  },[]);

  // camera + walk anim
  useEffect(()=>{
    if(phase!=="playing")return;
    const ox=Math.max(0,Math.min(MAP_W*TILE-VIEW_W,player.px-VIEW_W/2));
    const oy=Math.max(0,Math.min(MAP_H*TILE-VIEW_H,player.py-VIEW_H/2));
    setViewOfs({x:ox,y:oy});
    const moving=Math.abs(joyRef.current.x)>0.1||Math.abs(joyRef.current.y)>0.1;
    setPlayerAnim(moving?"walk":"idle");
  },[player.px,player.py,phase]);

  // game loop
  useEffect(()=>{
    if(phase!=="playing"||!grid)return;
    const loop=ts=>{
      if(phaseRef.current!=="playing")return;
      const dt=Math.min((ts-lastT.current)/1000,0.05);lastT.current=ts;
      const joy=joyRef.current;
      const spd=speedRef.current?6.0:3.2;
      let nx=playerRef.current.px+joy.x*spd*TILE*dt*1.8;
      let ny=playerRef.current.py+joy.y*spd*TILE*dt*1.8;
      const pr=TILE*0.34;
      const colWall=(px,py)=>{const c1=Math.floor((px-pr)/TILE),c2=Math.floor((px+pr)/TILE),r1=Math.floor((py-pr)/TILE),r2=Math.floor((py+pr)/TILE);for(let r=r1;r<=r2;r++)for(let c=c1;c<=c2;c++){if(r>=0&&r<MAP_H&&c>=0&&c<MAP_W&&gridRef.current[r]?.[c]===1)return true;}return false;};
      if(colWall(nx,playerRef.current.py))nx=playerRef.current.px;
      if(colWall(playerRef.current.px,ny))ny=playerRef.current.py;

      // moedas
      let newCoins=[...coinsRef.current];
      let coinsGot=0;
      newCoins=newCoins.map(coin=>{
        if(coin.collected)return coin;
        const dx=nx-coin.c*TILE-TILE/2,dy=ny-coin.r*TILE-TILE/2;
        if(Math.sqrt(dx*dx+dy*dy)<TILE*0.85){
          const val=doubleRef.current?coin.val*2:coin.val;
          onEarn(val*2,val);setScore(s=>s+val*10);coinsGot++;
          const vx=viewRef.current;
          addFloat(coin.c*TILE+TILE/2-vx.x+20,coin.r*TILE+TILE/2-vx.y+50,doubleRef.current?`💰x2+${val}`:`🪙+${val}`,doubleRef.current?"#ffd166":"#ff85c8");
          addParts(coin.c*TILE+TILE/2,coin.r*TILE+TILE/2,["🪙","✨","💛","⭐"]);
          return{...coin,collected:true};
        }
        return coin;
      });
      const rem=newCoins.filter(c=>!c.collected).length;
      setCoinsLeft(rem);setCoins(newCoins);
      if(rem===0){setPhase("clear");onEarn(mapLevel*10,0);return;}

      // inimigos: mover + atacar
      const curIf=iframesRef.current;
      const newIf=Math.max(0,curIf-dt);
      let tookDmg=false,dmgAmt=0;

      setEnemies(prev=>prev.map(e=>{
        if(e.dead)return e;
        let ex=e.px,ey=e.py;
        if(!frozenRef.current){
          const dx=nx-e.px,dy=ny-e.py,dist=Math.sqrt(dx*dx+dy*dy);
          const enemySpd=e.spd*TILE*dt;
          const angle=Math.atan2(dy,dx);
          const tex=e.px+Math.cos(angle)*enemySpd,tey=e.py+Math.sin(angle)*enemySpd;
          const ec=Math.floor(tex/TILE),er=Math.floor(tey/TILE);
          if(er>=0&&er<MAP_H&&ec>=0&&ec<MAP_W&&gridRef.current[er]?.[ec]===0){ex=tex;ey=tey;}
          // dano ao jogador
          const contactDist=e.wide?TILE*1.1:TILE*0.78;
          if(dist<contactDist&&curIf<=0){
            tookDmg=true;dmgAmt=Math.max(dmgAmt,e.dmg);
          }
        }
        const isAtk=!frozenRef.current&&Math.sqrt((nx-ex)**2+(ny-ey)**2)<TILE*(e.wide?1.2:0.9);
        return{...e,px:ex,py:ey,attacking:isAtk};
      }));

      if(tookDmg&&curIf<=0){
        setPlayer(p=>{
          const nh=p.hp-dmgAmt;
          doShake();
          const vx=viewRef.current;
          addFloat(nx-vx.x+20,ny-vx.y+35,`💢-${dmgAmt}`,"#f87171");
          if(nh<=0){setPhase("dead");}
          return{...p,hp:Math.max(0,nh),iframes:1.5};
        });
        setPlayerHurt(true);setTimeout(()=>setPlayerHurt(false),400);
        iframesRef.current=1.5;
      } else {
        setPlayer(p=>({...p,px:nx,py:ny,iframes:newIf}));
      }
      rafRef.current=requestAnimationFrame(loop);
    };
    lastT.current=performance.now();
    rafRef.current=requestAnimationFrame(loop);
    return()=>cancelAnimationFrame(rafRef.current);
  },[phase,grid,mapLevel]);

  useEffect(()=>{if(phase!=="playing")return;const t=setInterval(()=>setPowerCd(c=>Math.max(0,c-1)),1000);return()=>clearInterval(t);},[phase]);

  const attackEnemy=(e,sx,sy)=>{
    if(e.dead||phase!=="playing")return;
    const dx=playerRef.current.px-e.px,dy=playerRef.current.py-e.py;
    if(Math.sqrt(dx*dx+dy*dy)>TILE*(e.wide?3.5:2.8))return;
    const dmg=1+Math.floor(Math.random()*2);
    const nh=e.hp-dmg;
    if(nh<=0){
      onEarn(e.pts*2,e.pts);setScore(s=>s+e.pts*10);
      addFloat(sx,sy,`💥+${e.pts}`,"#ffd166");
      addParts(e.px,e.py,["💥","✨","🌟","💖"]);
      setEnemies(prev=>prev.map(en=>en.id===e.id?{...en,hp:0,dead:true}:en));
    } else {
      addFloat(sx,sy,`⚔️-${dmg}`,"#ff85c8");
      setEnemies(prev=>prev.map(en=>en.id===e.id?{...en,hp:nh,hitFlash:0.25}:en));
    }
  };

  const usePower=()=>{
    if(!equippedChar?.power||powerCd>0||phase!=="playing")return;
    const p=equippedChar.power;setPowerCd(p.cd);
    if(p.type==="aoe"){
      setEnemies(prev=>prev.map(e=>{
        if(e.dead)return e;
        const dx=playerRef.current.px-e.px,dy=playerRef.current.py-e.py;
        if(Math.sqrt(dx*dx+dy*dy)<TILE*5){onEarn(e.pts*2,e.pts);return{...e,hp:0,dead:true};}
        return e;
      }));
      addFloat(VIEW_W/2,VIEW_H/2,"🌸 CHUVA DE ROSAS!","#e91e8c");
      addParts(playerRef.current.px,playerRef.current.py,["🌸","💖","🌺","✨"]);
    }
    if(p.type==="freeze"){setFrozen(true);addFloat(VIEW_W/2,VIEW_H/2,"🌙 CONGELADOS!","#93c5fd");setTimeout(()=>setFrozen(false),4000);}
    if(p.type==="speed"){setSpeedBoost(true);addFloat(VIEW_W/2,VIEW_H/2,"⚡ SUPER SPEED!","#ffd166");setTimeout(()=>setSpeedBoost(false),5000);}
    if(p.type==="clear"||p.type==="burn"){
      setEnemies(prev=>prev.map(e=>{if(!e.dead){onEarn(e.pts*2,e.pts);}return{...e,hp:0,dead:true};}));
      addFloat(VIEW_W/2,VIEW_H/2,p.type==="burn"?"🔥 CHAMA INFERNAL!":"💥 LIMPA TELA!","#ffd166");
      addParts(playerRef.current.px,playerRef.current.py,["💥","🌟","⭐","💫"]);
    }
    if(p.type==="double"){setDoubleActive(true);addFloat(VIEW_W/2,VIEW_H/2,"💎 MOEDAS 2x!","#10b981");setTimeout(()=>setDoubleActive(false),8000);}
    if(p.type==="magnet"){
      let got=0;
      setCoins(prev=>prev.map(c=>{
        if(c.collected)return c;
        const dx=playerRef.current.px-(c.c*TILE+TILE/2),dy=playerRef.current.py-(c.r*TILE+TILE/2);
        if(Math.sqrt(dx*dx+dy*dy)<TILE*7){const val=c.val;onEarn(val*2,val);setScore(s=>s+val*10);got++;return{...c,collected:true};}
        return c;
      }));
      setCoinsLeft(prev=>Math.max(0,prev-got));
      addFloat(VIEW_W/2,VIEW_H/2,"🌸 PÉTALAS ATRAEM!","#e879f9");
    }
    if(p.type==="reveal"){addFloat(VIEW_W/2,VIEW_H/2,"💜 SCAN ATIVO!","#a78bfa");}
  };

  const powerIcon={roses:"🌸",freeze:"🌙",dash:"⚡",bomb:"💥",double:"💎",petal:"🌸",scan:"💜",burn:"🔥"}[equippedChar?.power?.key]||"⚡";

  // minimap
  const MM_W=90, MM_H=62;
  const mmScaleX=MM_W/(MAP_W*TILE), mmScaleY=MM_H/(MAP_H*TILE);

  if(phase==="idle") return(
    <div style={{textAlign:"center",padding:"14px 0"}}>
      <div style={{display:"flex",justifyContent:"center",marginBottom:8}}>
        <CharBody charId={equippedChar?.id} anim="idle" size={110}/>
      </div>
      <div style={{fontSize:19,fontWeight:900,color:"#d94da0",marginBottom:4}}>🗺️ Aventura no Mapa!</div>
      <div style={{fontSize:11,color:"#c070a0",lineHeight:1.7,marginBottom:12}}>Mova com o joystick · Toque nos monstros para atacar<br/>Colete todas as moedas para vencer! Cuidado com o HP! ❤️</div>
      <div style={{background:"#fff0f7",borderRadius:14,padding:10,marginBottom:14,border:"2px solid #ffb3e0",textAlign:"left"}}>
        <div style={{fontWeight:900,color:"#9040b0",fontSize:13}}>{powerIcon} {equippedChar?.power?.name}</div>
        <div style={{fontSize:11,color:"#b070b0"}}>{equippedChar?.power?.desc} · CD: {equippedChar?.power?.cd}s</div>
      </div>
      <button onClick={()=>startMap(mapLevel)} style={{background:"linear-gradient(90deg,#ff85c8,#cc80ff)",color:"#fff",border:"none",borderRadius:22,padding:"12px 36px",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:"0 4px 18px #ff85c840"}}>
        🎮 Jogar Mapa {mapLevel}
      </button>
    </div>
  );

  if(phase==="dead") return(
    <div style={{textAlign:"center",padding:"14px 0"}}>
      <div style={{fontSize:52}}>💔</div>
      <div style={{fontSize:19,fontWeight:900,color:"#d94da0",margin:"8px 0 4px"}}>Você foi derrotada!</div>
      <div style={{background:"#fff",borderRadius:14,padding:12,margin:"10px auto",display:"inline-block"}}>
        <div style={{fontSize:20,fontWeight:900,color:"#d94da0"}}>⭐ {score}</div>
        <div style={{fontSize:12,color:"#b080b0"}}>Mapa {mapLevel}</div>
      </div><br/>
      <button onClick={()=>startMap(mapLevel)} style={{background:"linear-gradient(90deg,#ff85c8,#cc80ff)",color:"#fff",border:"none",borderRadius:20,padding:"11px 30px",fontSize:14,fontWeight:900,cursor:"pointer",marginTop:10}}>🔄 Tentar de Novo</button><br/>
      <button onClick={()=>setPhase("idle")} style={{background:"#fff",color:"#d94da0",border:"2px solid #ffb3e0",borderRadius:18,padding:"7px 20px",fontSize:12,fontWeight:700,cursor:"pointer",marginTop:8}}>← Voltar</button>
    </div>
  );

  if(phase==="clear") return(
    <div style={{textAlign:"center",padding:"14px 0"}}>
      <div style={{display:"flex",justifyContent:"center",marginBottom:4}}>
        <CharBody charId={equippedChar?.id} anim="idle" size={100}/>
      </div>
      <div style={{fontSize:21,fontWeight:900,color:"#d94da0"}}>🏆 Mapa {mapLevel} concluído!</div>
      <div style={{background:"#fff",borderRadius:14,padding:12,margin:"10px auto",display:"inline-block"}}>
        <div style={{fontSize:22,fontWeight:900,color:"#d94da0"}}>⭐ {score}</div>
      </div><br/>
      <button onClick={()=>{const nl=mapLevel+1;setMapLevel(nl);startMap(nl);}} style={{background:"linear-gradient(90deg,#ffd166,#ff85c8)",color:"#fff",border:"none",borderRadius:22,padding:"12px 36px",fontSize:15,fontWeight:900,cursor:"pointer",boxShadow:"0 4px 18px #ff85c840",marginTop:8}}>
        ➡️ Mapa {mapLevel+1}!
      </button>
    </div>
  );

  // GAMEPLAY
  return(
    <div style={{fontFamily:"'Nunito',sans-serif"}}>
      {floats.map(f=><FloatText key={f.id} x={f.x} y={f.y} text={f.text} color={f.color} onDone={()=>setFloats(fs=>fs.filter(ff=>ff.id!==f.id))}/>)}
      {parts.map(p=><Particle key={p.id} x={p.x} y={p.y} pool={p.pool} onDone={()=>setParts(ps=>ps.filter(pp=>pp.id!==p.id))}/>)}
      {levelEvt&&<div style={{position:"fixed",top:"42%",left:"50%",transform:"translate(-50%,-50%)",zIndex:8000,background:"linear-gradient(90deg,#ff85c8,#ffd166)",color:"#fff",fontWeight:900,fontSize:17,padding:"16px 28px",borderRadius:22,boxShadow:"0 8px 32px #ff85c860",textAlign:"center",maxWidth:300,animation:"wvIn 0.4s ease"}}><div>{levelEvt.title}</div><div style={{fontSize:12,fontWeight:700,marginTop:5}}>{levelEvt.desc}</div></div>}
      {/* HUD */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:6,gap:4}}>
        <div style={{fontWeight:900,color:"#d94da0",fontSize:12}}>🗺️ Mapa {mapLevel}</div>
        <div style={{display:"flex",gap:2}}>{Array.from({length:player.maxHp}).map((_,i)=><span key={i} style={{fontSize:14,opacity:i<player.hp?1:0.18,filter:i<player.hp?"none":"grayscale(1)"}}>❤️</span>)}</div>
        <div style={{fontWeight:900,color:"#a040c0",fontSize:11}}>🪙{coinsLeft} rest</div>
        <div style={{fontWeight:900,color:"#d94da0",fontSize:12}}>⭐{score}</div>
      </div>
      {/* VIEWPORT */}
      <div style={{width:VIEW_W,height:VIEW_H,overflow:"hidden",borderRadius:16,border:`3px solid #ffb3e0`,position:"relative",margin:"0 auto",boxShadow:shake?"0 0 0 4px #f87171,0 4px 20px #ff85c840":"0 4px 20px #ff85c830",background:"#1a1a2e",transition:"box-shadow 0.1s"}}>
        <div style={{position:"absolute",left:-viewOfs.x,top:-viewOfs.y,width:MAP_W*TILE,height:MAP_H*TILE}}>
          {/* CHÃO — tiles xadrez */}
          {grid&&grid.map((row,r)=>row.map((cell,c)=>{
            if(cell===1){
              return <div key={`w${r}_${c}`} style={{position:"absolute",left:c*TILE,top:r*TILE,width:TILE,height:TILE,background:"linear-gradient(135deg,#6d28d9,#4c1d95)",boxShadow:"inset 0 2px 6px #0004",borderRadius:4}}/>;
            }
            const chk=(r+c)%2===0;
            return <div key={`f${r}_${c}`} style={{position:"absolute",left:c*TILE,top:r*TILE,width:TILE,height:TILE,background:chk?"#22184a":"#1e1644"}}/>;
          }))}
          {/* MOEDAS */}
          {coins.filter(c=>!c.collected).map(c=>(
            <div key={c.id} style={{position:"absolute",left:c.c*TILE+TILE/4,top:c.r*TILE+TILE/4,width:TILE/2,height:TILE/2,display:"flex",alignItems:"center",justifyContent:"center",fontSize:c.val>3?24:c.val>1?20:16,animation:"coinBob 1.1s ease-in-out infinite alternate",filter:"drop-shadow(0 2px 4px #ffd16660)"}}>
              {c.val>3?"💎":c.val>1?"🌟":"🪙"}
            </div>
          ))}
          {/* MONSTROS SVG */}
          {enemies.filter(e=>!e.dead).map(e=>{
            const sx=e.px-viewOfs.x+16,sy=e.py-viewOfs.y+50;
            const mSize=e.boss?60:e.wide?44:40;
            const offX=e.wide?mSize*0.7:mSize*0.5;
            const offY=mSize*0.5;
            return(
              <div key={e.id} onClick={()=>attackEnemy(e,sx,sy)}
                style={{position:"absolute",left:e.px-offX,top:e.py-offY,cursor:"pointer",userSelect:"none",
                  filter:e.hitFlash>0?"brightness(3)":frozen?"hue-rotate(180deg)":e.boss?"drop-shadow(0 0 12px #f97316)":"none",
                  transition:"filter 0.1s",zIndex:5}}>
                {/* HP BAR */}
                <div style={{position:"absolute",top:-14,left:"50%",transform:"translateX(-50%)",width:mSize*(e.boss?2:e.wide?1.4:1)*1.1,background:"#1a0a2e",borderRadius:5,height:7,overflow:"hidden",border:"1px solid #6d28d9"}}>
                  <div style={{height:"100%",width:`${(e.hp/e.maxHp)*100}%`,background:e.hp>e.maxHp*0.5?"#78d97b":e.hp>e.maxHp*0.25?"#fbbf24":"#ef4444",borderRadius:5,transition:"width 0.15s"}}/>
                </div>
                {e.boss&&<div style={{position:"absolute",top:-26,left:"50%",transform:"translateX(-50%)",fontSize:10,fontWeight:900,color:"#f97316",whiteSpace:"nowrap"}}>👑BOSS {e.name}</div>}
                <MonsterBody type={e.type} hp={e.hp} maxHp={e.maxHp} frozen={frozen} attacking={e.attacking} size={mSize}/>
              </div>
            );
          })}
          {/* PLAYER CHARACTER */}
          <div style={{position:"absolute",left:player.px-TILE*0.85,top:player.py-TILE*1.9,zIndex:10,
            filter:playerHurt?"brightness(3) saturate(0)":speedBoost?"drop-shadow(0 0 10px #ffd166)":doubleActive?"drop-shadow(0 0 10px #10b981)":"drop-shadow(0 2px 6px #ff85c850)",
            opacity:playerHurt?0.6:1,transition:"filter 0.1s,opacity 0.1s"}}>
            <CharBody charId={equippedChar?.id} anim={playerAnim} size={TILE*1.7}/>
          </div>
        </div>
        {/* STATUS BADGES */}
        <div style={{position:"absolute",top:6,left:6,display:"flex",gap:4,flexWrap:"wrap",zIndex:20}}>
          {frozen&&<span style={{background:"#bfdbfe",color:"#1d4ed8",fontWeight:800,fontSize:9,padding:"2px 7px",borderRadius:7}}>❄️FREEZE</span>}
          {speedBoost&&<span style={{background:"#fef08a",color:"#92400e",fontWeight:800,fontSize:9,padding:"2px 7px",borderRadius:7}}>⚡SPEED</span>}
          {doubleActive&&<span style={{background:"#a7f3d0",color:"#065f46",fontWeight:800,fontSize:9,padding:"2px 7px",borderRadius:7}}>💎2x</span>}
        </div>
        {/* MINIMAP */}
        {grid&&<div style={{position:"absolute",bottom:7,right:7,width:MM_W,height:MM_H,background:"#0a051a",border:"2px solid #6d28d9",borderRadius:8,overflow:"hidden",opacity:.85,zIndex:20}}>
          {grid.map((row,r)=>row.map((cell,c)=>cell===1?<div key={`mm${r}${c}`} style={{position:"absolute",left:c*(MM_W/MAP_W),top:r*(MM_H/MAP_H),width:MM_W/MAP_W+.5,height:MM_H/MAP_H+.5,background:"#6d28d9"}}/>:null))}
          {coins.filter(c=>!c.collected).map(c=><div key={c.id} style={{position:"absolute",left:c.c*(MM_W/MAP_W),top:c.r*(MM_H/MAP_H),width:3,height:3,background:"#ffd166",borderRadius:"50%"}}/>)}
          {enemies.filter(e=>!e.dead).map(e=><div key={e.id} style={{position:"absolute",left:(e.px/TILE)*(MM_W/MAP_W),top:(e.py/TILE)*(MM_H/MAP_H),width:e.boss?6:4,height:e.boss?6:4,background:e.col,borderRadius:"50%"}}/>)}
          <div style={{position:"absolute",left:(player.px/TILE)*(MM_W/MAP_W)-4,top:(player.py/TILE)*(MM_H/MAP_H)-4,width:8,height:8,background:"#ff85c8",borderRadius:"50%",border:"2px solid white"}}/>
        </div>}
      </div>
      {/* CONTROLES */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:10,padding:"0 4px"}}>
        <Joystick onChange={v=>joyRef.current=v}/>
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4}}>
          <button onClick={usePower} disabled={powerCd>0}
            style={{width:72,height:72,borderRadius:"50%",border:"none",cursor:powerCd>0?"not-allowed":"pointer",background:powerCd>0?"#e0d0e8":"linear-gradient(135deg,#ff85c8,#cc80ff)",color:powerCd>0?"#b090b0":"#fff",fontWeight:900,fontSize:11,boxShadow:powerCd>0?"none":"0 4px 18px #ff85c860",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:1}}>
            <span style={{fontSize:26}}>{powerIcon}</span>
            <span style={{fontSize:10}}>{powerCd>0?`${powerCd}s`:"PODER!"}</span>
          </button>
          <div style={{fontSize:9,color:"#c060a0",fontWeight:700,textAlign:"center",maxWidth:80}}>{equippedChar?.power?.name}</div>
        </div>
      </div>
      <style>{`
        @keyframes coinBob{from{transform:translateY(0)scale(1)}to{transform:translateY(-6px)scale(1.12)}}
        @keyframes wvIn{from{opacity:0;transform:translate(-50%,-50%)scale(.6)}to{opacity:1;transform:translate(-50%,-50%)scale(1)}}
      `}</style>
    </div>
  );
}


// ══════════════════════════════════════════════════════════════
//  MAIN APP
// ══════════════════════════════════════════════════════════════
const MISSIONS=[
  {id:"m1",name:"Primeira Magia ✨",desc:"Clique 10x na esfera",     target:10, xp:50,  coins:20,  type:"clicks",done:false},
  {id:"m2",name:"Colecionadora 🎀", desc:"Compre um item",           target:1,  xp:80,  coins:40,  type:"buys",  done:false},
  {id:"m3",name:"Exploradora 🗺️",   desc:"Colete 30 moedas no mapa", target:30, xp:120, coins:60,  type:"mcoins",done:false},
  {id:"m4",name:"Caçadora 💀",      desc:"Derrote 15 inimigos",      target:15, xp:150, coins:80,  type:"kills", done:false},
  {id:"m5",name:"Guardiã ⭐",       desc:"Alcance nível 5",           target:5,  xp:250, coins:120, type:"level", done:false},
  {id:"m6",name:"Campeã 🏆",        desc:"Complete 5 mapas",          target:5,  xp:400, coins:200, type:"maps",  done:false},
];

export default function StarGirlGame(){
  const [tab,setTab]=useState("home");
  const [xp,setXp]=useState(0);
  const [coins,setCoins]=useState(200);
  const [inventory,setInventory]=useState(["c1"]);
  const [equipped,setEquipped]=useState("c1");
  const [missions,setMissions]=useState(MISSIONS);
  const [clickCount,setClickCount]=useState(0);
  const [shopBuys,setShopBuys]=useState(0);
  const [mapCoins,setMapCoins]=useState(0);
  const [mapKills,setMapKills]=useState(0);
  const [mapsCleared,setMapsCleared]=useState(0);
  const [particles,setParticles]=useState([]);
  const [orbPulse,setOrbPulse]=useState(false);
  const [toast,setToast]=useState(null);
  const [shopCat,setShopCat]=useState("char");
  const [prevLevel,setPrevLevel]=useState(1);
  const [levelEvt,setLevelEvt]=useState(null);
  const [orbAnim,setOrbAnim]=useState("idle");
  const pid=useRef(0);

  const level=getLevel(xp);
  const prog=xpForNext(xp);
  const equippedChar=CHARACTERS.find(c=>c.id===equipped)||CHARACTERS[0];

  useEffect(()=>{
    if(level>prevLevel){setPrevLevel(level);
      if(LEVEL_EVENTS[level]){setLevelEvt(LEVEL_EVENTS[level]);setTimeout(()=>setLevelEvt(null),4000);}
      else{showToast(`🌟 NÍVEL ${level}! +${level*10}🪙`,"#ffd166");setCoins(c=>c+level*10);}
    }
  },[level]);

  useEffect(()=>{
    setMissions(ms=>ms.map(m=>{
      if(m.done)return m;let p=0;
      if(m.type==="clicks")p=Math.min(clickCount,m.target);
      if(m.type==="buys")p=Math.min(shopBuys,m.target);
      if(m.type==="mcoins")p=Math.min(mapCoins,m.target);
      if(m.type==="kills")p=Math.min(mapKills,m.target);
      if(m.type==="level")p=Math.min(level,m.target);
      if(m.type==="maps")p=Math.min(mapsCleared,m.target);
      return{...m,progress:p};
    }));
  },[clickCount,shopBuys,mapCoins,mapKills,level,mapsCleared]);

  const showToast=(msg,color="#ff85c8")=>{setToast({msg,color});setTimeout(()=>setToast(null),2500);};

  const handleOrbClick=e=>{
    const bonus=1+(equippedChar?.xpBonus||0)/100;
    setXp(x=>x+Math.round(10*bonus));setClickCount(c=>c+1);
    setOrbPulse(true);setOrbAnim("walk");
    setTimeout(()=>{setOrbPulse(false);setOrbAnim("idle");},500);
    const rect=e.currentTarget.getBoundingClientRect();
    const cx=rect.left+rect.width/2,cy=rect.top+rect.height/2;
    setParticles(p=>[...p,...Array.from({length:8},()=>({id:++pid.current,x:cx+(Math.random()-0.5)*80,y:cy+(Math.random()-0.5)*80}))]);
  };

  const handleMapEarn=useCallback((xpGain,coinGain)=>{
    if(xpGain>0)setXp(x=>x+xpGain);
    if(coinGain>0){setCoins(c=>c+coinGain);setMapCoins(m=>m+coinGain);}
    setMapKills(k=>k+1);
  },[]);

  const claimMission=mid=>{
    setMissions(ms=>ms.map(m=>{if(m.id!==mid||m.done)return m;setXp(x=>x+m.xp);setCoins(c=>c+m.coins);showToast(`🎉 +${m.xp}XP 🪙${m.coins}`);return{...m,done:true};}));
  };

  const buyItem=item=>{
    if(coins<item.price){showToast("💸 Moedas insuficientes!","#f87171");return;}
    if(inventory.includes(item.id)){showToast("Já tem! ✨");return;}
    setCoins(c=>c-item.price);setInventory(i=>[...i,item.id]);setShopBuys(b=>b+1);
    showToast(`🛍️ ${item.name} comprado!`,"#a78bfa");
  };

  const equipChar=char=>{
    if(!inventory.includes(char.id)){showToast("Desbloqueie primeiro!","#f87171");return;}
    setEquipped(char.id);showToast(`💖 ${char.name} equipada!`);
  };

  const pct=Math.min(100,(prog.current/prog.needed)*100);

  const css=`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
    *{box-sizing:border-box;margin:0;padding:0;}
    body{font-family:'Nunito',sans-serif;background:#fff0f7;}
    .gr{min-height:100vh;background:linear-gradient(135deg,#ffe4f3 0%,#f8d7ff 40%,#dbeeff 100%);font-family:'Nunito',sans-serif;display:flex;flex-direction:column;align-items:center;padding-bottom:100px;}
    .hdr{width:100%;max-width:520px;background:linear-gradient(90deg,#ff85c8,#cc80ff,#85c8ff);border-radius:0 0 24px 24px;padding:14px 18px 12px;display:flex;flex-direction:column;gap:7px;box-shadow:0 4px 24px #ff85c830;}
    .ht{display:flex;justify-content:space-between;align-items:center;}
    .htit{font-size:21px;font-weight:900;color:#fff;letter-spacing:1px;text-shadow:0 2px 8px #ff69b450;}
    .cb2{background:#fff3;border-radius:18px;padding:5px 14px;color:#fff;font-weight:800;font-size:14px;}
    .lr{display:flex;align-items:center;gap:8px;}
    .lb{background:#fff;color:#ff69b4;border-radius:13px;padding:3px 12px;font-weight:900;font-size:13px;flex-shrink:0;}
    .xbg{flex:1;background:#fff4;border-radius:9px;height:11px;overflow:hidden;}
    .xfi{height:100%;background:linear-gradient(90deg,#fff,#ffd6f0);border-radius:9px;transition:width .5s;}
    .xlb{font-size:10px;color:#fff;font-weight:700;}
    .nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:520px;background:linear-gradient(90deg,#ffe4f3,#f3d8ff);border-radius:24px 24px 0 0;display:flex;justify-content:space-around;padding:8px 4px 16px;box-shadow:0 -4px 24px #ff85c840;z-index:100;}
    .nb{display:flex;flex-direction:column;align-items:center;gap:2px;background:none;border:none;cursor:pointer;padding:6px 8px;border-radius:14px;transition:all .2s;}
    .nb.active{background:linear-gradient(135deg,#ff85c8,#cc80ff);box-shadow:0 4px 12px #ff85c840;}
    .nb .ni{font-size:19px;}.nb .nl{font-size:10px;font-weight:700;color:#b05090;}
    .nb.active .nl{color:#fff;}
    .cnt{width:100%;max-width:520px;padding:14px 13px;}
    .st{font-size:15px;font-weight:900;color:#d94da0;margin-bottom:9px;}
    .srow{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px;}
    .sc2{background:#fff;border-radius:15px;padding:10px 6px;text-align:center;box-shadow:0 2px 10px #ff85c820;}
    .mc2{background:#fff;border-radius:15px;padding:11px;margin-bottom:8px;box-shadow:0 2px 10px #ff85c820;display:flex;flex-direction:column;gap:6px;}
    .mh2{display:flex;justify-content:space-between;align-items:center;}
    .mn2{font-size:13px;font-weight:800;color:#c060a0;}.mr2{font-size:11px;color:#a060c0;font-weight:700;}.md2{font-size:11px;color:#b090b0;}
    .mbb{background:#ffe4f3;border-radius:7px;height:7px;overflow:hidden;}
    .mbf{height:100%;background:linear-gradient(90deg,#ff85c8,#cc80ff);border-radius:7px;transition:width .4s;}
    .cbt{background:linear-gradient(90deg,#ff85c8,#cc80ff);color:#fff;border:none;border-radius:10px;padding:5px 14px;font-size:12px;font-weight:800;cursor:pointer;align-self:flex-end;}
    .toast{position:fixed;top:76px;left:50%;transform:translateX(-50%);padding:10px 22px;border-radius:17px;color:#fff;font-size:13px;font-weight:800;z-index:9998;box-shadow:0 4px 18px #00000025;animation:tIn .3s ease;white-space:nowrap;}
    @keyframes tIn{from{opacity:0;transform:translateX(-50%)translateY(-10px)}to{opacity:1;transform:translateX(-50%)translateY(0)}}
    ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background:#ffb3e0;border-radius:4px;}
  `;

  return(
    <div className="gr">
      <style>{css}</style>
      {particles.map(p=><Particle key={p.id} x={p.x} y={p.y} onDone={()=>setParticles(ps=>ps.filter(pp=>pp.id!==p.id))}/>)}
      {toast&&<div className="toast" style={{background:toast.color}}>{toast.msg}</div>}
      {levelEvt&&<div style={{position:"fixed",top:"40%",left:"50%",transform:"translate(-50%,-50%)",zIndex:9000,background:"linear-gradient(90deg,#ff85c8,#ffd166,#cc80ff)",color:"#fff",fontWeight:900,fontSize:17,padding:"18px 28px",borderRadius:22,boxShadow:"0 8px 40px #ff85c870",textAlign:"center",maxWidth:290,animation:"wvIn .4s ease"}}><div>{levelEvt.title}</div><div style={{fontSize:12,fontWeight:700,marginTop:6}}>{levelEvt.desc}</div></div>}

      <div className="hdr">
        <div className="ht"><span className="htit">💖 Star Girl ✨</span><span className="cb2">🪙 {coins}</span></div>
        <div className="lr"><span className="lb">⭐ Nv.{level}</span><div className="xbg"><div className="xfi" style={{width:`${pct}%`}}/></div><span className="xlb">{prog.current}/{prog.needed}</span></div>
      </div>

      <div className="cnt">
        {/* HOME */}
        {tab==="home"&&(
          <>
            <div style={{textAlign:"center",margin:"4px 0 10px"}}>
              <div style={{cursor:"pointer",display:"inline-block",filter:orbPulse?"drop-shadow(0 0 22px #ff85c8)":"drop-shadow(0 4px 14px #ff85c830)",transition:"filter .2s"}} onClick={handleOrbClick}>
                <CharBody charId={equipped} anim={orbAnim} size={130}/>
              </div>
              <div style={{fontSize:16,fontWeight:900,color:"#d94da0",marginTop:4}}>{equippedChar?.name}</div>
              <span style={{fontSize:10,fontWeight:700,padding:"2px 9px",borderRadius:9,background:(rarityCol[equippedChar?.rarity]||"#aaa")+"30",color:rarityCol[equippedChar?.rarity]||"#aaa",display:"inline-block",marginTop:3}}>{equippedChar?.rarity?.toUpperCase()}</span>
              {equippedChar?.power&&<div style={{background:"linear-gradient(135deg,#fff0f7,#f3d8ff)",borderRadius:11,padding:"7px 11px",margin:"8px auto 0",maxWidth:260,border:"2px solid #ffb3e0"}}>
                <div style={{fontSize:12,fontWeight:900,color:"#9040b0"}}>⚡ {equippedChar.power.name}</div>
                <div style={{fontSize:11,color:"#b070b0"}}>{equippedChar.power.desc}</div>
              </div>}
              <div style={{fontSize:11,color:"#c070a0",fontWeight:600,marginTop:5}}>Toque para ganhar XP! ✨</div>
            </div>

            <div className="srow">
              <div className="sc2"><div style={{fontSize:20}}>⭐</div><div style={{fontSize:17,fontWeight:900,color:"#d94da0"}}>{level}</div><div style={{fontSize:10,color:"#c070a0",fontWeight:600}}>Nível</div></div>
              <div className="sc2"><div style={{fontSize:20}}>✨</div><div style={{fontSize:17,fontWeight:900,color:"#d94da0"}}>{xp}</div><div style={{fontSize:10,color:"#c070a0",fontWeight:600}}>XP Total</div></div>
              <div className="sc2"><div style={{fontSize:20}}>💀</div><div style={{fontSize:17,fontWeight:900,color:"#d94da0"}}>{mapKills}</div><div style={{fontSize:10,color:"#c070a0",fontWeight:600}}>Derrotas</div></div>
            </div>

            <div className="st">🎯 Missões</div>
            {missions.slice(0,4).map(m=>{const pr=m.progress??0,pc=Math.min(100,(pr/m.target)*100),ok=pr>=m.target&&!m.done;return(
              <div className="mc2" key={m.id}>
                <div className="mh2"><span className="mn2">{m.name}</span><span className="mr2">+{m.xp}xp 🪙{m.coins}</span></div>
                <div className="md2">{m.desc}</div>
                <div className="mbb"><div className="mbf" style={{width:`${pc}%`}}/></div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:11,color:"#c070a0",fontWeight:700}}>{pr}/{m.target}</span>
                  {m.done?<span style={{fontSize:11,color:"#78d97b",fontWeight:800}}>✅</span>:ok?<button className="cbt" onClick={()=>claimMission(m.id)}>Resgatar 🎁</button>:null}
                </div>
              </div>
            );})}
          </>
        )}

        {/* MAP */}
        {tab==="map"&&(
          <>
            <div className="st">🗺️ Aventura</div>
            <MapGame equippedChar={equippedChar} onEarn={handleMapEarn}/>
          </>
        )}

        {/* SHOP */}
        {tab==="shop"&&(
          <>
            <div className="st">🛍️ Loja Mágica</div>
            <div style={{display:"flex",gap:7,marginBottom:11}}>
              {[["char","👸 Personagens"],["item","✨ Itens"]].map(([k,l])=>(
                <button key={k} onClick={()=>setShopCat(k)} style={{padding:"6px 14px",borderRadius:18,border:`2px solid ${shopCat===k?"transparent":"#ffb3e0"}`,background:shopCat===k?"linear-gradient(90deg,#ff85c8,#cc80ff)":"#fff",color:shopCat===k?"#fff":"#c060a0",fontSize:13,fontWeight:800,cursor:"pointer"}}>{l}</button>
              ))}
            </div>
            {shopCat==="char"&&(
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                {CHARACTERS.map(char=>{
                  const isOwned=inventory.includes(char.id);
                  const isEq=equipped===char.id;
                  const canBuy=!isOwned&&coins>=char.price;
                  return(
                    <div key={char.id} style={{background:"#fff",borderRadius:20,padding:14,boxShadow:"0 2px 14px #ff85c820",display:"flex",gap:12,alignItems:"center",position:"relative",overflow:"hidden",border:isEq?`2px solid ${char.color}`:"2px solid transparent"}}>
                      <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:rarityCol[char.rarity]}}/>
                      <div style={{flexShrink:0,width:88,display:"flex",justifyContent:"center"}}>
                        <CharBody charId={char.id} anim="idle" size={88}/>
                      </div>
                      <div style={{flex:1,minWidth:0}}>
                        <div style={{fontSize:15,fontWeight:900,color:"#c060a0"}}>{char.name}</div>
                        <span style={{fontSize:9,fontWeight:800,padding:"1px 7px",borderRadius:7,background:rarityCol[char.rarity],color:"#fff",display:"inline-block",marginBottom:3}}>{char.rarity}</span>
                        <div style={{fontSize:11,color:"#b090b0",marginBottom:4}}>{char.desc}</div>
                        <div style={{fontSize:10,color:"#9040b0",fontWeight:700,background:"#f3d8ff",borderRadius:7,padding:"2px 7px",display:"inline-block",marginBottom:5}}>⚡ {char.power.name} — {char.power.desc}</div>
                        {char.xpBonus>0&&<div style={{fontSize:10,color:"#a060c0",fontWeight:700}}>+{char.xpBonus}% XP</div>}
                        <div style={{display:"flex",alignItems:"center",gap:8,marginTop:6}}>
                          {!isOwned&&<span style={{fontSize:13,fontWeight:900,color:"#d94da0"}}>🪙 {char.price}</span>}
                          <button onClick={()=>isOwned?equipChar(char):buyItem({...char,type:"char"})}
                            style={{padding:"6px 14px",borderRadius:11,border:"none",fontSize:12,fontWeight:800,cursor:(!isOwned&&!canBuy)?"not-allowed":"pointer",
                              background:isEq?"linear-gradient(90deg,#c8f7d0,#a8eef0)":isOwned?"linear-gradient(90deg,#ffd6a5,#ffb3c6)":canBuy?"linear-gradient(90deg,#ff85c8,#cc80ff)":"#f0e0e8",
                              color:isEq?"#30a060":isOwned?"#b05020":canBuy?"#fff":"#c0a0b0"}}>
                            {isEq?"✅ Equipada":isOwned?"💫 Equipar":canBuy?"🛍️ Comprar":"💸 Sem moedas"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {shopCat==="item"&&(
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:11}}>
                {SHOP_ITEMS.map(item=>{
                  const isOwned=inventory.includes(item.id);
                  const canBuy=!isOwned&&coins>=item.price;
                  return(
                    <div key={item.id} style={{background:"#fff",borderRadius:18,padding:12,boxShadow:"0 2px 12px #ff85c820",display:"flex",flexDirection:"column",gap:5,position:"relative",overflow:"hidden"}}>
                      <div style={{position:"absolute",top:0,left:0,right:0,height:4,background:rarityCol[item.rarity]}}/>
                      <div style={{fontSize:38,textAlign:"center"}}>{item.emoji}</div>
                      <div style={{fontSize:12,fontWeight:800,color:"#c060a0",textAlign:"center"}}>{item.name}</div>
                      <div style={{fontSize:10,color:"#b090b0",textAlign:"center"}}>{item.desc}</div>
                      <span style={{fontSize:9,fontWeight:800,padding:"2px 7px",borderRadius:7,background:rarityCol[item.rarity],color:"#fff",alignSelf:"center"}}>{item.rarity}</span>
                      {!isOwned&&<div style={{fontSize:13,fontWeight:900,color:"#d94da0",textAlign:"center"}}>🪙 {item.price}</div>}
                      <button onClick={()=>buyItem(item)} style={{width:"100%",padding:"7px",borderRadius:10,border:"none",fontSize:11,fontWeight:800,cursor:isOwned||!canBuy?"not-allowed":"pointer",background:isOwned?"linear-gradient(90deg,#c8f7d0,#a8eef0)":canBuy?"linear-gradient(90deg,#ff85c8,#cc80ff)":"#f0e0e8",color:isOwned?"#30a060":canBuy?"#fff":"#c0a0b0"}}>
                        {isOwned?"✅ Tenho":canBuy?"🛍️ Comprar":"💸 Sem moedas"}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* MISSIONS */}
        {tab==="missions"&&(
          <>
            <div className="st">🎯 Missões</div>
            {missions.map(m=>{const pr=m.progress??0,pc=Math.min(100,(pr/m.target)*100),ok=pr>=m.target&&!m.done;return(
              <div className="mc2" key={m.id}>
                <div className="mh2"><span className="mn2">{m.name}</span><span className="mr2">+{m.xp}xp 🪙{m.coins}</span></div>
                <div className="md2">{m.desc}</div>
                <div className="mbb"><div className="mbf" style={{width:`${pc}%`}}/></div>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                  <span style={{fontSize:11,color:"#c070a0",fontWeight:700}}>{pr}/{m.target}</span>
                  {m.done?<span style={{fontSize:11,color:"#78d97b",fontWeight:800}}>✅</span>:ok?<button className="cbt" onClick={()=>claimMission(m.id)}>Resgatar 🎁</button>:null}
                </div>
              </div>
            );})}
          </>
        )}
      </div>

      <nav className="nav">
        {[["home","🏠","Início"],["map","🗺️","Aventura"],["shop","🛍️","Loja"],["missions","🎯","Missões"]].map(([k,ic,lb])=>(
          <button key={k} className={`nb${tab===k?" active":""}`} onClick={()=>setTab(k)}>
            <span className="ni">{ic}</span><span className="nl">{lb}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
