// _cowork_check.js — Claude Code "UserPromptSubmit" hook'as.
// Tikslas: IR "Code", IR "Cowork" sesija VISADA mato vienas kito naujausią
// žinutę — be jokio raginimo. Įdiegus GLOBALIAI (~/.claude/settings.json
// "hooks") veikia VISOSE Claude Code sesijose šioje mašinoje.
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
