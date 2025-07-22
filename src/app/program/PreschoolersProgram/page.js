import PreschoolersProgram from "../../../components/ourProgram/PreschoolersProgram";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function PreschoolersProgramPage() {
  return <PreschoolersProgram />;
}
