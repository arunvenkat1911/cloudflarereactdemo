export async function onRequestGet(context) {  
    const id = context.env.DO_Sample2.newUniqueId();
    const stub = context.env.DO_Sample2.get(id);
  
    // Pass the request down to the durable object
    return stub.fetch(context.request);
  }