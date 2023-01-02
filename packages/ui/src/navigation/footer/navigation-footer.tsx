import { IconFacebook, IconInstagram } from '@labeilleviennoise/icons'
import { Link } from '@remix-run/react'
import FooterLink from '@/navigation/footer/footer-link'
import NavigationFooterSocialNetworkLink from '@/navigation/footer/navigation-footer-social-network-link'
import LogoWithTextHorizontal from '@/shared/logo/logo-with-text-horizontal'
import LogoWithTextVertical from '@/shared/logo/logo-with-text-vertical'

const NavigationFooter = () => (
  <footer className="p-4 bg-white sm:p-6">
    <div className="mx-auto max-w-screen-xl">
      <div className="sm:flex justify-between items-center">
        <div className="mb-6 sm:mb-0">
          <Link prefetch="none" to="/">
            <LogoWithTextVertical className="hidden sm:flex" />
            <LogoWithTextHorizontal className="sm:hidden justify-center" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 justify-items-center">
          <section className="sm:text-right">
            <div className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Ressources
            </div>
            <ul className="text-gray-600">
              <li className="mb-4">
                <FooterLink to="/">Accueil</FooterLink>
              </li>
              <li className="mb-4">
                <FooterLink to="/faq">Foire aux questions</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Contactez-nous</FooterLink>
              </li>
            </ul>
          </section>
          <section className="text-right">
            <div className="mb-6 text-sm font-semibold text-gray-900 uppercase">
              Entreprise
            </div>
            <ul className="text-gray-600">
              <li className="mb-4">
                <FooterLink to="/equipe">Notre équipe</FooterLink>
              </li>
              <li className="mb-4">
                <FooterLink to="/mentions-legales">Mentions légales</FooterLink>
              </li>
              <li>
                <FooterLink
                  to="/conditions-generales-vente"
                  title="Conditions Générales de Vente"
                >
                  C. G. V.
                </FooterLink>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

      <div className="flex flex-col gap-4 sm:flex-row items-center justify-between">
        <span className="text-sm text-gray-500">
          © {new Date().getFullYear()}{' '}
          <FooterLink to="/">L'Abeille Viennoise</FooterLink>. Tous droits
          réservés.
        </span>
        <div className="flex space-x-6 justify-center">
          <NavigationFooterSocialNetworkLink href="https://www.facebook.com/profile.php?id=100083012750809">
            <IconFacebook />
          </NavigationFooterSocialNetworkLink>
          <NavigationFooterSocialNetworkLink href="https://www.instagram.com/labeilleviennoise/">
            <IconInstagram />
          </NavigationFooterSocialNetworkLink>
        </div>
      </div>
    </div>
  </footer>
)

export default NavigationFooter
