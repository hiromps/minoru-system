import { CollectionDetails } from "@/components/dashboard/collection-details";

export default function ItemsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">コレクションアイテム一覧</h1>
      <CollectionDetails />
    </main>
  );
}