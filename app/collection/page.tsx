import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CollectionStats } from "@/components/dashboard/collection-stats";
import { CollectionDetails } from "@/components/dashboard/collection-details";
import { CollectionGallery } from "@/components/dashboard/collection-gallery";
import { StorageLocations } from "@/components/dashboard/storage-locations";

export default function CollectionDashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="コレクション管理"
        description="あなたのコレクションの概要と詳細情報"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CollectionStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="lg:col-span-4">
          <CollectionDetails />
        </div>
        <div className="lg:col-span-3">
          <StorageLocations />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <CollectionGallery />
      </div>
    </DashboardShell>
  );
}