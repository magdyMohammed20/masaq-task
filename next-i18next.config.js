const HttpBackend = require("i18next-http-backend/cjs");
const MultiLoadBackendAdapter = require("i18next-multiload-backend-adapter/cjs");
const { axios } = require("./lib/axios");

module.exports = {
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar"
  },
  maxParallelReads: 30,
  serializeConfig: false,
  reloadOnPrerender: true,
  use: [MultiLoadBackendAdapter],
  backend: {
    backend: HttpBackend,
    backendOption: {
      loadPath: "{{lng}}|{{ns}}",
      request: async (options, url, payload, callback) => {
        try {
          const [lng, ns] = url.split("|");

          await axios
            .get("http://localhost:3000/api/translations", {
              params: {
                ns,
                lng
              }
            })
            .then((response) => {
              callback(null, {
                data: response.data.data,
                status: 200
              });
            })
            .catch((error) => {
              // eslint-disable-next-line no-console
              console.log("response error: ", error?.response?.data ?? error?.message ?? error);
              callback(null, {
                status: 500
              });
            });
        } catch (e) {
          // eslint-disable-next-line no-console
          console.log("catch error: ", e);
          callback(null, {
            status: 500
          });
        }
      }
    }
  }
};
