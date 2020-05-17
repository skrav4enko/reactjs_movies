import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage = () => {
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    if (pathname === '/') {
      router.push('/search');
    }
  });

  return <div>Redirecting ...</div>;
};

export default IndexPage;
