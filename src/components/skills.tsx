import { DevSkills, UxSkills } from '../constants/content';

export const Skills = () => {
  return (
    <div className="w-full flex flex-col mt-48">
      <h2 className="text-primary text-4xl font-normal text-left">Skills</h2>
      <div className="flex">
        <Tags skills={DevSkills} title="Web Development" />
        <Tags skills={UxSkills} title="UX/UI Design" />
      </div>
    </div>
  );
};

export const Tags = ({skills, title}: {skills:string[], title: string}) => {
  return (
    <div className="mt-4 flex-1">
      <h3 className="text-xl text-left mb-4">
        {title}
      </h3>
      <div className="flex gap-4 text-left flex-wrap">
        {skills.map(skill=>{
          return(<div className="bg-tag inline-block rounded-full px-3 text-lg capitalize">{skill}</div>)
        })}
      </div>
    </div>
  );
};
