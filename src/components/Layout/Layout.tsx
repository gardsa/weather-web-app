import { AppShell, Container } from "@mantine/core";
import { ReactNode } from "react";

import styles from "./Layout.module.css";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <AppShell
      header={{ height: 92 }}
      padding={{ base: 10, sm: 15, lg: 'xl' }}
    >
      <AppShell.Header>
        <h1 className={styles.heading}>Weather Web App</h1>
      </AppShell.Header>

      <AppShell.Main>
        <Container>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}