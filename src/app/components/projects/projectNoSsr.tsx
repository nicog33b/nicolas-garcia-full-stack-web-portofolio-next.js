'use client';

import dynamic from 'next/dynamic';

const ProjectsNoSSR = dynamic(() => import('./projects'), { ssr: false });

export default ProjectsNoSSR;
