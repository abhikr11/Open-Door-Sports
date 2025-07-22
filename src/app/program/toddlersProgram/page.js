import ToddlersProgram from "../../../components/ourProgram/ToddlersProgram";

export async function generateStaticParams() {
  return [
    {},
  ];
}

export default function ToddlersProgramPage() {
  return <ToddlersProgram />;
}
