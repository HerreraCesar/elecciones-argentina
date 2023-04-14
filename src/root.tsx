import {
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Scripts,
  Title,
  Link,
} from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Routes } from "solid-start";
import { Suspense } from "solid-js";
import { TransProvider } from "@mbarzda/solid-i18next";
import "./index.scss";
import es from "./locales/es";
import en from "./locales/en";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Elegir</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        />
      </Head>

      <Body>
        <Suspense>
          <ErrorBoundary>
            <TransProvider
              options={{
                resources: {
                  en: { translation: en },
                  es: { translation: es },
                },
                lng: "en",
              }}
            >
              <Routes>
                <FileRoutes />
              </Routes>
            </TransProvider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
