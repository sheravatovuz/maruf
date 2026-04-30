import * as bcrypt from "https://esm.sh/bcryptjs@2.4.3";

async function main() {
  const hash = await bcrypt.hash("password", 10);
  console.log("hash", hash);
  const match = await bcrypt.compare("password", hash);
  console.log("match", match);
}

main();
