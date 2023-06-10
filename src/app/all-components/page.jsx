'use client';

import AllComponents from '@/components/all-components/all-components.component';

export async function getStaticProps() {
  return {
    props: {},
    fallback: false
  };
}

export default function Page() {
  return <AllComponents />;
}
