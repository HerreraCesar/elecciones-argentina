import "./root.scss";

import {
  Body,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Scripts,
  Title,
} from "solid-start";

import { ApplicationProvider } from "./context/context";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Routes } from "solid-start";
import { Suspense } from "solid-js";

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
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        />
      </Head>
      <ApplicationProvider>
        <Body>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
          <Scripts />
        </Body>
      </ApplicationProvider>
    </Html>
  );
}
