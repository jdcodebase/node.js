const bcrypt = require("bcrypt");

async function hashPassword() {
  const password = "123456";

  const hashedPassword = await bcrypt.hash(password, 10);

  const isMatch = await bcrypt.compare("12345", hashedPassword);
  console.log(isMatch);

  console.log(hashedPassword);
}

hashPassword();
