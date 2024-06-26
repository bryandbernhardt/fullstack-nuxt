export default defineEventHandler(event => {
	const auth = getCookie(event, 'pokemon-auth');
	const url = getRequestURL(event);

	if (!auth && url.pathname !== '/login')
		return sendRedirect(event, '/login', 302);
})