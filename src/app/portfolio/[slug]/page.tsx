import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioDetail } from "@/components/PortfolioDetail";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);

  return {
    title: item
      ? `${item.title} — Portfolio — Pratala Rerupa`
      : "Portfolio — Pratala Rerupa",
    description: item?.shortDescription ?? "",
    openGraph: {
      title: item
        ? `${item.title} — Portfolio — Pratala Rerupa`
        : "Portfolio — Pratala Rerupa",
      description: item?.shortDescription ?? "",
      type: "website",
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) notFound();
  return <PortfolioDetail slug={slug} />;
}
