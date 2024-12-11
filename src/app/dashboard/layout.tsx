import { PropsWithChildren } from "react";
import MainSidebar from "./_components/sidebar";

export default async function Layout({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-cols-[14rem_1fr]">
      <MainSidebar />
      <main>{children}</main>
    </div>
  );
}
