import HomePage from "@/components/Home";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="w-full flex-center flex-col overflow-hidden">
      <HomePage />
    </section>
  );
};

export default Home;
