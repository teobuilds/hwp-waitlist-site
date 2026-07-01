import Navbar from '@/components/Navbar';

const shirts = [
  {
    id: 1,
    name: 'HWP Classic Tee',
    price: '$35',
    description: 'Train with intention.',
    image: null,
  },
  {
    id: 2,
    name: 'HWP Logo Hoodie',
    price: '$65',
    description: 'Hoop With Prezence.',
    image: null,
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2" style={{ color: '#7B5EA7' }}>Shop</h1>
        <p className="text-center text-gray-400 mb-12">Rep the brand. Train with intention.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {shirts.map(shirt => (
            <div key={shirt.id} className="flex flex-col rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Product image placeholder */}
              <div className="bg-gray-100 aspect-square flex items-center justify-center">
                <span className="text-gray-400 text-sm">Product photo coming soon</span>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h2 className="text-lg font-bold text-gray-800">{shirt.name}</h2>
                <p className="text-gray-500 text-sm">{shirt.description}</p>
                <p className="font-bold text-gray-800">{shirt.price}</p>
                <button
                  className="mt-3 px-6 py-2 rounded-full border-2 font-semibold text-sm hover:opacity-80 transition-opacity"
                  style={{ borderColor: '#7B5EA7', color: '#7B5EA7' }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
