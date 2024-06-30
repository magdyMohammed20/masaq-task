import Alert from "@/components/alert/Alert";
import DashboardCard from "@/components/dashboardCard/DashboardCard";
import GroupImages from "@/components/groupImages/GroupImages";
import Heading from "@/components/heading/Heading";
import Search from "@/components/search/Search";

const Hero = () => {
  return (
    <section className="bg-herobg">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
        <Alert />
        <Heading />
        <Search />
        <GroupImages />
        <DashboardCard />
      </div>
    </section>
  );
};

export default Hero;
