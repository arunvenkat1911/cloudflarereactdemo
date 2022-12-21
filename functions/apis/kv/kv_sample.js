export async function onRequest(context) {
	const task = await context.env.KV_Sample.get("Name");
	return new Response(task);
}