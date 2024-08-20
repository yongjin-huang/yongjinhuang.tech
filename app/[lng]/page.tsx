import { useTranslation } from "@/app/i18n";

export default async function HomePage({ params: { lng } }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng);
  return (
    <main>
      <h1>{t("welcome")}</h1>
    </main>
  );
}
