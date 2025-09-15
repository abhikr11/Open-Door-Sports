import PreschoolersProgram from "../../../components/ourProgram/PreschoolersProgram";
import CallToAction from "../../../components/home/CallToAction";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function PreschoolersProgramPage() {
  return (
    <>
      <PreschoolersProgram />
      <CallToAction />
    </>
  );
}
