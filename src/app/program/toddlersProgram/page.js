import ToddlersProgram from "../../../components/ourProgram/ToddlersProgram";
import CallToAction from "../../../components/home/CallToAction";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function ToddlersProgramPage() {
  return (
    <>
      <ToddlersProgram />
      <CallToAction />
    </>
  );
}
