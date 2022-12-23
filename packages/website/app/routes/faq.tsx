import type { MetaFunction } from '@remix-run/node'
import QuestionAnswer from '@/modules/faq/question-answer'
import { AppLink } from '@/modules/shared/link/app-link'
import { generateMeta } from '@/modules/shared/seo/meta'

export const meta: MetaFunction = () =>
  generateMeta({
    title: "Foire aux questions - L'Abeille Viennoise",
    description:
      "Vous avez des questions sur l'apiculture, les abeilles, les produits de l'Abeille Viennoise ? Vous trouverez peut-être la réponse dans notre foire aux questions.",
    url: `https://labeilleviennoise.com/faq`,
  })

export default function Faq() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-primary text-center">
        Foire aux questions
      </h1>
      <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 md:grid-cols-2">
        <div>
          <h2 className="max-w-2xl mb-8 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl">
            Parrainage
          </h2>
          <QuestionAnswer question="Pourquoi parrainer ?">
            <p>
              Devenir parrain est une manière différente de posséder tout ou
              partie d’une ruche. Par votre action,{' '}
              <strong className="font-bold">vous préservez des abeilles</strong>{' '}
              et nous nous chargeons de veiller sur elles.
              <br />
              Grâce à votre contribution financière, nous pouvons améliorer
              notre matériel de production et investir dans de nouvelles ruches,
              ainsi nous agrandissons ensemble le rucher.
              <br />
              Autre avantage, vous pouvez{' '}
              <strong className="font-bold">
                découvrir et déguster en avant première le miel
              </strong>{' '}
              de vos petites protégées.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Comment fonctionne le parrainage ?">
            <p>
              <AppLink to="/parrainage">Grâce à nos 3 formules</AppLink>, vous
              pouvez choisir en fonction de votre budget.
            </p>
            <ul className="list-disc list-inside">
              <li className="mt-4">
                La <strong className="font-bold">formule Nectar</strong> vous
                permet de préserver 5.000 abeilles, soit l’équivalent d’un
                essaim. Nous sèmerons 5.000 fleurs dans notre espace dédié.
              </li>
              <li className="mt-4">
                La <strong className="font-bold">formule Propolis</strong> quant
                à elle propose de préserver une colonie entière d’abeilles. Vous
                devenez ainsi parrain d’une partie de la ruche ainsi que d’un
                arbre mellifère planté à cette occasion.
              </li>
              <li className="mt-4">
                La <strong className="font-bold">formule Gelée Royale</strong>{' '}
                vous offre tous les avantages des autres formules et la
                possibilité de sauvegarder la totalité d’une ruche.
              </li>
            </ul>
          </QuestionAnswer>
          <QuestionAnswer question="Quand obtiendrais-je mes avantages de parrainage ?">
            <p>
              Les récompenses sont{' '}
              <strong className="font-bold">uniquement annuelles</strong>. Elles
              sont envoyées au bout de 12 paiements mensuels ou immédiatement
              après avoir choisi la formule annuelle.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Les avantages du parrainage ?">
            <p>
              Vos avantages sont répartis sur l’année entière.
              <br />
              Pour les photos, nous vous enverrons des nouvelles de la ruche
              tous les trimestres.
              <br />
              Dès votre inscription, vous recevrez notre petite mascotte.
              <br />
              Concernant les plantations de fleurs et d’arbres, nous suivrons
              bien sûr les saisons mais vous en serez informés.
              <br />
              Les pots de miel seront répartis par trimestre pour les formules
              propolis et gelée royale.
              <br />
              Dans la <strong className="font-bold">formule Nectar</strong>,
              nous l’enverrons dès la première récolte de miel.
            </p>
          </QuestionAnswer>
        </div>

        <div>
          <h2 className="max-w-2xl mb-8 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl">
            Les produits
          </h2>
          <QuestionAnswer question="D'où provient le miel ?">
            <p>
              Nos ruches sont principalement installées sur Vienne, en Isère.
              Nous les déplaçons sur le{' '}
              <strong className="font-bold">secteur Rhône Alpes</strong>, en
              fonction des floraisons et des saisons.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Comment est extrait le miel ?">
            <p>
              Nous procédons aujourd'hui à une extraction manuelle du miel. Vous
              pouvez voir les étapes d’extraction du miel sur la page{' '}
              <AppLink to="/la-miellerie">La Miellerie</AppLink>.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Comment sont réalisées les bougies ?">
            <p>
              Pour les bougies, nous utilisons la cire de nos abeilles que nous
              conservons après récolte, nous la filtrons et la purifions avant
              de la travailler sous forme de bougies.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Qu’est-ce qu’un Bee-Wrap ?">
            <p>
              Il s’agit d’un{' '}
              <strong className="font-bold">
                emballage 100% coton réutilisable
              </strong>{' '}
              enduit de la cire de nos abeilles. Ce dernier a pour but de{' '}
              <strong className="font-bold">
                remplacer le film alimentaire
              </strong>
              .
              <br />
              L'entretien est simple, un peu d’eau froide savonneuse, rincer,
              laisser sécher à plat et réutiliser autant de fois que possible.
              Il est confectionné par nos soins dans la miellerie.
            </p>
          </QuestionAnswer>
          <QuestionAnswer question="Les autres créations artisanales">
            <p>
              Nous proposons{' '}
              <strong className="font-bold">
                des sujets réalisés au crochet
              </strong>{' '}
              par nos soins.
              <br />
              Principalement confectionnés en fil acrylique rembourrage ouate
              polyester, ils sont lavables en machine à 30°.
              <br />
              Tous les modèles présentés sont{' '}
              <strong className="font-bold">
                uniques et personnalisables
              </strong>{' '}
              sur commande et peuvent être réalisés en plusieurs exemplaires. Le
              stock étant limité, il est préférable de commander.
            </p>
          </QuestionAnswer>
        </div>
      </div>

      <p className="text-center">
        Vous avez toujours une question ?{' '}
        <AppLink to="/contact">Par ici !</AppLink>
        <br />
        Nous vous répondrons dans les plus brefs délais.
      </p>
    </div>
  )
}
