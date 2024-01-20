export default function SkillBandages(props: { language: string }) {
  return (
    <div className="w-fit px-5 flex items-center rounded-xl h-10 bg-gray-200 text-gray-500 m-2">
      <p>{props.language}</p>
    </div>
  );
}
