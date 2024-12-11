import {
  DashboardPage,
  DashboardPageHeader,
  DashboardPageHeaderTitle,
} from "@/app/_components/dashboard/page";

export default async function Layout() {
  return (
    <DashboardPage>
      <DashboardPageHeader>
        <DashboardPageHeaderTitle>Overview</DashboardPageHeaderTitle>
      </DashboardPageHeader>
    </DashboardPage>
  );
}
