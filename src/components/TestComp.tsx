import { useTranslations } from "next-intl";

export default function TestComp() {
    const t = useTranslations('Test');

    return (
        <h1>{t('home')}</h1>
    )

}