const core = require('@actions/core');
const vault = require('./src/install-vault.js');

(async () => {
    try {
        await vault();
    } catch (error) {
        core.setFailed(error.message);
    }
})();