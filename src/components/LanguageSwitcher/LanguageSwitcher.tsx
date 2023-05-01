import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import S from './styled.js'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()
  const router = useRouter()
  const { locale } = router

  const handleChangeLanguage = useCallback(() => {
    const lang = locale === 'ar' ? 'en' : 'ar'

    const href = window.location.href.replace(`/${locale}/`, `/${lang}/`)

    window.location.replace(href)
  }, [i18n])

  return (
    <S.Lang
      onClick={handleChangeLanguage}
      className="fz12 fw700 language-switcher"
    >
      {i18n.language === 'ar' ? 'English' : 'العربية'}
    </S.Lang>
  )
}

export default LanguageSwitcher
