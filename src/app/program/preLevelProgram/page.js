
import PrepLevelProgram from "../../../components/ourProgram/PrepLevelProgram";
import CallToAction from "../../../components/home/CallToAction";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function PrepLevelProgramPage() {
  return (
    <>
      <PrepLevelProgram />
      <CallToAction />
    </>
  );
}
