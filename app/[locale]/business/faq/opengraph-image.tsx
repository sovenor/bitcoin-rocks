import { OG_CONTENT_TYPE, OG_SIZE, ogHandler } from "@/lib/og/handler";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "bitcoin.rocks";

export default async function Image({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	return ogHandler("business/faq", locale);
}
