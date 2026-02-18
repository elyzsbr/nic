import { serveStatic } from "@cloudflare/kv-asset-handler";

export default {
  async fetch(request, env, ctx) {
    return await serveStatic(request, env.ASSETS);
  }
}
