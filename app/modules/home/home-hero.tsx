import { IKImage } from 'imagekitio-react'
import AppButton from '../shared/button/app-button'
import IconArrowRight from '../shared/icons/icon-arrow-right'

export default function HomeHero() {
  return (
    <section className="min-h-[400px] grid max-w-screen-xl px-4 py-8 mx-auto md:gap-8 xl:gap-0 md:py-16 md:grid-cols-12">
      <div className="mr-auto order-2 md:order-1 place-self-center md:col-span-6 lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Devenez parrain
        </h1>
        <p className="max-w-2xl mb-6 font-light text-gray-500 md:mb-8 md:text-md md:text-xl dark:text-gray-400">
          Aidez au développement de nouvelles colonies d'abeilles et participez
          à leur sauvegarde.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <AppButton href="/parrainage" type="primary">
            Comment ça marche ?
            <IconArrowRight />
          </AppButton>
        </div>
      </div>

      <div className="mx-auto mb-6 md:mb-0 order-1 md:order-2 md:mt-0 md:col-span-6 lg:col-span-5 md:flex">
        <IKImage
          path="images/bee-large.png"
          alt="Illustration d'une abeille"
          lqip={{ active: true, quality: 10 }}
          transformation={[{ height: '400' }]}
        />
      </div>
    </section>
  )
}