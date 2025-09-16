import ExperienceCard from "./components/ExperienceCard";


export default function Home() {
  const cardsData = [
    {
      id: 1,
      title: "Card 1",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
    },
    {
      id: 2,
      title: "Card 2",
      imageDesktop:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_6lwbhg.png",
      imageMobile:
        "https://storage.crisp.chat/users/helpdesk/website/-/1/8/e/5/18e5ef9876c13600/image_vd8ili.png",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((c) => (
          <ExperienceCard key={c.id} {...c} />
        ))}
        <div className="p-4 bg-gray-200 rounded-lg shadow">Card 3</div>
      </div>
    </main>
  );
}
