import { works } from "@/constants";
import WorksList from "@/components/lists/WorksList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const PortfolioSection = () => {
  return (
    <section>
      <h2 className="h2-title">My works</h2>

      <Tabs defaultValue="all" className="mt-5 w-full">
        <TabsList variant="works">
          <TabsTrigger value="all">all</TabsTrigger>
          <TabsTrigger value="reels">reels</TabsTrigger>
          <TabsTrigger value="video">video</TabsTrigger>
          <TabsTrigger value="intro">intro</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <WorksList data={works} />
        </TabsContent>

        <TabsContent value="reels">Change your reels here.</TabsContent>

        <TabsContent value="video">
          <WorksList data={works.filter((work) => work.type === "video")} />
        </TabsContent>

        <TabsContent value="intro">
          <WorksList data={works.filter((work) => work.type === "intro")} />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default PortfolioSection;
