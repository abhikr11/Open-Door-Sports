import AbovePrepProgram from "../../../components/ourProgram/AbovePrepProgram";
import CallToAction from "../../../components/home/CallToAction";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function AbovePrepProgramPage() {
  return (
    <>
      <AbovePrepProgram />
      <CallToAction />
    </>
  );
}
