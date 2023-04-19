'use client';

import { useSearchParams } from 'next/navigation';


export async function Page({params} : {params: {name: "string"}}): Promise<JSX.Element>{
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const name = params.name;
  return <>
  <p>Bus Name: {name}</p>
  <p>Searching for..... {search}</p>
  </>
}

export default Page; 