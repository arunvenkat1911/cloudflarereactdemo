export async function onRequest(context) {
	await context.env.KV_Sample.put("Name", "arun");
	await context.env.KV_Sample.put("Name2", "Kumar");
	const strName1 = await context.env.KV_Sample.get("Name");
	const strName2 = await context.env.KV_Sample.get("Name2");
	return new Response(strName1 + " " + strName2);
}