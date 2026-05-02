import { servicesData, getServiceBySlug } from "@/src/lib/services-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageClient from "./client";

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Services in Delhi | Craft Media Hub`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return <ServicePageClient service={service} otherServices={otherServices} />;
}
