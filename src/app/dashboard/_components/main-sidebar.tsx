"use client";

import {
  DashboardSidebar,
  DashboardSidebarFooter,
  DashboardSidebarHeader,
  DashboardSidebarMain,
  DashboardSidebarNav,
  DashboardSidebarNavHeader,
  DashboardSidebarNavHeaderTitle,
  DashboardSidebarNavLink,
  DashboardSidebarNavMain,
} from "@/app/_components/dashboard/sidebar";
import { Logo } from "@/app/_components/logo";
import {
  CircleHelp,
  FolderClosedIcon,
  HomeIcon,
  LogOut,
  SettingsIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MainSidebar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };
  return (
    <DashboardSidebar>
      <DashboardSidebarHeader>
        <Logo />
      </DashboardSidebarHeader>
      <DashboardSidebarMain className="flex flex-grow flex-col">
        <DashboardSidebarNav>
          <DashboardSidebarNavMain>
            <DashboardSidebarNavLink href="" active={isActive("/dashboard")}>
              <HomeIcon className="mr-3 size-4 text-primary" />
              Criar
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="" active={isActive("/chat")}>
              <FolderClosedIcon className="mr-3 size-4 text-primary" />
              Visualizar
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink href="" active={isActive("/settings")}>
              <SettingsIcon className="mr-3 size-4 text-primary" />
              Configurações
            </DashboardSidebarNavLink>
          </DashboardSidebarNavMain>
        </DashboardSidebarNav>
      </DashboardSidebarMain>

      <DashboardSidebarNav className="mt-auto">
        <DashboardSidebarNavHeader>
          <DashboardSidebarNavHeaderTitle>
            Extras Links
          </DashboardSidebarNavHeaderTitle>
        </DashboardSidebarNavHeader>
        <DashboardSidebarNavMain>
          <DashboardSidebarNavLink href="/">
            <CircleHelp className="mr-3 size-4 text-primary" />
            Suporte
          </DashboardSidebarNavLink>
        </DashboardSidebarNavMain>
      </DashboardSidebarNav>
      <DashboardSidebarFooter>
        <Link href="/" className="flex items-center">
          <LogOut className="mr-2 size-4" />
          Sair
        </Link>
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
};

export default MainSidebar;
