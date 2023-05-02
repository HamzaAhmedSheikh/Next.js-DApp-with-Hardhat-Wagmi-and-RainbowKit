# Sample Hardhat Typescript Project

[We will follow this typescript support page](https://hardhat.org/hardhat-runner/docs/guides/typescript)

Create a Project Directory

Copy the files from step00_hardhat

Enabling TypeScript support

Hardhat will automatically enable its TypeScript support if your config file ends in **.ts** and is written in valid TypeScript.

**rename all your files .js to .ts including the hardhat.config.js file** 

You need to make a single change to your config for it to work with TypeScript: you must use import/export instead of require/module.exports

For example, the sample project's config turns from this:

```shell
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
};
```

into this:

```shell
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
```

Finally, you need to create a tsconfig.json file. Here's our recommended one:

```shell
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true
  }
}
```

[Type-checking your project](https://hardhat.org/hardhat-runner/docs/guides/typescript#type-checking-your-project)

Writing tests and scripts in TypeScript

When using JavaScript, all the properties in the Hardhat Runtime Environment are injected into the global scope. When using TypeScript nothing will be available in the global scope and you will need to import everything explicitly using, for example, import { ethers } from "hardhat"

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/sample-script.js
```