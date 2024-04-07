import env from "env-var";

export const config = {
  googleMapsApiKey: () => env.get("GOOGLE_MAPS_API_KEY").required().asString(),
  emailJs: () => ({
    service: env.get("EMAIL_JS_SERVICE").required().asString(),
    template: env.get("EMAIL_JS_TEMPLATE").required().asString(),
    options: env.get("EMAIL_JS_OPTIONS").required().asString(),
  }),
};
