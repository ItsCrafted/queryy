var index_default = {
  fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
    }
    return env.ASSETS.fetch(url);
  }
};
export {
  index_default as default
};
