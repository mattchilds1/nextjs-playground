
const About = () => {
  // throw new Error("Uh Oh Scoob")
  return <p>Hello :wave:</p>
}

export default About


export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  // const post = await fetch(`https://.../${params.slug}`).then((res) =>
  //   res.json(),
  // );

  const post = {title: "About Page"}

  return {
    title: post.title,
  };
}