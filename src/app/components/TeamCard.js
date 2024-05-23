const TeamCard = ({ image, name, position, skills }) => {
  return (
    <div className="relative w-[273px] h-[340px] overflow-hidden mx-4">
      <img src={image} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 w-full text-white p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm">{position}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="bg-white bg-opacity-20 text-white px-2 py-1 rounded-full text-xs"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
