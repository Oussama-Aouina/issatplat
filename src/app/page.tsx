import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Issat Sousse | Plateforme",
  description: "This is a plateforme for Issat Sousse",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />{" "}
      </DefaultLayout>
    </>
  );
}
