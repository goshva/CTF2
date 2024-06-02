'use client';

import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function LanguageChanger() {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();

    const handleChange = async (newLocale: string) => {
        console.log("Selected Language:", newLocale);

        // Set cookie for next-i18n-router
        Cookies.set('NEXT_LOCALE', newLocale, { expires: 30 });

        // Change i18n language
        await i18n.changeLanguage(newLocale);

        // Redirect to the new locale path
        router.push(`/${newLocale}`);
        router.refresh();
    };

    return (
        <div className="btn-group">
            <button className="btn btn-secondary btn-lg" type="button">
                {currentLocale === 'en' ? 'English' :
                    currentLocale === 'ru' ? 'Русский' :
                        currentLocale === 'es' ? 'Español' :
                            currentLocale === 'zh' ? '中文' : 'Select Language'}
            </button>
            <button
                type="button"
                className="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span className="sr-only">Toggle Dropdown</span>
            </button>
            <div className="dropdown-menu">
                <button className="dropdown-item" onClick={() => handleChange('en')}>English</button>
                <button className="dropdown-item" onClick={() => handleChange('ru')}>Русский</button>
                <button className="dropdown-item" onClick={() => handleChange('es')}>Español</button>
                <button className="dropdown-item" onClick={() => handleChange('zh')}>中文</button>
            </div>
        </div>
    );
}
