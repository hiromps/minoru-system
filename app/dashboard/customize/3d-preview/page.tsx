export default function ManufacturingInventoryPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">製造業向け在庫管理</h1>
      <div>ここに製造業の在庫ダミーデータを表示します。</div>
      <ul className="mt-4 list-disc list-inside">
        <li>在庫ID: MI-2001 | 商品: 部品A | 数量: 120</li>
        <li>在庫ID: MI-2002 | 商品: 部品B | 数量: 45</li>
      </ul>
    </main>
  );
}