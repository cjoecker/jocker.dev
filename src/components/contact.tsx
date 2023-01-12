import { ContactInformation } from '../constants/content';

export const Contact = () => {
  const icons = require.context('../images/', false);
  return (
    <div className="w-full flex flex-col mt-48">
      <h2 className="text-primary text-4xl font-normal text-left">
        Contact me!
      </h2>
      <div className="flex gap-6 mt-6 mx-auto">
        {ContactInformation.map(info => {
          return (
            <div className="p-4 bg-tag rounded-full w-12 h-12 flex cursor-pointer">
              <img
                width="84"
                height="84"
                alt={info.text}
                src={icons(`./${info.icon}.svg`)}
                className="m-auto w-full h-full"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
