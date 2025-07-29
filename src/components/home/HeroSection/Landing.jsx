'use client';

import RightSideBlock from './RightSideBlock';
import LeftSideBlock from './LeftSideBlock';

export default function Landing({ text_1, text_2 }) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center pt-25 md:py-32 md:px-25 min-h-screen bg-white">
      <LeftSideBlock text_1={text_1} text_2={text_2} />
      <RightSideBlock />
    </section>
  );
}
