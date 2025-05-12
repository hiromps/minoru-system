export default function OrdersPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">受注・在庫管理</h1>
      <div>ここに受注や在庫のダミーデータを表示します。</div>
      <ul className="mt-4 list-disc list-inside">
        <li>受注ID: 001 | 顧客: 田中太郎 | 状態: 処理中</li>
        <li>受注ID: 002 | 顧客: 鈴木花子 | 状態: 完了</li>
        <li>在庫ID: A-01 | 商品: サンプル商品A | 数量: 12</li>
      </ul>
    </main>
  );
}