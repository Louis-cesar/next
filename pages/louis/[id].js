export const getStaticPaths = async () => {

const res = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await res.json();

const paths = data.map(louie => {

return {
    params: { id: louie.id. toString() }
}

})

return{
    paths,
    fallback: false
}
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return{
        props: {louie: data}
    }
}
const Details = ({ louie }) => {
    return (  
        <div>
            <h1>{louie.name}</h1>
            <p>{louie.email}</p>
            <p>{louie.website}</p>
            <p>{louie.address.city}</p>
            
        </div>
    );
}
 
export default Details;