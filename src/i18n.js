import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          NavHome: {
            text: 'Home',
          },
          NavAllCharacters: {
            text: 'All characters',
          },
          NavAllLocations: {
            text: 'All locations',
          },
          NavAllEpisodes: {
            text: 'All episodes',
          },
          LangEn: {
            text: 'English',
          },
          LangEs: {
            text: 'Spanish',
          },
          ButtonHome: {
            text: 'Watch characters',
          },
          AllCharactersTitle: {
            text: 'All characters',
          },
          PaginationPrev: {
            text: 'Prev',
          },
          PaginationNext: {
            text: 'Next',
          },
          LocationListTitle: {
            text: 'Locations',
          },
          EpisodeListTitle: {
            text: 'Episodes',
          },
          LocationGo: {
            text: 'Go to',
          },
          EpisodeWatch: {
            text: 'Watch episode',
          },
          AllCharactersInEpisode: {
            text: 'All characters in the episode',
          },
          Seasson: {
            text: 'Seasson',
          },
          Episode: {
            text: 'Episode',
          },
          StatusAlive: {
            text: 'Alive',
          },
          StatusDead: {
            text: 'Dead',
          },
          Unknown: {
            text: 'Unknown',
          },
          GenderFemale: {
            text: 'Female',
          },
          GenderMale: {
            text: 'Male',
          },
          GenderGenderless: {
            text: 'Genderless',
          },
          SpecieHuman: {
            text: 'Human',
          },
          SpecieHumanoid: {
            text: 'Humanoid',
          },
          SpeciePoopybutthole: {
            text: 'Poopybutthole',
          },
          SpecieMythological: {
            text: 'Mythological creature',
          },
          isFrom: {
            text: 'is from',
          },
          Location: {
            text: 'Location',
          },
          Origin: {
            text: 'Origin',
          },
          Where: {
            text: 'where',
          },
          Appears: {
            text: 'appears',
          },
          GoTo: {
            text: 'Go to',
          },
          AllCharactersInLocation: {
            text: 'All characters in this location',
          },
          TypePlanet: {
            text: 'Planet',
          },
          TypeCluster: { text: 'Cluster' },
          TypeSpaceStation: {
            text: 'Space station',
          },
          TypeMicroverse: {
            text: 'Microverse',
          },
          TypeResort: {
            text: 'Resort',
          },
          TypeFantasyTown: {
            text: 'Fantasy town',
          },
          DimensionFantasy: {
            text: 'Fantasy dimension',
          },
          DimensionPostApocalyptic: {
            text: 'Post-Apocalyptic Dimension',
          },
          Episodes: {
            text: 'Episodes',
          },
        },
      },
      es: {
        translation: {
          NavHome: {
            text: 'Inicio',
          },
          NavAllCharacters: {
            text: 'Todos los personajes',
          },
          NavAllLocations: {
            text: 'Todas las ubicaciones',
          },
          NavAllEpisodes: {
            text: 'Todos los episodios',
          },
          LangEn: {
            text: 'Inglés',
          },
          LangEs: {
            text: 'Español',
          },
          ButtonHome: {
            text: 'Ver personajes',
          },
          PaginationPrev: {
            text: 'Anterior',
          },
          PaginationNext: {
            text: 'Siguiente',
          },
          LocationListTitle: {
            text: 'Ubicaciones',
          },
          EpisodeListTitle: {
            text: 'Episodios',
          },
          LocationGo: {
            text: 'Ir a',
          },
          EpisodeWatch: {
            text: 'Ver episodio',
          },
          AllCharactersInEpisode: {
            text: 'Todos los personajes en el episodio',
          },
          Seasson: {
            text: 'Temporada',
          },
          Episode: {
            text: 'Episodio',
          },
          StatusAlive: {
            text: 'Vivo',
          },
          StatusDead: {
            text: 'Muerto',
          },
          Unknown: {
            text: 'Desconocido',
          },
          GenderFemale: {
            text: 'Mujer',
          },
          GenderMale: {
            text: 'Hombre',
          },
          GenderGenderless: {
            text: 'Sin género',
          },
          SpecieHuman: {
            text: 'Humano',
          },
          SpecieHumanoid: {
            text: 'Humanoide',
          },
          SpeciePoopybutthole: {
            text: 'Ojete sucio',
          },
          SpecieMythological: {
            text: 'Criatura mitologica',
          },
          isFrom: {
            text: 'es de',
          },
          Location: {
            text: 'Ubicación',
          },
          Origin: {
            text: 'Origen',
          },
          Where: {
            text: 'donde',
          },
          Appears: {
            text: 'aparece',
          },
          GoTo: {
            text: 'Ir a',
          },
          AllCharactersInLocation: {
            text: 'Todos los personajes en esta ubicación',
          },
          TypePlanet: {
            text: 'Planeta',
          },
          TypeCluster: { text: 'Grupo' },
          TypeSpaceStation: {
            text: 'Estacion espacial',
          },
          TypeMicroverse: {
            text: 'Microverso',
          },
          TypeResort: {
            text: 'Complejo',
          },
          TypeFantasyTown: {
            text: 'Pueblo de fantasia',
          },
          DimensionFantasy: {
            text: 'Dimension de fantasia',
          },
          DimensionPostApocalyptic: {
            text: 'Dimension Post Apocaliptica',
          },
          Episodes: {
            text: 'Episodios',
          },
        },
      },
    },
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  })
