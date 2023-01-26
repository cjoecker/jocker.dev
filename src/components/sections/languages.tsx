import { LanguagesData } from '../../constants/experience-and-education';
import { Section } from '../shared/section';
import { getAltTextFromFileName } from '../shared/utils';

export const Languages = () => {
  const icons = require.context('../../images/', false);
  return (
    <Section title="Languages">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {LanguagesData.map(language => {
          return (
            <div className="col-span-1" key={language.language}>
              <img
                width="130"
                height="130"
                alt={getAltTextFromFileName(language.icon)}
                src={icons(`./${language.icon}`)}
              />
              <div className="font-bold text-3xl mt-2">{language.language}</div>
              <div className="text-2xl mt-1">{language.level}</div>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

