const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  console.log("-----------> before detox.init")
  try {
    await detox.init(config)
  } catch (e) {
    console.log(e)
  }
  console.log("-----------> after detox.init")
});

after(async () => {
  await detox.cleanup();
});
