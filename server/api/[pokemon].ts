export default defineEventHandler(async event => {
    const { pokemon } = event.context.params;

    // server-side = $fetch
    // client-side = useAsyncData / useFetch
    const response = await $fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    // appear in server console, not in browser terminal, because it's in server-side
    // console.log(response);

    const formattedResponse = {
        id: response.id,
        name: response.name,
        sprite: response.sprites.front_default
    }

    return formattedResponse;
})