import Boosting from "./Boosting";
import Collaporation from "./Collaporation";
import SimpleAnalytics from "./SimpleAnalytics";

const Analytics = () => {
  return (
    <div className="grid grid-cols-4 gap-6">
      <SimpleAnalytics />
      <Boosting />
      <Collaporation />
    </div>
  );
};

export default Analytics;
