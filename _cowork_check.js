// _cowork_check.js — Claude Code "UserPromptSubmit" hook'as.
// Tikslas: ir KODUOTOJAS (Claude Code), ir PLANUOTOJAS (Cowork aplinka) per
// bendrą repo mato vienas kito naujausią žinutę. Hook'as įsijungia CLAUDE CODE
// pusėje (globalus ~/.claude/settings.json, "hooks"); Cowork žinutes pasiima
// skaitydama repo failus. (Jei planuotojas irgi Claude Code — veikia abiejose.)
//
// SVARBU: du vienkrypčiai "paštai" turi gulėti ŠALIA šio skripto (tame
// pačiame kataloge):
//   COWORK_TO_CODE.md  — rašo cowork → skaito Code
//   CODE_TO_COWORK.md  — rašo Code  → skaito cowork
//
// Skriptas TYLUS, jei failų nėra; NIEKADA neblokuoja prompto (visada exit 0).

const fs = require("fs");
const path = require("path");

function newest(file, label) {
  try {
    const txt = fs.readFileSync(path.join(__dirname, file), "utf8");
    for (const l of txt.split(/\r?\n/)) {
      // Pirmas "## " antraštės blokas = naujausias įrašas (naujausia VIRŠUJE).
      // Praleidžiam tarnybinę "## Kaip dirbam" antraštę, jei tokia yra.
      if (/^##\s/.test(l) && !/Kaip dirbam/.test(l)) {
        return `${label}: ${l.replace(/^##\s*/, "").trim()}`;
      }
    }
  } catch (e) { /* failo nėra — tylim */ }
  return null;
}

const out = [];
const c = newest("COWORK_TO_CODE.md", "📥 cowork→Code (Code skaito šį)");
const d = newest("CODE_TO_COWORK.md", "📤 Code→cowork (cowork skaito šį)");
if (c) out.push(c);
if (d) out.push(d);

if (out.length) {
  process.stdout.write(
    "📬 Paštų naujausi įrašai — perskaityk SAVO gaunamą failą PRIEŠ darbą:\n" +
      out.join("\n") +
      "\n"
  );
}
process.exit(0);
