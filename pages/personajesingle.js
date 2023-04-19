import Personajes from "@/components/personajes";

const Personajesingle = ({dataProps}) => {
 
 
  console.log("aca server side pro", dataProps);


  return (
      <Personajes info={dataProps} />
  );
};
export async function getServerSideProps(context) {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const data = await res.json();
  const { results, info } = data;
  console.log(results);
  
  const dataProps = results.sort((a, b) => a.name.localeCompare(b.name));
  return {
    props: {
      dataProps
    }
  }
}
export default Personajesingle;
