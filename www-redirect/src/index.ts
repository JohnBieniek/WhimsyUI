const canonicalOrigin = "https://experiencewhimsy.com";

export default {
  fetch(request: Request): Response {
    const incoming = new URL(request.url);
    const destination = new URL(incoming.pathname, canonicalOrigin);
    destination.search = incoming.search;
    return Response.redirect(destination.toString(), 308);
  },
};
