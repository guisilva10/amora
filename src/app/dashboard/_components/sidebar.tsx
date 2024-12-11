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
  SettingsIcon,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { UserDropdown } from "./userdropdown";

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
            <DashboardSidebarNavLink
              href="/dashboard"
              active={isActive("/dashboard")}
            >
              <HomeIcon className="mr-3 size-4 text-primary" />
              Criar
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/overview"
              active={isActive("/dashboard/overview")}
            >
              <FolderClosedIcon className="mr-3 size-4 text-primary" />
              Visualizar
            </DashboardSidebarNavLink>
            <DashboardSidebarNavLink
              href="/dashboard/settings"
              active={isActive("/dashboard/settings")}
            >
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
        <UserDropdown />
      </DashboardSidebarFooter>
    </DashboardSidebar>
  );
};

export default MainSidebar;
