export const revalidate = 60; // 1 minute

import { getOgImageUrl } from "@/lib/ogImage";
import { Metadata } from "next";
import { config } from "../config";
import { CompanyHero } from "@/components/CompanyHero";
import { ProductGallery } from "@/components/ProductGallery";
import { CompanyInfo } from "@/components/CompanyInfo";
import { AboutCompany } from "@/components/AboutCompany";
import { CompanyResources } from "@/components/CompanyResources";
import { SmartMeterBenefits } from "@/components/SmartMeterBenefits";

const { title, description } = config;

export const metadata: Metadata = {
  title: title,
  description,
  openGraph: {
    title: title,
    description,
    images: [getOgImageUrl(title)],
  },
};

export default function Page() {
  return (
    <>
      <CompanyHero />
      <AboutCompany />
      <SmartMeterBenefits />
      <ProductGallery />
      <CompanyInfo />
      <CompanyResources />
    </>
  );
}
