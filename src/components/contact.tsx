import { ContactInformation } from '../constants/content';

export const Contact = () => {
  const icons = require.context('../images/', false);
  return (
    <div className="w-full flex flex-col mt-48">
      <h2 className="text-primary text-4xl font-normal">Contact me!</h2>
      <div className="flex gap-12 mt-8 mx-auto mb-8">
        {ContactInformation.map(info => {
          return (
            <button
              onClick={() => {
                window.location.href = info.href;
              }}
              className=" bg-tag rounded-full w-16 h-16 flex cursor-pointer"
            >
              <img
                width="84"
                height="84"
                alt={info.text}
                src={icons(`./${info.icon}.svg`)}
                className="m-auto w-full h-full"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
};
