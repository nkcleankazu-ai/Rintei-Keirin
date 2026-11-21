
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    "https://dsdgocldcqkdznnoqqmf.supabase.co",
    "sb_publishable_HZ6mzfNFuNPWsnkMDSJzxA_XfCFwwph"
  );
}
