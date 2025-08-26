import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// This sets up a Service Worker for the browser
export const worker = setupWorker(...handlers);
