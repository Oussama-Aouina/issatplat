import Professors from "@/components/Dashboard/Professors";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const ProfessorsPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Professors />
    </DefaultLayout>
  );
};

export default ProfessorsPage;
