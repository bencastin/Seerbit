const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}
module.exports = defineConfig({
  watchForFileChanges: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  pageLoadTimeout: 70000,
  defaultCommandTimeout: 50000,
  env: {
    email: "bencastin@gmail.com",
    password: "Password@123",
  },
  videosFolder: "cypress/mochareports/videos",
  videoUploadOnPasses: false,
  screenshotsFolder: "cypress/mochareports/screenshots",
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporterOpts.json",
  },
  retries: {
    runMode: 2,
    openMode: 2,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl: "https://www.dashboard.seerbit.com/#/auth/login",
    specPattern: "**/*.feature",
    excludeSpecPattern: "*.js",
  },
});
