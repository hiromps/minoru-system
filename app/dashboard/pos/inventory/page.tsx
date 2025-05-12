export default function ManufacturingOrdersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">製造業向け受注管理</h1>
      <div>ここに製造業の受注ダミーデータを表示します。</div>
      <ul className="mt-4 list-disc list-inside">
        <li>受注ID: M-1001 | 顧客: 株式会社A | 状態: 生産中</li>
        <li>受注ID: M-1002 | 顧客: 株式会社B | 状態: 出荷待ち</li>
      </ul>
    </main>
  );
}