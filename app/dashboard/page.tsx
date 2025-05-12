"use client";

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardStats } from "@/components/dashboard/dashboard-stats";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { InventoryStatus } from "@/components/dashboard/inventory-status";
import { ProductionSchedule } from "@/components/dashboard/production-schedule";

export function AnimatedBox() {
  return (
    <motion.div animate={{ x: 100 }} />
  )
}
export default function DashboardPage() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="ダッシュボード"
        description="ビジネスパフォーマンスと主要指標の概要"
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>最近の注文</CardTitle>
            <CardDescription>
              最新の注文状況と進捗状況
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>在庫状況</CardTitle>
            <CardDescription>
              現在の在庫レベルと在庫不足アラート
            </CardDescription>
          </CardHeader>
          <CardContent>
            <InventoryStatus />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <Card>
          <CardHeader>
            <CardTitle>生産スケジュール</CardTitle>
            <CardDescription>
              今後の生産計画と設備稼働率
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ProductionSchedule />
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}