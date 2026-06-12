import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  portfolioItems,
  getPortfolioByPreviewSlug,
} from "@/data/portfolio";
import { PortfolioLivePreview } from "@/components/PortfolioLivePreview";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.previewRoute.replace("/preview/", ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioByPreviewSlug(slug);

  return {
    title: item
      ? `${item.previewTitle} — Preview — Pratala Rerupa`
      : "Preview — Pratala Rerupa",
    description: item?.previewSubtitle ?? "",
    openGraph: {
      title: item
        ? `${item.previewTitle} — Preview — Pratala Rerupa`
        : "Preview — Pratala Rerupa",
      description: item?.previewSubtitle ?? "",
      type: "website",
    },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioByPreviewSlug(slug);

  if (!item) notFound();

  return <PortfolioLivePreview slug={slug} />;
}
