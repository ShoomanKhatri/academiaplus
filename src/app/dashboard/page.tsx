import Layout from '@/components/Layout';

export default function DashboardPage() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Students Card */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Students</h3>
          <p className="text-4xl font-bold">120</p>
        </div>

        {/* Total Teachers Card */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Total Teachers</h3>
          <p className="text-4xl font-bold">15</p>
        </div>

        {/* Classes Today Card */}
        <div className="bg-white p-6 shadow rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Classes Today</h3>
          <p className="text-4xl font-bold">8</p>
        </div>
      </div>
    </Layout>
  );
}
