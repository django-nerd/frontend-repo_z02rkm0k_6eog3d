import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import Row from './components/Row';
import Footer from './components/Footer';

const makeItems = (label, count = 12) =>
  Array.from({ length: count }).map((_, i) => ({
    title: `${label} #${i + 1}`,
    image: `https://picsum.photos/seed/${encodeURIComponent(label + '-' + (i + 1))}/800/450`,
  }));

function App() {
  const trending = makeItems('Trending');
  const topPicks = makeItems('Top Picks');
  const newReleases = makeItems('New Release');
  const recommended = makeItems('Recommended');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16 space-y-8">
        <HeroBanner />
        <div className="space-y-8">
          <Row title="Trending Now" items={trending} />
          <Row title="Top Picks For You" items={topPicks} />
          <Row title="New Releases" items={newReleases} />
          <Row title="Because you watched…" items={recommended} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
